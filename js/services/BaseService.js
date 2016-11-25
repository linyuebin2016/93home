/**菜单的配置信息**/
define(["app"], function (app) {
    app.lazy.service("BaseService", function () {
        return {
            // restfulUrl: "http://localhost:8080/webapp/restful/",
            // webAppUrl: "http://localhost:8080/webapp/",
            restfulUrl: "http://10.52.0.53:8088/webapp/restful/", //开发
            // 测试服
            //restfulUrl: "http://93dev.ygsoft.net/webapp/restful/",
           //webAppUrl: "http://93dev.ygsoft.net/webapp/",
            // 微信
            // restfulUrl: "restful/",
            // webAppUrl: "/",
            formHeader: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            }
        }
    });
});