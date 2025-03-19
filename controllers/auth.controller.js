const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const User = require("../models/user");
require('dotenv').config();

// Función para registrar un nuevo usuario
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validación de campos obligatorios
    if (!name || !password) {
      return res.status(400).json({ message: "email y contraseña obligatorios" });
    }

    // Generación del hash para la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creación y guardado del nuevo usuario
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Usuario registrado" });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar usuario", error });
  }
};

// Función para iniciar sesión y generar el token JWT
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar al usuario en la base de datos
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    // Comparar la contraseña proporcionada con el hash almacenado
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    // Establecer la expiración del token (30 días)
    const expiration = moment().add(30, "days").unix();

    // Generar el token JWT
    const token = jwt.sign({ id: user._id, exp: expiration }, process.env.JWT_SECRET);

    res.json({ message: "Login exitoso", token, expiresIn: "30 días" });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión", error });
  }
};

module.exports = { register, login };
