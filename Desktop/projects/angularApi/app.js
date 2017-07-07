angular.module("angApi", ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider
      .state('home', {
      url: '/',
      controller: 'mainCtrl',
      templateUrl: './views/home.html'
      })










})
