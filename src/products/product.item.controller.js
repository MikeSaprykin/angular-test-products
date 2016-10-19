/**
 * Created by Mike on 19.10.16.
 */
import ProductsValues from '../services/products.values'

export default class ProductItemController {
    constructor(ProductService){
        this.parseImage = (val) => {
            return ProductsValues.images[val]
          };

          this.deleteItem = (item) => {
            angular.forEach(ProductsValues.products,function(obj,index){
                if(obj.id === item.id){
                    ProductsValues.products.splice(index,1)
                }
                ProductService.setProducts(ProductsValues.products)
            });
        }
    }
}