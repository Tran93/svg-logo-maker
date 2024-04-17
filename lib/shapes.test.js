// Importing the constructor classes we will use for the testing.
const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

// Testing suite for circle is created.
describe("Circle", () => {
  // A test is created to check to see if the circle constructor class sets the color to blue.
        it("it should render a Circle", () => {
            const shape = new Circle();
            let color = "blue";
            shape.setColor(color);
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
      });
  });

  // Testing suite for triangle is created.
  describe("Triangle", () => {
    // A test is created to check to see if the triangle constructor class sets the color to red.
    it("it should render a triangle", () => {
        const shape = new Triangle();
        let color = "red";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
  });
});

// Testing suite for square is created.
describe("Square", () => {
  // A test is created to check to see if the square constructor class sets the color to black.
    it("it should render a Square", () => {
        const shape = new Square();
        let color = "black";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="100" y="55" width="300" height="200" fill="${color}" />`);
  });
});