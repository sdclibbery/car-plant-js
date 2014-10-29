RearWheelDriveCar = Car.extend({

  accelerate: function (kmsPerHour) {
    this._rearLeft.rotate(kmsPerHour);
    this._rearRight.rotate(kmsPerHour);
  }

});
