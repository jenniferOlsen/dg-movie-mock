// TODO: learn Angular

var dgMovieApp = angular.module("dgMovieApp", ["ngResource"]);
// dgMovieApp.controller("MoviesCtrl", [
//   "$scope",
//   function($scope, $resource) {
//     var data = $resource("http://www.omdbapi.com/?s=Batman&apikey=62218d44");
//     $scope.movies = data.query();
//     $scope.msg = "Angular";
//   }
// ]);

// function MoviesCtrl($scope, $resource) {
//   var data = $resource("http://www.omdbapi.com/?s=Batman&apikey=62218d44");
//   $scope.movies = data.query();
// }

dgMovieApp.factory("movies", function($resource) {
  return $resource("http://www.omdbapi.com/?s=Batman&apikey=62218d44");
});

dgMovieApp.controller("MoviesCtrl", function($scope, movies) {
  movies.query(
    function(data) {
      $scope.movies = data;
    },
    function(err) {
      console.error("Error occured: ", err);
    }
  );
  $scope.msg = "Batman Movies";
});
