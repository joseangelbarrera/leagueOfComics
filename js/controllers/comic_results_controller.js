 angular.module('comicApp')

 .controller('resultsController', function ($scope, $rootScope, $routeParams, comicAppService, $location) { // Function with '$scope'(from html) and 'gameAppService' from service.js
  $rootScope.section = 'comic_results'
   $scope.title = 'Results of comic search'
   // $scope.comicInput = '' // That recives the input value from ng-model(index.html)
   // var comiclist = $routeParams.myComicList

   // $scope.searchComicButton = function () {
   //   console.log($scope.comicInput)
   comicAppService.searchComics($routeParams.searchResults) // We send to searchComics() the $routeParams
             .then(function (response) {
               $scope.comiclist = response
               console.log($scope.comiclist)
               $scope.onSearchInfo = function () {
     $location.path('/comic_info/')
   }
 })

             })

