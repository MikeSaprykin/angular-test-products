/**
 * Created by Mike on 19.10.16.
 */
import ProductsValues from './products.values'

class ProductService {
  constructor($window,ProductsValues) {
      let _self = this;

      this.initialProducts =
      [{id:0,title:'First',price:200,description:'Ollala allala',image:1},
      {id:1,title:'Second',price:200,description:'Ollala allala',image:2},
      {id:2,title:'Second',price:200,description:'Ollala allala',image:3},
      {id:3,title:'Second',price:200,description:'Ollala allala',image:4}];

      this.init = () => {
          if(!_self.getProducts()){
            _self.setProducts(_self.initialProducts);
            ProductsValues.products = JSON.parse(_self.getProducts())
          }else{
              ProductsValues.products = JSON.parse(_self.getProducts());
              console.log(ProductsValues.products)
          }
      };

      this.setProducts = (val) => {
          $window.localStorage.setItem('products',JSON.stringify(val))
      };

      this.getProducts = () => {
          return $window.localStorage.getItem('products')
      }
  }

}

ProductService.$inject = ['$window','ProductsValues'];

export default ProductService;