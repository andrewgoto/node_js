let express = require('express');
const Joi = require('joi');

let app = express();
const PORT = 3000;

app.use(express.json());

app.get('/hello', (req, res, next) => {
	console.log('req body', req.body);
	res.send('Hello world');
});

app.get(
	'/weather',

	(req, res, next) => {
		const schema = Joi.object({
			lat: Joi.string().min(3).max(30).required(),
			lon: Joi.string().min(3).max(30).required(),
		});

		let validationResult = schema.validate(req.query);

		if (validationResult.error) {
			let error = validationResult.error.details[0].message;
			return res.status(400).send(error);
		}
		next();
	},
	(req, res, next) => {
		// http://localhost:3000/weather?lat=123&lon=345
		console.log('req query', req.query); // object { lat: '123', lon: '345'}
		res.json({ weather: 'test' });
	}
);

app.listen(PORT, () => {
	console.log(`Server is listening...port ${PORT}`);
});
