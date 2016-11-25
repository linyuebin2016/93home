define(["app",
    "jquery",
    "nodeWebkit",
    "lodash",
    "bootstrapJs",
    "services/WebsocketService",
    "services/NativeService",
    "services/BaseService",
    "services/LocalStorageService",
    "resources/UserResource"
], function(app, $, node, _) {

    "use strict";

    var deps = ["$scope", "$state", "$timeout", "$interval", "UserResource", "$location", "WebsocketService", "BaseService", "NativeService", "$rootScope", 'LocalStorageService'];
    var config;
    function controller($scope, $state, $timeout, $interval, UserResource, $locatio, WebsocketService, BaseService, NativeService, $rootScope, LocalStorageService) {

        $scope.baseUrl = BaseService.restfulUrl;
        $scope.runInBrowser = runInBrowser();

        $scope.currentUser = LocalStorageService.getItem("user");

    }

    controller.$inject = deps;
    app.lazy.controller("CommunicationController", controller);
});
