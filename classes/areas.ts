

export class CalcularArea {

    constructor(
        public base: number,
        public altura?: number|undefined
    ){
        this.base = base;
        this.altura = altura;
    }

    public calcularAreaCuadrado(): number {
        return this.base * this.base;
    }

    public calcularAreaRectangulo(): number|undefined {

        if(this.altura !== undefined){

            return this.base * this.altura;
        }
        
    }

    public calcularAreaTriangulo(): number|undefined {
        
        if(this.altura !== undefined){
        
            return (this.base * this.altura) / 2;
        }

    }

}