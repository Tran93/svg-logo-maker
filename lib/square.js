// Importing the Shape constructor.
const Shape = require('./shapes');

// We use the Shape constructor to make a class for Square.
class Square extends Shape {
    render() {
        return `<rect x="100" y="55" width="300" height="200" fill="${this.color}" />`
    };
};

// Exporting the square constructor class so we can use else where.
module.exports = Square;