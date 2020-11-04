// let fs = require('fs');
let fs = require('fs');
let { promises: fspPromises } = fs;

let path = require('path');

async function main2() {
	let pathToPJ = path.join(__dirname, './package.json');
	let data = await fspPromises.readFile(pathToPJ, 'utf-8');
	console.log(data);
}

main2();
