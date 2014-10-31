describe("ToyotaCorolla", function() {
  var triton;

  beforeEach(function() {
    CarPlant.LOG = "";
    triton = CarPlant.makeToyotaCorolla();
  });

  it("has the correct name", function() {
    expect(triton.name()).toBe("Toyota Corolla");
  });

  it("only steers the front wheels when turning left", function() {
    triton.turnLeft(10);
    expect(CarPlant.LOG).toBe("front left turning left 10 degrees\nfront right turning left 10 degrees\n");
  });

  it("only steers the front wheels when turning right", function() {
    triton.turnRight(10);
    expect(CarPlant.LOG).toBe("front left turning right 10 degrees\nfront right turning right 10 degrees\n");
  });

  it("accelerates only the front wheels when accelerating", function() {
    triton.accelerate(10);
    expect(CarPlant.LOG).toBe("front left accelerating 10 kph\nfront right accelerating 10 kph\n");
  });

});
