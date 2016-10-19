/**
 * Created by Mike on 19.10.16.
 */
import ProductsValues from './products.values'

class ProductService {
  constructor($window) {
      this.setItem = () => {
          $window.localStorage.set('products',ProductsValues.products)
      }
  }

}

ProductService.$inject = ['$window','ProductsValues'];

export default ProductService;