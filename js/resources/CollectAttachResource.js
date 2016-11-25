/**
 * Created by zhuyunfeng on 2016/11/15.
 */
define(["app","services/BaseService"], function(app) {
    var deps = ["$http", "BaseService"];

    function resource($http, BaseService) {
        return initResource($http, BaseService.restfulUrl + "collectionController/");
    }

    var postHeader = {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    };

    function initResource($http, collectUrl) {
        return {
            /// <summary>方法——得到加精列表</summary>
            getEssenceAttachList: function(attachModel) {
                return $http.get(collectUrl + "getEssenceCollectionList", {
                    params: {
                        essenceName: attachModel.attachName,
                        //type:attachModel.type,
                        orders : attachModel.sortFilter,
                        asc:attachModel.sortDesc,
                        pageNo: attachModel.pageNo,
                        pageSize: attachModel.pageSize
                    }
                });
            },
            /// <summary>方法——得到加精类型列表</summary>
            getAttachTypeList: function() {
                return $http.get(collectUrl + "getCollectionEnssenLable");
            },
            // <summary>方法——点赞附件</summary>
            assistAttach: function (attachId) {
                return $http.post(collectUrl + "likesCollection", {
                    collectionId: collectId
                }, {
                    headers: postHeader
                })
            },
            /// <summary>方法——关注附件</summary>
            attentionAttach: function (attachId) {
                return $http.post(collectUrl + "attentionCollection", {
                    collectionId: collectId
                }, {
                    headers: postHeader
                })
            },
        };
    }
    resource.$inject = deps;
    app.lazy.factory("CollectAttachResource", resource);
});

