'use strict';

angular.module("snippetShare")
    .controller("BoardsCreateController", function ($scope, Board, $location, $routeParams, categories) {
        $scope.isSubmitting = false;
        $scope.Board = Board;
        $scope.categories = categories;

        $scope.saveBoard = function (board) {
            $scope.isSubmitting = true;

            if(!board.isPublic) {
                board.isPublic = false;
            }

            console.log(board);

            Board.create($routeParams.userid, board)
                .success(function(data, status, headers, config) {
                    console.log("in create board success");
                    console.log(data);
                    console.log(status);
                    $location.path("/users/"+$routeParams.userid+"/boards/"+data.bid);
                })
                .error(function(data, status, headers, config) {
                    console.log("in create board error");
                    console.log(data);
                    console.log(status);
                }).finally(function () {
                    $scope.isSubmitting = false;
                });

        }
    });