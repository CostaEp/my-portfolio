// jest.setup.js

global.matchMedia = global.matchMedia || function () {
    return {
      matches: false,
      addListener: function () { },
      removeListener: function () { },
      addEventListener: function () { },
      removeEventListener: function () { },
      dispatchEvent: function () { }
    };
  };