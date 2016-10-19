/**
 * Created by Mike on 19.10.16.
 */

import ProductsValues from '../services/products.values'

export default class ProductsController {
    constructor(){
        this.productsList = ProductsValues.products;
    }
}