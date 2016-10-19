/**
 * Created by Mike on 19.10.16.
 */
import angular from 'angular';
import 'angular-ui-router';
import ProductItem from './products/product.component';
import ProductsController from './products/products.controller';
import PaginatorComponent from './paginator/paginator.component';
import ProductEditController from './products/product.edit.controller';
import ProductAddController from './products/product.add.controller';

let app = angular.module('demo', ['ui.router']);

app.config(['$urlRouterProvider', '$locationProvider','$stateProvider', function ($urlRouterProvider, $locationProvider,$stateProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $urlRouterProvider.otherwise('/products');
  $stateProvider
        .state('products',{
            url:'/products',
            views: {
                '':{
                    controller:ProductsController,
                    controllerAs:'vm',
                    templateUrl:'./src/products/products.html'
                }
            },
            data:{
                pageTitle:'List of products'
            }
        })
      .state('edit',{
          url:'/edit:id',
          views:{
              '':{
                  controller:ProductEditController,
                  controllerAs:'vm',
                  templateUrl:'./src/products/product.edit.html'
              }
          }
      })
      .state('add',{
          url:'/add',
          views:{
              '':{
                  controller:ProductAddController,
                  controllerAs:'vm',
                  templateUrl:'./src/products/product.add.html'
              }
          }
      })
}]);

app.component(ProductItem.selector,ProductItem);

app.component(PaginatorComponent.selector,PaginatorComponent);

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [ app.name ]);
});

export default app;