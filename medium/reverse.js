//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var reverse = function(x) {
	const isNegative = x < 0;
	let digits = [...(x + '')].reverse();
	if (isNegative)
		digits.unshift(digits.pop());
	digits = +digits.join('');
	return digits > 2 ** 31 - 1 || digits < (-2) ** 31 ? 0 : digits;
};