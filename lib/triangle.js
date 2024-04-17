// Importing the Shape constructor.
const Shape = require('./shapes');

// We use the Shape constructor to make a class for Triangle.
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    };
};

// Exporting the triangle constructor class so we can use else where.
module.exports = Triangle;