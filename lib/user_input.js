const inquirer = require('inquirer');

// a module that goes and checks if the inputed color is a color in the css database.  
const cssColorNames = require('css-color-names');

class UserInput {

    async run() {
        const input = await inquirer
            .prompt([
                {
                type: 'input',
                name: 'text',
                message: 'Please enter upto three characters',
                // validate sets a condition. If it is meet then the inputed information is accepted, else it is rejected
                validate: function (input) {
                    if (input.length <= 3) {
                        return true;
                    } else {
                        return 'Please enter up to three characters.';
                    }
                }
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Please input a text color: ',
                    validate: function (input) {
                        if (cssColorNames[input.toLowerCase()]) {
                            return true;
                        } else {
                            return 'Invalid color. Please enter a valid color.'
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please select a shape: ',
                    choices: ['Circle', 'Triangle', 'Square']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Please pick a color for the shape: ',
                    validate: function (input) {
                        if (cssColorNames[input.toLowerCase()]) {
                            return true;
                        } else {
                            return 'Invalid color. Please enter a valid color.'
                        }
                    }
                },
            ])

            return input
        }
}

module.exports = UserInput