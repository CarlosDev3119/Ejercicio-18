import { CalcularArea } from "./classes/areas";


const cuadrado = new CalcularArea(10);
const triangulo = new CalcularArea(10, 20);
const rectangulo = new CalcularArea(10, 50);

console.log( cuadrado.calcularAreaCuadrado());
console.log( triangulo.calcularAreaTriangulo());
console.log( rectangulo.calcularAreaRectangulo());