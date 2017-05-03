 angular.module('comicApp')

 .controller('resultsController', function ($scope, $rootScope, $routeParams, comicAppService) { // Function with '$scope'(from html) and 'gameAppService' from service.js
   $scope.title = 'Results of comic search'
   // $scope.comicInput = '' // That recives the input value from ng-model(index.html)
   // var comiclist = $routeParams.myComicList

   // $scope.searchComicButton = function () {
   //   console.log($scope.comicInput)
   comicAppService.searchComics($routeParams.searchResults)
             .then(function (response) {
               $scope.comiclist = response
               console.log($scope.comiclist)
             })
 })
