define(["app",
    "jquery",
    "lodash",
    "wx",
    "bootstrapJs",
    "services/WebsocketService",
    "services/NativeService",
    "services/BaseService",
    "services/UserService",
    "services/LocalStorageService",
    "resources/UserResource",
    "directives/Loading"
], function(app, $, _, wx) {

    "use strict";

    var deps = ["$scope", "$state", "$timeout", "$interval", "UserResource", "UserService","$location", "WebsocketService", "BaseService", "NativeService", "$rootScope", 'LocalStorageService'];
    function controller($scope, $state, $timeout, $interval, UserResource,UserService, $location, WebsocketService, BaseService, NativeService, $rootScope, LocalStorageService) {

        $scope.baseUrl = BaseService.restfulUrl;
        $scope.runInBrowser = runInBrowser();

        var href = window.location.href;
        console.log(href)
        var code = href.replace(/^.*?code=([\w]*?)&.*?$/, "$1");
        console.log(code)
	
        UserResource.codeLogin({
            "code": 13825606624,
            "loginType": 1
        }, function(user){
            LocalStorageService.setItem("user", user);
            console.log(user);
            $scope.currentUser = user;
            setTimeout(function() {
                UserResource.getJSSDKConfig({
                    url: location.href.split('#')[0]
                }, function(result){
                    console.log(result);
                    wx.config({
                        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: result.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
                        timestamp: result.timeStamp, // 必填，生成签名的时间戳
                        nonceStr: result.nonceStr, // 必填，生成签名的随机串
                        signature: result.signature,// 必填，签名，见附录1
                        jsApiList: ['previewImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });

                    wx.ready(function(){
                        wx.checkJsApi({
                            jsApiList: ['previewImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                            success: function(res) {
                                console.log(res);
                                // 以键值对的形式返回，可用的api值true，不可用为false
                                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                            }
                        });
                        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                    });

                    wx.error(function(res){
                        console.log(res)
                        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                    });

                })
            }, 1000);
        })

        $scope.goto = function(path){
            path = 'home.' + path
            $state.go(path);
        }
    }

    controller.$inject = deps;
    app.lazy.controller("HomeController", controller);
});
