import express, {Application, Request, Response} from 'express';
import {Productos} from './productos';

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const productos = new Productos([{id:1, title: 'Escuadra', price: 233, thumbnail: 'urlImagen'}]);

app.get('/api/productos', (req:Request, res:Response) => {
    let productosListados = productos.getAllProducts();
    res.json(productosListados);
})

app.get('/api/productos/:id', (req:Request, res:Response) => {
    const {id} = req.params;
    let numberId = Number(id);
    let producto = productos.findProductById(numberId);
    res.json(producto);
})

app.post('/api/productos', (req:Request, res:Response) => {
    const {id, title, price, thumbnail} = req.body;
    const producto = {
        id,
        title,
        price,
        thumbnail
    }
    let productoIncorporado = productos.addProduct(producto);
    res.json(productoIncorporado);
})

app.listen('8080', () => {
    console.log('App is listening on port 8080');
})