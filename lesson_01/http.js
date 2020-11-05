let http = require('http');

let server = http.createServer((req, res) => {
	// 1. HTTP method
	// 2. path-params, query
	// 3. request bidy
	// 4. header

	console.log('Request recieved...');

	const method = req.method; // GET, POST
	const pathParamsAndQuery = req.url; //
	const headers = req.headers; //

	let body = '';
	req.on('data', (bodyChunk) => {
		console.log('bodyChunk', bodyChunk);
		body += bodyChunk.toString();
	});

	req.on('end', () => {
		// body recieved
		console.log('req', req);

		res.writeHead(201, {
			'Content-Type': 'text/plain',
		});
		res.end(body);
	});
});

server.listen(5000, () => {
	console.log('Starting listening on port', 5000);
});
