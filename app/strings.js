exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString2: function(str, amount) {
    var returnStr = "";
    var charCount = 0;

      for (var i = 0, size = str.length; i<size; i++) {
          charCount = 0;

              for (var j = 0, sizeInside = returnStr.length; j < sizeInside; j++) {

                  if (returnStr[j] === str[i]) {
                      charCount++;
                  }
              }

              if (charCount < amount) {
                  returnStr = returnStr + str[i];
              }
      }
      return returnStr;
      //Don't do this. Figure out a map solution.
  },

    reduceString: function(str, amount) {
        var returnStr = "";
        var charCount = 0;

        for (var i = 0, size = str.length; i<size; i++) {
            charCount = 0;

            for (var j = returnStr.length - 1, sizeInside = returnStr.length; j > sizeInside - amount - 1; j--) {

                if (returnStr[j] === str[i]) {
                    charCount++;
                }
            }

            if (charCount < amount) {
                returnStr = returnStr + str[i];
            }
        }
        return returnStr;
        //Don't do this. Figure out a map solution.
    },


    wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

      var reversedString = "";

      for (var i = str.length -1; i >= 0; i--) {

          reversedString += str[i];
      }

      return reversedString;

  }
};
