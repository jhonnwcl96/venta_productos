export class Producto {
    private cantidad: number;
    private color: string;
    private descripcion: string;
    private imagen: string;
    private nombre: string;
    private precio: number;
    private tipo: string;
    
    constructor(cantidad: number, color: string, descripcion: string, imagen: string, nombre: string, precio: number,tipo:string) {
        this.cantidad = cantidad;
        this.color = color;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
        this.tipo=tipo;
    }
    public getTipo(): string {
        return this.tipo;
    }
    public setTipo(value: string) {
        this.tipo = value;
    }
    public getPrecio(): number {
        return this.precio;
    }
    public setPrecio(value: number) {
        this.precio = value;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(value: string) {
        this.nombre = value;
    }
    public getImagen(): string {
        return this.imagen;
    }
    public setImagen(value: string) {
        this.imagen = value;
    }
    public getdescripcion(): string {
        return this.descripcion;
    }
    public setdescripcion(value: string) {
        this.descripcion = value;
    }
    public getColor(): string {
        return this.color;
    }
    public setColor(value: string) {
        this.color = value;
    }
    public getCantidad(): number {
        return this.cantidad;
    }
    public setCantidad(value: number) {
        this.cantidad = value;
    }
}