//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var myAtoi = s => Math.max(Math.min(+s.match(/^\s*[+-]?\d*/)[0] || 0, 2 ** 31 - 1), (-2) ** 31);