exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return arguments;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {
    return a.toFixed() * b;
  }
};
