const mongoose = require('mongoose');
const PositionsSchema = require('../schemas/PositionsSchema');

// Create the model from schema
const PositionsModel = mongoose.model('Positions', PositionsSchema);

module.exports = PositionsModel;
