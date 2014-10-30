describe("ToyotaCorollaSport", function() {
  var triton;

  beforeEach(function() {
    CarPlant.LOG = "";
    triton = CarPlant.makeToyotaCorollaSport();
  });

  it("has the correct name", function() {
    expect(triton.name()).toBe("Toyota Corolla Sport");
  });

  it("only steers the front wheels when turning left", function() {
    triton.turnLeft(10);
    expect(CarPlant.LOG).toBe("front left turning left 10 degrees\nfront right turning left 10 degrees\n");
  });

  it("only steers the front wheels when turning right", function() {
    triton.turnRight(10);
    expect(CarPlant.LOG).toBe("front left turning right 10 degrees\nfront right turning right 10 degrees\n");
  });

  it("accelerates only the rear wheels when accelerating", function() {
    triton.accelerate(10);
    expect(CarPlant.LOG).toBe("rear left accelerating 10 kph\nrear right accelerating 10 kph\n");
  });

});
