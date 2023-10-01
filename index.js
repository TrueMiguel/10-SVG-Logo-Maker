// calling the needed files
const UserInput = require('./lib/user_input.js')
const Shapes = require('./lib/shape.js')
const fs = require('fs')

// creating an async function to wait for the logo to be called so that I can run the user input file
async function logo() {

    // calling a new instance of user input
    const userInput = new UserInput();

    // taking the inputed userdata putting it under this constant to sort through
    const userData = await userInput.run();
    
    // assigning the information to const
    const text = userData.text;
    const textColor = userData.textColor;
    const shapeColor = userData.shapeColor
    var shape = userData.shape.toLowerCase()

    // creating a blank var for the shape text literal to go into
    var logoContent

    const shapes = new Shapes()

    // if loop to select the appropriate shape template
    if (shape == 'circle') {
        logoContent = shapes.circle(text, textColor, shapeColor)

    } else if  ( shape == 'rectangle') {
        logoContent = shapes.rectangle(text, textColor, shapeColor)

    } else {
        logoContent = shapes.triangle(text, textColor, shapeColor)
    }

    // writing logoContent to the logo.svg file
    fs.writeFile('logo.svg',logoContent, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Generated logo.svg')
        }
    });
  };
  
  logo();