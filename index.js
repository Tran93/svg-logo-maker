// Importing inquirer so we can ask for input from the user.
const inquirer = require('inquirer');
// Using this file to hold the new logo example when created.
const exampleFile = "./examples/logo.svg";
// Importing fs so we can write new files.
const fs = require('fs');
// Importing the triangle constructor class.
const Triangle = require('./lib/triangle');
// Importing the circle constructor class.
const Circle = require('./lib/circle');
// Importing the square constructor class.
const Square = require('./lib/square');

// Main function that will run the app.
function run() {
    // Calling inquirer to ask the user for the shape, shape color, characters, and characters color. 
    inquirer
        .prompt([
            {
                type: "input",
                message: "Input characters for logo(Max 3): ",
                name: "characters",
            },
            {
                type: "input",
                message: "Input text color: ",
                name: "text_color",
            },
            {
                type: "list",
                message: "Input shape: ",
                name: "shape",
                choices: ["circle", "triangle", "square"],
            },
            {
                type: "input",
                message: "Input shape color: ",
                name: "shape_color",
            },
        ])
        .then((response) => {
            // If statement that checks what shape the user picked and runs that block of code.
            if (response.shape === "circle") {
                // Calling the circle class and putting it in a variable.
                let newShape = new Circle();
                // Calling the setColor method to equal the color the user picked.
                newShape.setColor(response.shape_color);
                // Setting the new shape class to the needed string and calling to render the needed text.
                let shapeString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${newShape.render()}
          
            <text x="150" y="125" font-size="80" text-anchor="middle" fill="${response.text_color}">${response.characters}</text>
          
            </svg> `;

                // Using fs to write a new file to the example folder.
                fs.writeFile(exampleFile, shapeString, (err) => {
                    err ? console.log(err) : console.log("Generated logo!");
                });

            } else if (response.shape === "triangle") {
                let newShape = new Triangle();
                newShape.setColor(response.shape_color);
                let shapeString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${newShape.render()}
          
            <text x="150" y="165" font-size="80" text-anchor="middle" fill="${response.text_color}">${response.characters}</text>
          
            </svg> `;

                fs.writeFile(exampleFile, shapeString, (err) => {
                    err ? console.log(err) : console.log("Generated logo!");
                });

            } else if (response.shape === "square") {
                let newShape = new Square();
                newShape.setColor(response.shape_color);
                let shapeString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
                ${newShape.render()}
              
                <text x="200" y="155" font-size="90" text-anchor="middle" fill="${response.text_color}">${response.characters}</text>
              
                </svg> `;

                fs.writeFile(exampleFile, shapeString, (err) => {
                    err ? console.log(err) : console.log("Generated logo!");
                });

            } else {
                console.log("Pick a valid shape!");
            }
        })
};

// Run the main fuction.
run();