const mongoose = require('mongoose');

const HoldingsSchema = require('../schemas/HoldingsSchemas');

const HoldingsModel = mongoose.model('holdings', HoldingsSchema);

module.exports = HoldingsModel;
