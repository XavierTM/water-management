
const mongoose = require('mongoose');
const Status = require('./Status');

const password = encodeURIComponent('coolFEB&#16');
// console.log(password);

if (process.env.NODE_ENV === 'production') 
	mongo_url = `mongodb+srv://water-management:${password}@cluster0.mmpvp.mongodb.net/water-management?retryWrites=true&w=majority`;
else
	mongo_url = 'mongodb://localhost:27017/water-leakage';

mongoose.connect(mongo_url);
// console.log(mongo_url);


module.exports = {
	Status
}