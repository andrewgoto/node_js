let fs = require('fs');

let { promises: fsPromises } = fs;

// console.log(fs);

// fs.writeFile('example.txt', 'hello world', (err) => {
// 	if (err) {
// 		console.log(err);
// 	}

// 	fs.readFile('example.txt', 'utf-8', (err, data) => {
// 		console.log(data);

// 		fs.appendFile('example.txt', 'appnd new data to file', (err) => {
// 			if (err) {
// 				console.log(err);
// 			}
// 		});
// 	});
// });
// fs.writeFileSync;

// fsPromises
// 	.writeFile('example.txt', 'hello world')
// 	.then(() => {
// 		return fsPromises.readFile('example.txt', 'utf-8');
// 	})
// 	.then((data) => {
// 		console.log('appendFile', data);
// 		return fsPromises.appendFile(
// 			'example.txt',
// 			'!!!!appnd new data to file!!!'
// 		);
// 	});

async function main() {
	await fsPromises.writeFile('example.txt', 'hello world');

	let data = await fsPromises.readFile('example.txt', 'utf-8');
	console.log(data);
	await fsPromises.appendFile('example.txt', '!!!!appnd new data to file!!!');
}

main();

__;
