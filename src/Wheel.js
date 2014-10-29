Wheel = Class.extend({

  init: function (name) {
    this._name = name;
  },

  turnLeft: function (degrees) {
    CarPlant.LOG += this._name + " turning left " + degrees + " degrees\n";
  },

  turnRight: function (degrees) {
    CarPlant.LOG += this._name + " turning right " + degrees + " degrees\n";
  },

  rotate: function (kph) {
    CarPlant.LOG += this._name + " accelerating " + kph + " kph\n";
  }

});