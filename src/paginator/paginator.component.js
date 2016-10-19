/**
 * Created by Mike on 19.10.16.
 */
let PaginatorComponent = {
    selector:'paginator',
    template:'<ul class="pagination">'+
                '<li ng-repeat="i in $ctrl.getPagination($ctrl.length)"><a href="#">{{i}}</a></li>'+
            '</ul>',
    controller:function($scope){
        this.getPagination = function(num) {
            var arr = [];
            for(var i = 1; i <= num; i++){
                arr.push(i)
            }
            return arr
        };
    },
    bindings:{
        length:'@'
    }
};

export default PaginatorComponent;