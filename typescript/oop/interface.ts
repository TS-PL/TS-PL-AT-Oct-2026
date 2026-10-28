// Run the file with the command:
// npx ts-node typescript/oop/interface.ts
// npx tsx typescript/oop/interface.ts

// Interface: defines the shape of an object
interface Rectangle {
  height: number;
  width: number;
}

// Object must match the interface
const rectangle: Rectangle = {
  height: 10,
  width: 10,
};

console.log(rectangle.height); // 10
console.log(rectangle.width); // 10

console.log(rectangle); // { height: 10, width: 10 }

console.log(rectangle.height + ' ' + rectangle.width); // "10 10"

// Interface as a parameter type
function measures(rectangle: Rectangle) {
  console.log(rectangle.height + ' ' + rectangle.width);
}

measures(rectangle); // "10 10"

// extends: inherits all properties from Rectangle
interface ColoredRectangle extends Rectangle {
  color: string;
}

// Must have height, width and color
const coloredRectangle: ColoredRectangle = {
  height: 10,
  width: 10,
  color: 'blue',
};

console.log(coloredRectangle.height); // 10
console.log(coloredRectangle.width); // 10
console.log(coloredRectangle.color); // "blue"
