exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {

  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {

      var returnValue = 0;

      var atext = "";
      atext = a.toString();

      var btext = "";
      btext= b.toString();

      var anumDec;
      anumDec = atext.split(".")[1];
      var anumlength = anumDec.length;

      var bnumDec;
      bnumDec = btext.split(".")[1];
      var bnumlength = bnumDec.length;

      var totalDec = anumlength + bnumlength;

      var multi = "";

      if (totalDec === 1){
          multi = "10";
          }
          else if (totalDec === 2)
            {
              multi = "100";
            }
              else if (totalDec === 3)
                {
                  multi = 1000;
                }

      if (multi === "") {
          returnValue = (a * b);
          }
          else {
          returnValue = Math.round(multi * (a * b)/multi);
          }

      return returnValue;

  }
};
