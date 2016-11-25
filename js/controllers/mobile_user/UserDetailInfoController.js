
define(["app",
    "jquery",
    "nodeWebkit",
    "lodash",
    "bootstrapJs","filters/CodeNameFilter","filters/ReplaceFilter",
    "services/WebsocketService",
    "resources/UserSettingResource",
    "resources/TypeDefResource",
    "services/NativeService",
    "services/BaseService",
    "services/LocalStorageService",
    "resources/UserResource"
], function(app, $, node, _) {

    "use strict";

    var deps = ["$scope", "$state", "$timeout", "$interval", "UserResource", "$location","UserSettingResource","TypeDefResource", "WebsocketService", "BaseService", "NativeService", "$rootScope", 'LocalStorageService'];
    var config;
    function controller($scope, $state, $timeout, $interval, UserResource, $locatio, UserSettingResource,TypeDefResource,WebsocketService, BaseService, NativeService, $rootScope, LocalStorageService) {

        $scope.baseUrl = BaseService.restfulUrl;
        $scope.runInBrowser = runInBrowser();


        var userId = "1068560";
        $scope.currentUser = LocalStorageService.getItem("user");
        if($scope.currentUser != null) {
            userId = $scope.currentUser.userId;
        }

        $scope.getCurrentUser = function () {
            UserSettingResource.getUserByUserId(userId).success(function (userVo) {
                $scope.userModel = userVo;
                $scope.categoryName = _.chain($scope.userModel.userCategoryVos)
                    .map(function (user) {
                        return user.categoryName;
                    })
                    .join(" , ")
                    .value();
            });
        };

        $scope.getCurrentUser();

        TypeDefResource.getListByTypeCode(1022).success(function (list) {
            $scope.type1022 = list;
        });
        // 1000 行政级别
        TypeDefResource.getListByTypeCode(1000).success(function (list) {
            $scope.type1000 = list;
        });
        // 1002 学历
        TypeDefResource.getListByTypeCode(1002).success(function (list) {
            $scope.type1002 = list;
        });
        // 1005 社会组织级别
        TypeDefResource.getListByTypeCode(1005).success(function (list) {
            $scope.type1005 = list;
        });
        // 1006 社会组织类别
        TypeDefResource.getListByTypeCode(1006).success(function (list) {
            $scope.type1006 = list;
        });
        // 1008 学位
        TypeDefResource.getListByTypeCode(1008).success(function (list) {
            $scope.type1008 = list;
        });
        // 1009 机构级别
        TypeDefResource.getListByTypeCode(1009).success(function (list) {
            $scope.type1009 = list;
        });
        // 1011 职务
        TypeDefResource.getListByTypeCode(1011).success(function (list) {
            $scope.type1011 = list;
        });
        // 1012 职称类别
        TypeDefResource.getListByTypeCode(1012).success(function (list) {
            $scope.type1012 = list;
        });
        // 1013 社内界别
        TypeDefResource.getListByTypeCode(1013).success(function (list) {
            $scope.type1013 = list;
        });
        // 1017 职称
        TypeDefResource.getListByTypeCode(1029).success(function (list) {
            $scope.type1017 = list;
        });
        // 1018 统战部界别
        TypeDefResource.getListByTypeCode(1018).success(function (list) {
            $scope.type1018 = list;
        });
        // 1019 职称级别
        TypeDefResource.getListByTypeCode(1019).success(function (list) {
            $scope.type1019 = list;
        });
        // 1020 社员层次
        TypeDefResource.getListByTypeCode(1020).success(function (list) {
            $scope.type1020 = list;
        });
        // 1030 学术职务
        TypeDefResource.getListByTypeCode(1030).success(function (list) {
            $scope.type1030 = list;
        });

        // 1034 项目中所任角色
        TypeDefResource.getListByTypeCode(1034).success(function (list) {
            $scope.type1034 = list;
        });
        // 1033 项目类别
        TypeDefResource.getListByTypeCode(1033).success(function (list) {
            $scope.type1033 = list;
        });
        // 1035 成果水平
        TypeDefResource.getListByTypeCode(1035).success(function (list) {
            $scope.type1035 = list;
        });

        // 3000 籍贯
        TypeDefResource.getListByTypeCode(3000).success(function (list) {
            $scope.type3000 = list;
        });

        // 1015 民族
        TypeDefResource.getListByTypeCode(1015).success(function (list) {
            $scope.type1015 = list;
        });

    }

    controller.$inject = deps;
    app.lazy.controller("UserDetailInfoController", controller);
});
