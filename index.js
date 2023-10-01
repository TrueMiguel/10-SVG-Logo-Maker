const UserInput = require('./lib/user_input.js')
const Shapes = require('./lib/shape.js')

// creating an async function to wait for the logo to be called so that I can run the user input file
async function logo() {
    const userInput = new UserInput();
    const userData = await userInput.run();
    
    // logging the data from user input. 
    // console.log('User Input Data:', userData);
    // console.log('text:', userData.text);
    // console.log('text color:', userData.textColor.toLowerCase());
    // console.log('shape:', userData.shape.toLowerCase());
    // console.log('shape color:', userData.shapeColor.toLowerCase());
    
    const text = userData.text;
    const textColor = userData.textColor;
    const shapeColor = userData.shapeColor
    var shape = userData.shape.toLowerCase()

    const shapes = new Shapes()
    if (shape == 'circle')
        console.log('shape.circle')
        console.log(shapes.circle(text, textColor, shapeColor))
  }
  
  logo();