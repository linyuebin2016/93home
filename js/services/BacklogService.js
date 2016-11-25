/**
 * Created by chenweizhi2 on 2016/11/22.
 */
define(["app",
    'resources/BacklogResource'
], function (app) {

    var deps = ["$rootScope", "BacklogResource"];

    function BacklogService($rootScope, BacklogResource) {
        return {
            // 获取我的待办事项
            // orders
            // 待办事项：1、参政议政征集的待办：进行中的，并且是参与人或者是负责人的列表
            // 已办事项：2、完成的(成功。失败的）
            queryMyBacklogToDoForUndone: function (pageNo) {
                return BacklogResource.getBacklogToDo(1, pageNo, pageSize);
            },
            queryMyBacklogToDoForDone: function (pageNo) {
                return BacklogResource.getBacklogToDo(2, pageNo, pageSize);
            }
        };
    }

    // 每页数量
    var pageSize = 10;

    BacklogService.$inject = deps;
    app.lazy.service("BacklogService", BacklogService);
});