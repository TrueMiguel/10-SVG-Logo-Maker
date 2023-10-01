/* <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx ="150" cy="100" r="80" fill="blue" /> 
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">123</text>
</svg> */

// template for shapes. right now just grabbing this information. 
function Shape() {
}

Shape.prototype.circle = (text,textColor,shapeColor) => {
    return (
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" /> 
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `
    );
};


//    template = 
//    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
//     <shape fill="white" /> 
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white"></text>
//     </svg>
// class Circle.

module.exports = Shape