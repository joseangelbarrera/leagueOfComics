angular.module('comicApp')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/', {
              templateUrl: 'templates/comic_search.html',
              controller: 'searchController'
            })

                 .when('/comic_results/:myComicList', {
                   templateUrl: 'templates/comic_results.html',
                   controller: 'resultsController'
                 })

            .when('/comic_info', {
              templateUrl: '/templates/comic_info.html',
              controller: 'infoController'
            })
    })
