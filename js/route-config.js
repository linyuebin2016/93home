define([], function () {

    return {
        defaultUrl: "/task",
        states: {
            // 主页面
            "home": {
                abstract: true,
                templateUrl: "views/home.html",
                dependencies: [
                    "controllers/HomeController"
                ]
            },
            //任务
            "home.task": {
                url: "/task",
                templateUrl: "views/task.html",
                dependencies: [
                    "controllers/TaskController"
                ]
            },
            //交流
            "home.communication": {
                url: "/communication",
                templateUrl: "views/communication.html",
                dependencies: [
                    "controllers/CommunicationController"
                ]
            },
            //发现
            "home.discover": {
                url: "/discover",
                templateUrl: "views/discover.html",
                dependencies: [
                    "controllers/DiscoverController"
                ]
            },
            //我
            "home.myself": {
                url: "/myself",
                templateUrl: "views/myself.html",
                dependencies: [
                    "controllers/MyselfController"
                ]
            },
          //个人详细信息
            "home.goUserDetailInfo":{
                url: "/goUserDetailInfo",
                templateUrl: "views/mobile_user/user_add.html",
                dependencies: [
                    "controllers/mobile_user/UserDetailInfoController"
                ]
            },
            //个人其他信息
            "home.userOtherInfo":{
                url: "/userOtherInfo/:tab",
                templateUrl: "views/mobile_user/user_other.html",
                dependencies: [
                    "controllers/mobile_user/UserOtherController"
                ]
            }
        }
    };



});
