const express = require('express');

const { getAllSensors, createSensor, getSensorById, updateSensor, deleteSensor } = require('../controllers/sensor.controller');

const router = express.Router();

router.get('/', getAllSensors);
router.get('/:id', getSensorById);
router.post('/', authMiddleware, createSensor);
router.put('/:id', authMiddleware, updateSensor);
router.delete('/:id', authMiddleware, deleteSensor);


module.exports = router;