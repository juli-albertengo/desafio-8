interface Producto{
    id: Number,
    title: String,
    price: Number,
    thumbnail:String
}

class Producto implements Producto {
    id: Number;
    title: String;
    price: Number;
    thumbnail: String;

    constructor(id:Number, title:String, price:Number, thumbnail:String){
        this.id = id;
        this.title = title;
        this.price = price,
        this.thumbnail = thumbnail;
    }   
}

export class Productos{
    productos: Array<Producto>;

    constructor(arrayProductos:Array<Producto>){
        this.productos = arrayProductos;
    }

    getAllProducts(){
        if(this.productos === null || this.productos === []){
            return {error : 'No hay productos cargados'}
        }
        return this.productos;
    }

    findProductById(id:Number){
        let producto = this.productos.find(producto => {
            return producto.id === id;
        })
        if(!producto){
            return {error : 'producto no encontrado'}
        }
        return producto;
    }

    addProduct(producto:Producto){
        let id = this.productos.length + 1;
        producto.id = id;
        this.productos = [... this.productos, producto];
        return producto;
    }

}


