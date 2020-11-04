let yargs = require('yargs');

const users = [
	{ id: 1, name: 'Vova', surname: 'Doe' },
	{ id: 2, name: 'Sara', surname: 'Jmith' },
];

const argv = yargs
	.number('id')
	.string('name')
	.string('surname')
	.alias('name', 'n')
	.alias('surname', 's').argv;

// console.log(argv);

let { id, name, surname } = argv;

let usersFound = users.filter((user) => {
	// if (id && id != user.id) {
	// 	return false;
	// }

	// if (name && name != user.name) {
	// 	return false;
	// }

	// if (surname && surname != user.surname) {
	// 	return false;
	// }

	// return true;

	return (
		checkField('id', user) &&
		checkField('name', user) &&
		checkField('surname', user)
	);
});

function checkField(fieldName, user) {
	return !(argv[fieldName] && argv[fieldName] != user[fieldName]);
}

console.log(usersFound);
