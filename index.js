/* Замикання */
function shape(a, b, c, d) {
    this.type = 'rectangle';
    this.getP = function () {
        return a + b + c + d;
    };
    this.getS = function () {
        return a * b;
    };
}

const result = new shape(2, 5,2, 5);
console.log(result.type);
console.log(result.getP());
console.log(result.getS());

/* Наслідування / Прототипи */

function Shape(a, b, c, d) {
    this.type = function () {
        if (a, b, c, d) {
            return 'rectangle';
        } else if (a, b, c) {
            return 'triangle';
        } else if (a) {
            return 'square';
        }
    };
    this.getP = function () {
        if (a, b, c, d) {
            return a + b + c + d;
        } else if (a, b, c) {
            return a + b + c;
        } else if (a) {
            return a;
        }
    };
    this.getS = function () {
        if (a, b, c, d) {
            return a * b;
        } else if (a, b, c) {
            return (a * b) / 2;
        } else if (a) {
            return a * 2;
        }
    };
    this.isRightTriangle = false;
    this.isSquare = false;
}

Shape.prototype.figure = true;

function Triangle() {}

Triangle.prototype = new Shape(3,4,5);
Triangle.prototype.isRightTriangle = true;

const triangle = new Triangle();

console.log(triangle.isRightTriangle);
console.log(triangle.figure);
console.log(triangle.type());
console.log(triangle.getS());
console.log(triangle.getP());

/* Square */

function Square() {}

Square.prototype = new Shape(5);
Square.prototype.figure = false;
Square.prototype.isSquare = true;

const square = new Square();

console.log(square.isSquare);
console.log(square.figure);
console.log(square.type());
console.log(square.getS());
console.log(square.getP());