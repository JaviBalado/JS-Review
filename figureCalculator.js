console.group("Squares");
const squareSide = 5;
console.log("Square's side lenght is " + squareSide);
const perimeter = squareSide * 4;
console.log("Square's perimeter is: " + perimeter);
const area = squareSide * squareSide;
console.log("Square's area is " + area);
console.groupEnd();
console.group("Triangles");
const triangleSide1 = 1;
const triangleSide2 = 1;
const triangleSide3 = 1;
const triangleHeight = 5;
trianglePerimeter = triangleSide1 + triangleSide2 + triangleSide3;
triangleArea = (triangleSide3 * triangleHeight) / 2;
console.log("Triangle's perimeter: " + trianglePerimeter);
console.log("Triangle's area: " + triangleArea);
console.groupEnd();