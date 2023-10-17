const Shape = require('../lib/shape.js')

// calling the Shape.prototype.circle
describe( 'Shape.prototype.circle', () => {
    it('should generate SVG code for a circle with text', () => {
        // adding in const to test the insertion is correct
        const shape = new Shape();
        const text = 'abc';
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

// calling the Shape.prototype.triangle
describe('Shape.prototype.triangle', () => {
    it('should generate SVG code for a triangle with text', () => {
        const shape = new Shape();
        const text = 'abc';
        const textColor = 'red';
        const shapeColor = 'blue';

        const svgCode = shape.triangle(text, textColor, shapeColor);

        expect(svgCode).toContain(`<polygon points="150,10 10,190 290,190" fill="${shapeColor}"/>`)
        expect(svgCode).toContain(`<text x="150" y="140" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`)
    })
})

// calling the Shape.prototype.square
describe('Shape.prototype.square', () => {
    it('should generate SVG code for a square with text', () => {
        const shape = new Shape();
        const text = 'abc';
        const textColor = 'red';
        const shapeColor = 'blue';

        const svgCode = shape.square(text, textColor, shapeColor);

        expect(svgCode).toContain(`<rect x="75" y="25" width="150" height="150" fill="${shapeColor}"/>`)
        expect(svgCode).toContain(`<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`)
    })
})