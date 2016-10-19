/**
 * Created by Mike on 19.10.16.
 */
import ProductsValues from '../services/products.values'
import ProductService from '../services/product.service'

export default class ProductAddController {
    constructor($state){
        let _self = this;

        this.addProduct = {};

        this.addProductRequest = (form) => {
            if(form.$valid && _self.addProduct.image){
                ProductsValues.products.push(_self.addProduct);
                ProductService.setItem;
                $state.go('products')
            }
        }
    }
}