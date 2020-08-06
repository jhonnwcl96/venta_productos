export class CompraProducto {
    cantidad:number;
    color:string;
    precio:number;
    id:number;
    constructor(cantidad:number,color:string,precio:number,id:number){
        this.cantidad=cantidad;
        this.color=color;
        this.precio=precio;
        this.id=id;
    }
    public getPrecio(): number {
        return this.precio;
    }
    public getCantidad(): number {
        return this.cantidad;
    }
    public getColor(): string {
        return this.color;
    }
    public getId(): number {
        return this.id;
    }
}