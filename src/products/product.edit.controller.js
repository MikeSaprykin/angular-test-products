/**
 * Created by Mike on 19.10.16.
 */

import ProductsValues from '../services/products.values'
import ProductService from '../services/product.service'

class ProductEditController {
    constructor($scope,$state,ProductsValues,ProductService){
        let _self = this;

        this.product = {};
        this.editProduct = {};

        angular.forEach(ProductsValues.products,function(obj){
            if(obj.id == $state.params.id){
                _self.product = obj;
            }
        });
        angular.copy(this.product,this.editProduct);

        this.saveChanges = (form) => {
            if(form.$valid){
                angular.copy(this.editProduct,this.product);
                form.$setPristine();
                ProductService.setProducts(ProductsValues.products);
                $state.go('products')
            }
        };

        this.parseImage = (val) => {
            return ProductsValues.images[val]
          }
    }
}

export default ProductEditController