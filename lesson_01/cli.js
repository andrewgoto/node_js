let [operator, ...numbers] = process.argv.slice(2);

console.log(numbers);

switch (operator) {
	case 'sum':
		let sum = numbers.reduce((acc, num) => {
			return acc + parseFloat(num);
		}, 0);
		console.log(sum);
		break;

	case 'deduct':
		let deduct = numbers.reduce((acc, num) => {
			return parseFloat(acc) - parseFloat(num);
		});
		console.log(deduct);
		break;

	default:
		throw new Error('Unsupported operation');
}
