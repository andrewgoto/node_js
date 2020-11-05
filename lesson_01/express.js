let express = require('express');
let app = express();

// Global widleware Conten-type application/json
app.use(express.json());
app.use(express.urlencoded()); // forms by default
app.use(express.static('public'));

app.get(
	'/example',

	//widleware
	(req, res, next) => {
		res.set('Set-Cookie', 'mycoockie=hello');

		let err = new Error();
		err.status = 400;
		next(err);
	},
	//widleware

	(req, res, next) => {
		console.log('second midleware');
		return res.send({ a: 'hello from Express!' });
	}
);

app.post('/example', (req, res, next) => {
	console.log(req.body);

	return res.send(req.body);
});

app.post('/sign-in', (req, res, next) => {
	console.log(req.body);

	return res.send('Request was sanded succesfuly');
});

app.listen(3000, () => {
	console.log('Express listening on port 3000');
});
