FourWheelDriveCar = Car.extend({

  accelerate: function (kmsPerHour) {
    this._frontLeft.rotate(kmsPerHour);
    this._frontRight.rotate(kmsPerHour);
    this._rearLeft.rotate(kmsPerHour);
    this._rearRight.rotate(kmsPerHour);
  }

});
