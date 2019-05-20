const [node, path, ...argsToSum] = process.argv

function sumOfArgv() {
	const sum = (accumulator, currentValue) => accumulator + Number(currentValue);
	
	return argsToSum.reduce(sum, 0);
}

console.log(sumOfArgv());
