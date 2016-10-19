/**
 * Created by Mike on 19.10.16.
 */
import ProductsValues from '../services/products.values'
import ProductService from '../services/product.service'



export default class ProductAddController {
    constructor($state,ProductsValues,ProductService){
        let _self = this;

        this.addProduct = {};

        this.addProductRequest = (form) => {
            if(form.$valid && _self.addProduct.image){
                let prodList = ProductsValues.products;
                _self.addProduct.id = (prodList[prodList.length-1].id + 1);
                prodList.push(_self.addProduct);
                ProductService.setProducts(prodList);
                $state.go('products')
            }
        }
    }
}