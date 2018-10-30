//# order-names-numbers
const orderWords = words => words.split(' ').sort(function(a, b){return a.match(/\d+/g) - b.match(/\d+/g)}).join(" ").replace(/\d+/g, '');
// 'ho2w h1i a3re tod5ay y4ou' => 'hi how are you'
