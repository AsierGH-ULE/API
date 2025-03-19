let token = req.header('Authorization');

if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. No hay token.' });
}

token = token.split(" ")[1];

try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
} catch (error) {
    res.status(401).json({ message: 'Token inválido' });
}
