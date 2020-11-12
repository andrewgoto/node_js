let express = require('express');
const Joi = require('joi');
const fetch = require('node-fetch');
const PORT = 3000;

// Add data from .evn
const dotenv = require('dotenv');
dotenv.config();
//

let app = express();

app.use(express.json());

app.get('/hello', (req, res, next) => {
	console.log('req body', req.body);
	res.send('Hello world');
});

app.get('/weather', validateRequestQueryParams, getWeather);

function validateRequestQueryParams(req, res, next) {
	const schema = Joi.object({
		lat: Joi.string().min(1).max(30).required(),
		lon: Joi.string().min(1).max(30).required(),
	});

	let validationResult = schema.validate(req.query);

	if (validationResult.error) {
		let error = validationResult.error.details[0].message;
		return res.status(400).send(error);
	}
	next();
}

async function getWeather(req, res, next) {
	const { lat, lon } = req.query;
	const API_KEY = process.env.OPEN_WEATHER_API_KEY;
	let response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
	);
	const responseBody = await response.json();

	console.log('responseBody', responseBody.cod);

	if (responseBody.cod >= 400) {
		return res.status(responseBody.cod).send(responseBody.message);
	}

	return res.status(200).send(responseBody);
}

app.listen(PORT, () => {
	console.log(`Server is listening...port ${PORT}`);
});
