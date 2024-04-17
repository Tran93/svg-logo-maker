// We make a constructor that will take in a color variable.
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVariable) {
        this.color = colorVariable;
    }
}

// Exporting the Shape constructor so we can use else where.
module.exports = Shape;