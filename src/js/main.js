/* IFFE
TODO: add $routeParams to each page that will need different params. set it equal to a variable
TODO: routing for each page
TODO: controller for each page
TODO: add UI as a dependency once installed
*/

//IFFE
;(function () {
  var BASE_URL = "http://cropswap.herokuapp.com/";

  angular.module('cropswap', ['ngRoute'], function($routeProvider) {
    $routeProvider
    .when('/', {
      redirectTo: '/signup'
    })
    .when('/signup', {
      templateUrl: 'partials/signup.html',
      controller: function($http, $location) {

        //var email = $routeParams.email;
        var signup = this;

        signup.user = {

        };

        signup.signupUser = function () {
          console.log('it works!');
          $http.post(BASE_URL + "users.json" + "email", signup.user)
          .then(function() {
            console.log('it works');
            $location.path('/newact')
          });
        };
      },
      controllerAs: 'signup'
    })
    .when('/newact', {
      templateUrl: 'partials/newact.html',
      controller: function($http, $location, $routeParams) {
        var id = $routeParams.id;
        var newact = this;

        newact.user = {

        };

        newact.newactuser = function () {
          console.log('its working');
          $http.patch(BASE_URL + "id.json" + "name", newact.user)
          .then(function() {
            $location.path('/postcrop')
          });
        };
      },
      controllerAs: 'newact'
    })

    .when('/postcrop', {
      templateUrl: 'partials/postcrop.html',
      controller: function($http, $location) {

        // var id = $routeParams.id;
        var postcrop = this;

        postcrop.crop = {

        };
        postcrop.newcrop = function () {
          console.log('your posting a crop!');
          $http.post(BASE_URL + " " + " ", postcrop.newcrop)
          .then(function() {

          });
        };
      },
      controllerAs: 'postcrop'
    })
    .otherwise({
      redirectTo: '/404.html',
      templateUrl: 'partials/404.html'
    });
  })

})(); // end of cropswap module
