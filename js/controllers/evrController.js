'use strict';
var evrApp = angular.module('evrApp', []);

evrApp.controller('ProductsCtrl', function ($scope) {
    $scope.products = [
        {
            id: 12345,
            name: 'Product 1',
            description: 'Description of product 1',
            tags: 'tag1, tag2, tag3',
            photo:'product1.jpg'},
        {
            id: 23456,
            name: 'Product 2',
            description: 'Description of product 2',
            tags: 'tag1, tag3',
            photo: 'product2.jpg'},
        {
            id: 34567,
            name: 'Product 3',
            description: 'Description of product 3',
            tags: 'tag3',
            photo: 'product3.jpg'},
        {
            id: 45678,
            name: 'Product 4',
            description: 'Description of product 4',
            tags: 'tag4',
            photo: 'product4.jpg'}
    ];
    $scope.selectedProduct = null;
    for(var i = 0; i<$scope.products.length;i++ ){
        $scope.products[i].tags =$scope.products[i].tags.split(", ");
    }

    $scope.sortByTag = function(tag){
        if(!tag){tag = 'tag1'};
        var newProducts =[];
        for(var i = 0; i<$scope.products.length;i++){
            if($scope.products[i].tags.indexOf(tag)>-1){
                newProducts.push($scope.products.splice(i--,1)[0]);
            }
        }
        $scope.products = newProducts.concat($scope.products);
    };

    $scope.showModal = function(product){
        $scope.selectedProduct = product;
        console.log(product);
        $('#productModal').modal('show');
    }
});