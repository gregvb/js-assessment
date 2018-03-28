exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {

  indexOf: function(arr, item) {

    for (var i = 0, size = arr.length; i<size; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;

  },

  sum: function(arr) {

    var total;
    total = 0;

    for (var i = 0, size = arr.length; i<size; i++) {
      total = total + arr[i];
    }
    return total;
  },

  remove: function(arr, item) {

    var original = arr;

    for(var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i,1);
      }
    }

    return arr;

  },

  removeWithoutCopy: function(arr, item) {

    var original = arr;

    for(var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i,1);
      }
    }

    return arr;

  },

  append: function(arr, item) {
    arr.push(item);

    return arr;

  },

  truncate: function(arr) {

    var i = arr.length - 1;
    arr.splice(i,1);

    return arr;

  },

  prepend: function(arr, item) {
    arr.unshift(item);

    return arr;

  },

  curtail: function(arr) {

    arr.shift();

    return arr;

  },

  concat: function(arr1, arr2) {

    var arr = arr1.concat(arr2);

    return arr;
  },

  insert: function(arr, item, index) {

    arr.splice(index,0,item);

    return arr;

  },

  count: function(arr, item) {

    var total;
    total = 0;

    for (var i = 0, size = arr.length; i<size; i++) {
      if (arr[i] === item) {
        total = total + 1;
      }

    }
    return total;

  },

  duplicates: function(arr) {

    var returnarr = [];

    arr.sort();

    for (var i = 0, size = arr.length; i<size; i++) {
      if (returnarr.indexOf(arr[i]) === -1) {

        for (var j = i + 1, sizeInside = arr.length; j < sizeInside; j++) {

          if (arr[j] === arr[i]) {
            if (returnarr.indexOf(arr[j]) === -1) {
              returnarr.push(arr[j]);
              j = sizeInside;
            }
          }
        }

      }
    }
    return returnarr;

  },

  square: function(arr) {

      var returnarr = [];
      var squared = 0;

      for (var i = 0, size = arr.length; i<size; i++) {
        squared = arr[i] * arr[i];
        returnarr.push(squared);
          }

      return returnarr;

  },

  findAllOccurrences: function(arr, target) {

      var returnarr = [];

      for (var i = 0, size = arr.length; i<size; i++) {


                  if (arr[i] === target) {
                    returnarr.push(i);
                      }
                  }
      return returnarr;
  }
};
