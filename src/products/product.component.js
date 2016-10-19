/**
 * Created by Mike on 19.10.16.
 */
import ProductItemController from './product.item.controller'

let productItem = {
        selector:'productItem',
        templateUrl: './src/products/product.item.html',
        controller:ProductItemController,
        bindings:{
            product:'='
        }
};

export default productItem;


