
export interface Producto {
  id: number;

  // private String caracGenerales;
  nombre: String;

  imagen_url: String;

  cantidad_en_stock: number;

  precio: number;
//Siguientes dos variables utilizadas solo para la creacion y edicion de un producto
  marca:string;
  categoria: string;
  // Descripcion:String;
}
