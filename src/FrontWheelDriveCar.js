FrontWheelDriveCar = Car.extend({

  accelerate: function (kmsPerHour) {
    this._frontLeft.rotate(kmsPerHour);
    this._frontRight.rotate(kmsPerHour);
  }

});
