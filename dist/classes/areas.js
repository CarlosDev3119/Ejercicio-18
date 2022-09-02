"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcularArea = void 0;
class CalcularArea {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.base = base;
        this.altura = altura;
    }
    calcularAreaCuadrado() {
        return this.base * this.base;
    }
    calcularAreaRectangulo() {
        if (this.altura !== undefined) {
            return this.base * this.altura;
        }
    }
    calcularAreaTriangulo() {
        if (this.altura !== undefined) {
            return (this.base * this.altura) / 2;
        }
    }
}
exports.CalcularArea = CalcularArea;
