const Shape = require('../lib/shape.js')

// calling the Shape.prototype.circle
describe( 'Shape.prototype.circle', () => {
    it('should generate SVG code for a circle with text', () => {
        // adding in const to test the insertion is correct
        const shape = new Shape();
        const text = 'Text';
        const textColor = 'red';
        const shapeColor = 'blue';

        //saving the shape function to const to check it that the text is correct. 
        const svgCode = shape.circle(text, textColor, shapeColor);

        // using .toContain to check if the svg has the line of entry with the updated input
        expect(svgCode).toContain(`<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`);
        expect(svgCode).toContain(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`);
    })
}

)