//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var isPalindrome = s => [...(s = s.replace(/[^\da-z]/gi, '').toLowerCase())].reverse().join('') === s;