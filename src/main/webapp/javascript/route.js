'use strict';

//specify routes
angular.module("snippetShare")
    .config(function ($routeProvider) {
        $routeProvider
            .when("/",{
                templateUrl: "templates/pages/landing.html"
            })
            .when("/login",{
                templateUrl: "templates/pages/users/login.html"
                //controller: "UsersLoginController"
            })
            .when("/signup",{
                templateUrl: "templates/pages/users/signup.html",
                controller: "UsersCreateController"
            })
            .when("/users",{
                templateUrl: "templates/pages/users/index.html",
                controller: "UsersIndexController"
            })
            .when("/users/:id",{
                templateUrl: "templates/pages/users/show.html",
                controller: "UsersShowController"
            })
            //.when("/users/new",{
            //    templateUrl: "templates/pages/users/create.html",
            //    controller: "UsersCreateController"
            //})
            .when("/boards",{
                templateUrl: "templates/pages/boards/index.html",
                controller: "BoardsIndexController"
            })
            .when("/boards/:id",{
                templateUrl: "templates/pages/boards/show.html",
                controller: "BoardsShowController"
            })
            .otherwise({ redirectTo:'/'});

    });