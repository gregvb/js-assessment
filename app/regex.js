exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var myRe = new RegExp(/[0-9]+/);

    var returnValue = myRe.test(str);

    return returnValue;

  },

  containsRepeatingLetter: function(str) {

  },

  endsWithVowel: function(str) {
      var myRe = new RegExp(/a$|e$|i$|o$|u$|A$|E$|I$|O$|U$/);

      var returnValue = myRe.test(str);

      return returnValue;

  },

  captureThreeNumbers: function(str) {

      var myRe = new RegExp(/\d{3}/);

      var returnValue = myRe.exec(str);

      return returnValue ? returnValue[0] : false;

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

      var myRe = new RegExp(/$/);

      var returnValue = myRe.test(str);

      return returnValue;

  }
};
