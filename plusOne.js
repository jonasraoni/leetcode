//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var plusOne = function (digits) {
	for (let i = digits.length; i--;) {
		if (++digits[i] < 10)
			return digits;
		digits[i] = 0;
	}
	digits.unshift(1);
	return digits;
};