const Shape = require('../lib/shape.js')

describe( 'Shape.prototype.circle', () => {
    it('should generate SVG code for a circle with text', () => {
        const shape = new Shape();
        const text = 'Text';
        const textColor = 'red';
        const shapeColor = 'blue';

        const svgCode = shape.circle(text, textColor, shapeColor);

        expect(svgCode).toContain(`<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`);
        expect(svgCode).toContain(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`);
    })
}

)