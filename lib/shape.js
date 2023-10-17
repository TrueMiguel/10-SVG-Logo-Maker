// template for shapes. 
function Shape() {
}

// adding prototypes to the Shape function to call the subfeatures circle, triangle, and square.
Shape.prototype.circle = (text,textColor,shapeColor) => {
    return (
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="150" cy="100" r="80" fill="${shapeColor}" /> 
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`
    
    );
};

Shape.prototype.triangle = (text,textColor,shapeColor) => {
    return (
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <polygon points="150,10 10,190 290,190" fill="${shapeColor}"/>
    <text x="150" y="140" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`
    );
};

Shape.prototype.square = (text,textColor,shapeColor) => {
    return (
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect x="75" y="25" width="150" height="150" fill="${shapeColor}"/> 
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`
    );
};


module.exports = Shape