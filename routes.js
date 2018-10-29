var routes = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('contactos', {
      url: "/",
      templateUrl: "partials/contactos.html"
    })

    .state('editarContacto', {
      url: "/editarContacto",
      templateUrl: "partials/editarContacto.html"
    })

  $urlRouterProvider.otherwise("/")

}