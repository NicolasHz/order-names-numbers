//# order-names-numbers
const orderWords = words => words.split(' ').sort(function(a, b){return a.match(/\d+/g) - b.match(/\d+/g)}).join(" ");
