
const mongoose = require('mongoose');
const Status = require('./Status');

mongoose.connect('mongodb://localhost:27017/water-leakage');


module.exports = {
	Status
}