// Importing the Shape constructor.
const Shape = require('./shapes');

// We use the Shape constructor to make a class for Circle.
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    };
};

// Exporting the circle constructor class so we can use else where.
module.exports = Circle;