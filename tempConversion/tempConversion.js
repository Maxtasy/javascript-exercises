const ftoc = function(f) {
  c = (f - 32) * 5/9;

  return parseFloat(c.toFixed(1));
}

const ctof = function(c) {
  f = c * 9/5 + 32;
  
  return parseFloat(f.toFixed(1));
}

module.exports = {
ftoc,
ctof
}