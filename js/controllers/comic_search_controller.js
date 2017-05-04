 angular.module('comicApp')

 .controller('searchController', function ($scope,$rootScope, comicAppService, $location) { // Function with '$scope'(from html) and 'gameAppService' from service.js
 	$rootScope.section = 'comic_search'
   $scope.comicInput = '' // That recives the input value from ng-model(index.html)
   $scope.onSearchComicButton = function () {
     console.log($scope.comicInput)
     $location.path('/comic_results' + '/' + $scope.comicInput)
   }
 })
