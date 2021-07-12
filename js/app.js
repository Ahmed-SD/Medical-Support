var app=angular.module("myApp",["ui.router"])

app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("home",{
            url:"/",
            views:{
                main:{
                    templateUrl:"templates/home.html"  ,
                    controller:"homeCtrl"
              }
            }
        })
        .state("hospitals",{
            url:"/hospitals",
            views:{
                main:{
                    templateUrl:"templates/hospitals.html",
                    controller:"hospitalsCtrl"
                }
            }
        })

    $urlRouterProvider.otherwise("/")
})
app.controller("homeCtrl",function ($scope,$rootScope,$state,$http,$timeout,$interval) {

})

app.controller("hospitalsCtrl",function ($scope,$rootScope,$state,$http,$timeout,$interval) {
    $(document).ready(function () {

    });
    
})