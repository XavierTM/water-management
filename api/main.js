
'use strict';


console.clear();

const express = require('express');


const app = express();

// middlewares
app.use(express.json());

// routes
const systemData = require('./system-data');

app.use('/api/system-data', systemData);

// app.get('/product-availability', function(req, res) {


// 	const { id } = req.query;
// 	const available = (id === 'D726D8CA');
// 	console.log({ id });
// 	res.send({ available });

// });


const PORT = process.env.PORT || 8080;


app.listen(PORT, function() {
	console.log('Server started at PORT', PORT);
});