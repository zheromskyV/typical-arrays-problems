
exports.min = function min (array) {
	if ((!Array.isArray(array)) || (!array.length)) {
		return 0;
	}
	array.sort((a, b) => a - b);
	return array[0];
}

exports.max = function max (array) {
	if ((!Array.isArray(array)) || (!array.length)) {
		return 0;
	}
	array.sort((a, b) => b - a);
	return array[0];
}

exports.avg = function avg (array) {
	if ((!Array.isArray(array)) || (!array.length)) {
		return 0;
	}
	let sum = 0;
	array.forEach(a => {
		sum += a;
	});
	return sum / array.length;
}
