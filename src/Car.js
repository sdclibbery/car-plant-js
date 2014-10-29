Car = Class.extend({

  _frontLeft: new Wheel("front left"),
  _frontRight: new Wheel("front right"),
  _rearLeft: new Wheel("rear left"),
  _rearRight: new Wheel("rear right"),

  name: function () { throw "Called abstract function"; },
  accelerate: function (kmsPerHour) { throw "Called abstract function"; },

  turnLeft: function (degrees) {
    this._frontLeft.turnLeft(degrees);
    this._frontRight.turnLeft(degrees);
  },

  turnRight: function (degrees) {
    this._frontLeft.turnRight(degrees);
    this._frontRight.turnRight(degrees);
  }

});
