/**
 * Created by xiaojianyong on 2016/11/13.
 */
define(["app"],function(app) {

    var deps = [ "$http", "BaseService" ];

    function userSettingResource($http, BaseService) {

        return initResource($http, BaseService.restfulUrl);
    }
    var requestHeader = {
        "Content-Type" : "application/x-www-form-urlencoded;charset=utf-8"
    };

    function initResource($http, baseUrl) {
        var userUrl = baseUrl +"user/";
        var userOtherInfoUrl = baseUrl +"userOtherInfo/";
        return {

            getUserByUserId : function(userId){
                return $http.post(userUrl + "getUserByUserId" , {
                    userId : userId
                },{
                    headers: requestHeader
                })
            },
            updateUserInfo : function(userVo) {
                return $http.post(userUrl + "updateUserInfo" ,angular.toJson(userVo));
            },
            //社内职务
            queryUserPartyPosts : function(){
                return $http.get(userOtherInfoUrl + "queryUserPartyPosts" )
            },
            //业务专长
            queryUserSpecialtys : function(){
                return $http.get(userOtherInfoUrl + "queryUserSpecialtys" )
            },

            //社会职务
            queryUserSocietyPosts : function(){
                return $http.get(userOtherInfoUrl + "queryUserSocietyPosts" )
            },

            //学历信息
            queryUserEducations : function(){
                return $http.get(userOtherInfoUrl + "queryUserEducations" )
            },

            //工作履历
            queryUserWorkExperiences : function(){
                return $http.get(userOtherInfoUrl + "queryUserWorkExperiences" )
            },

            //培训情况
            queryUserTrainingExperiences : function(){
                return $http.get(userOtherInfoUrl + "queryUserTrainingExperiences" )
            },

            //论文著作
            queryUserLiteratures : function(){
                return $http.get(userOtherInfoUrl + "queryUserLiteratures" )
            },

            //专业技术工作
            queryUserProfessionProjects : function(){
                return $http.get(userOtherInfoUrl + "queryUserProfessionProjects" )
            },

            //专业技术成果
            queryUserProfessionResultses : function(){
                return $http.get(userOtherInfoUrl + "queryUserProfessionResultses" )
            },

            //获奖情况
            queryUserAchieves : function(){
                return $http.get(userOtherInfoUrl + "queryUserAchieves" )
            },

            //专利情况
            queryUserPatents : function(){
                return $http.get(userOtherInfoUrl + "queryUserPatents" )
            },

            //媒体报道
            queryUserMediaReports : function(){
                return $http.get(userOtherInfoUrl + "queryUserMediaReports" )
            }
        }
    }

    userSettingResource.$inject = deps;
    app.lazy.factory("UserSettingResource", userSettingResource);
});