//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var maxProfit = function (prices) {
	let total = 0;
	for (let i = prices.length; --i;) {
		if (prices[i] >= prices[i - 1])
			total += prices[i] - prices[i - 1];
	}
	return total;
};