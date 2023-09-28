const inquirer = require('inquirer');
const cssColorNames = require('css-color-names');

class UserInput {

    run() {
        return inquirer
            .prompt([
                {
                type: 'input',
                name: 'text',
                message: 'Please enter upto three characters',
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

            .then((data) => {
                console.log(data.text)
                console.log(data.textColor.toLowerCase())
                console.log(data.shape)
                console.log(data.shapeColor.toLowerCase())
            })
        }
}

module.exports = UserInput