export interface Producto {
    readonly id: number;
    nombre: string;
    precio: number | string;
    enStock: boolean;
}