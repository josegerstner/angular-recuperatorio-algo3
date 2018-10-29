const app = angular.module('contactosApp', ['ui.router'])

app.service('ContactosSrv', ContactosSrv)
app.controller('ContactosCtrl', ContactosCtrl)
app.controller('EditarContactoCtrl', EditarContactoCtrl)

app.config(routes)
