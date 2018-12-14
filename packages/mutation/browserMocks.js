var localStorageMock = (function() {
  var store = {};

  return {
      getItem: function(key) {
          return store[key] || null;
      },
      setItem: function(key, value) {
        console.log(key, value)
          store[key] = value.toString();
      },
      clear: function() {
          store = {};
      }
  };

})();

Object.defineProperty(window, 'localStorage', {
   value: localStorageMock
});
