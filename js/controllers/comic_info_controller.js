angular.module('comicApp')

  .controller('infoController', function ($scope, comicAppService) {   // Function with '$scope'(from html) and 'gameAppService' from service.js
    $scope.comicInput = ''     // That recives the input value from ng-model(index.html)
    $scope.searchComicButton = function () {
      console.log($scope.comicInput)

      comicAppService
               .searchComics($scope.comicInput)
               .then(function (response) {
                 $scope.comiclist = response.data.results
                 console.log($scope.comiclist)
               })
    }
  })
