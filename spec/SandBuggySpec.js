describe("SandBuggy", function() {
  var triton;

  beforeEach(function() {
    CarPlant.LOG = "";
    triton = CarPlant.makeSandBuggy();
  });

  it("has the correct name", function() {
    expect(triton.name()).toBe("Sand Buggy");
  });

  it("turns all the wheels when turning left", function() {
    triton.turnLeft(10);
    expect(CarPlant.LOG).toBe("front left turning left 10 degrees\nfront right turning left 10 degrees\nrear left turning left 10 degrees\nrear right turning left 10 degrees\n");
  });

  it("turns all the wheels when turning right", function() {
    triton.turnLeft(10);
    expect(CarPlant.LOG).toBe("front left turning right 10 degrees\nfront right turning right 10 degrees\nrear left turning right 10 degrees\nrear right turning right 10 degrees\n");
  });

  it("turns all wheels when accelerating", function() {
    triton.accelerate(10);
    expect(CarPlant.LOG).toBe("front left accelerating 10 kph\nfront right accelerating 10 kph\nrear left accelerating 10 kph\nrear right accelerating 10 kph\n");
  });

});
