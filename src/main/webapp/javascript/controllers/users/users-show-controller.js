'use strict';

angular.module("snippetShare")
    .controller("UsersShowController", function ($routeParams, User, Board, $scope, categories) {

        $scope.User = User;
        $scope.Baord = Board;
        //define categories
        console.log("categories", categories);
        $scope.categories = categories.slice();
        $scope.categories.unshift("All");

        //test data for user with :id
        //$scope.user = {
        //    userid: 1,
        //    username: "Xiaoli",
        //    email: "xiaoli@gmail.com",
        //    pwd:"1234",
        //    profilepic: "software engineering student",
        //    userAvatarId: 10,
        //    boards: [
        //        {
        //            bid: 1,
        //            title: "board 1",
        //            category: "cat1",
        //            isPublic: false,
        //            createdAt: "",
        //            updatedAt: "",
        //            description:"board for coding",
        //            numOfSnippets: 5,
        //            members:[
        //                {
        //                    userid: 2,
        //                    username: "Alice",
        //                    userAvatarId: 3
        //                },
        //                {
        //                    userid: 3,
        //                    username: "Tom",
        //                    userAvatarId: 4
        //                }
        //            ],
        //            requestors:[
        //                {
        //                    userid: 4,
        //                    username: "Jerry",
        //                    userAvatarId: 5
        //                }
        //            ]
        //        },
        //        {
        //            bid: 2,
        //            title: "board 2",
        //            category: "cat2",
        //            isPublic: true,
        //            createdAt: "",
        //            updatedAt: "",
        //            description:"board for sharing, board for sharing, board for sharing, " +
        //            "board for sharing, this is a good baord, really groood, very nice nice",
        //            numOfSnippets: 3,
        //            members:[],
        //            requestors:[]
        //        },
        //        {
        //            bid: 3,
        //            title: "board 3",
        //            category: "cat1",
        //            isPublic: false,
        //            createdAt: "",
        //            updatedAt: "",
        //            description:"board for coding",
        //            numOfSnippets: 5,
        //            members:[
        //                {
        //                    userid: 2,
        //                    username: "Alice",
        //                    userAvatarId: 3
        //                },
        //                {
        //                    userid: 3,
        //                    username: "Tom",
        //                    userAvatarId: 4
        //                }
        //            ],
        //            requestors:[
        //                {
        //                    userid: 4,
        //                    username: "Jerry",
        //                    userAvatarId: 5
        //                }
        //            ]
        //        },
        //        {
        //            bid: 4,
        //            title: "board 4",
        //            category: "cat2",
        //            isPublic: true,
        //            createdAt: "",
        //            updatedAt: "",
        //            description:"board for sharing, board for sharing, board for sharing, " +
        //            "board for sharing, this is a good baord, really groood, very nice nice",
        //            numOfSnippets: 3,
        //            members:[],
        //            requestors:[]
        //        }
        //    ]
        //};

        $scope.showDesc = false;
        //hover show board description
        $scope.hover = function(board) {
            // Shows/hides the delete button on hover
            return board.showDesc = ! board.showDesc;
        };

        //request GET all users from server
        User.find($routeParams.id)
            .success(function (data) {
                console.log("get user "+ $routeParams.id+ " success");
                console.log(data);
                $scope.user = data;
            });

    });
