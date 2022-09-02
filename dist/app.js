"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const areas_1 = require("./classes/areas");
const cuadrado = new areas_1.CalcularArea(10);
const triangulo = new areas_1.CalcularArea(10, 20);
const rectangulo = new areas_1.CalcularArea(10, 50);
console.log(cuadrado.calcularAreaCuadrado());
console.log(triangulo.calcularAreaTriangulo());
console.log(rectangulo.calcularAreaRectangulo());
