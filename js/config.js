angular.module('comicApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/comic_search.html',
                controller: 'searchController'
            })

        .when('/comic_results/:searchResults', { //This has relation with comic_search_controller "$location.path('/comic_results/' + $scope.comicInput)"
            templateUrl: 'templates/comic_results.html',
            controller: 'resultsController'
        })

        .when('/comic_info/:', {
            templateUrl: '/templates/comic_info.html',
            controller: 'infoController'
        })
    })
