
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

    var deps = ["$scope", "$state","$stateParams","$timeout", "$interval", "UserResource", "$location","UserSettingResource","TypeDefResource", "WebsocketService", "BaseService", "NativeService", "$rootScope", 'LocalStorageService'];
    var config;
    function controller($scope, $state, $stateParams,$timeout, $interval, UserResource, $locatio, UserSettingResource,TypeDefResource,WebsocketService, BaseService, NativeService, $rootScope, LocalStorageService) {

        $scope.baseUrl = BaseService.restfulUrl;
        $scope.runInBrowser = runInBrowser();


        var userId = "1000831";
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
                var date = new Date();
                $scope.imgUrl = BaseService.restfulUrl + "fileUploadController/showPic/" + $scope.userModel.userPicId + "?temp=" + date.getTime();
                if (!$scope.imgUrl) $scope.imgUrl = "../../images/user-def.png";
            });
        };

        $scope.getCurrentUser();
        
        // 1002 学历
        TypeDefResource.getListByTypeCode(1002).success(function (list) {
            $scope.type1002 = list;
        });
        
     // 1017 职称
        TypeDefResource.getListByTypeCode(1029).success(function (list) {
            $scope.type1017 = list;
        });

        $scope.goUserOther = function goUserOther(tab){
            $state.go("home.userOtherInfo",{tab : tab});
        }
        
        $scope.goUserDetailInfo = function goUserDetailInfo(){
            $state.go("home.goUserDetailInfo");
        }
        
        
     // 社内职务
        $scope.PartDutyList = [];
        $scope.PartDuty = {};

        $scope.BusinessSkillList = []; // 业务专长
        $scope.BusinessSkill = {};

        $scope.SocialDutyList = []; // 主要社会职务
        $scope.SocialDuty = {};

        $scope.EducationList = []; // 学历
        $scope.Education = {};

        $scope.TrackRecordList = []; // 工作
        $scope.TrackRecord = {};
        $scope.TrackRecordPostName = "";

        $scope.TrainSituationList = []; // 培训
        $scope.TrainSituation = {};

        $scope.PublicationsList = []; // 论文著作 table rows
        $scope.Publications = {};

        $scope.ProfessionalWorkList = []; // 专业技术工作 table rows
        $scope.ProfessionalWork = {};

        $scope.ProfessionalAchievementsList = []; // 专业技术成果 table rows
        $scope.ProfessionalAchievements = {};

        $scope.AwardsList = []; // 获奖情况
        $scope.Awards = {};

        $scope.PatentList = []; // 专利情况
        $scope.Patent = {};

        $scope.MediaReportList = []; // 媒体报道
        $scope.MediaReport = {};

        // 点击每页时取数据
        var tabname = $stateParams.tab;
        if(tabname!=null)
        {
        	chgtab(tabname);
        }
        function chgtab(tabname) {
            if (tabname == "partDuty") { // 社内职务
                UserSettingResource.queryUserPartyPosts().success(function (data) {
                    $scope.PartDutyList = data;
                });
            } else if (tabname == "businessSkill") { // 业务专长
            	UserSettingResource.queryUserSpecialtys().success(function (data) {
                    $scope.BusinessSkillList = data;
                });
            } else if (tabname == "socialDuty") { // 社会职务
            	UserSettingResource.queryUserSocietyPosts().success(function (data) {
                    $scope.SocialDutyList = data;
                });
            } else if (tabname == "education") { // 学历
            	UserSettingResource.queryUserEducations().success(function (data) {
                    $scope.EducationlList = data;
                });
            } else if (tabname == "trackRecord") { // 工作
            	UserSettingResource.queryUserWorkExperiences().success(function (data) {
                    $scope.TrackRecordList = data;
                });
            } else if (tabname == "trainSituation") { // 培训
            	UserSettingResource.queryUserTrainingExperiences().success(function (data) {
                    $scope.TrainSituationList = data;
                });
            } else if (tabname == "Publications") {//论文著作
            	UserSettingResource.queryUserLiteratures().success(function (data) {
                    $scope.PublicationsList = data;
                });
            } else if (tabname == "ProfessionalWork") { // 专业技术工作
            	UserSettingResource.queryUserProfessionProjects().success(function (data) {
                    $scope.ProfessionalWorkList = data;
                });
            } else if (tabname == "ProfessionalAchievements") { // 专业技术成果
            	UserSettingResource.queryUserProfessionResultses().success(function (data) {
                    $scope.ProfessionalAchievementsList = data;
                });
            } else if (tabname == "Awards") { // 获奖情况
            	UserSettingResource.queryUserAchieves().success(function (data) {
                    $scope.AwardsList = data;
                });
            } else if (tabname == "Patent") { // 专利情况
            	UserSettingResource.queryUserPatents().success(function (data) {
                    $scope.PatentList = data;
                });
            } else if (tabname == "MediaReport") { // 媒体报道
            	UserSettingResource.queryUserMediaReports().success(function (data) {
                    $scope.MediaReportList = data;
                });
            }
        };
       
    }

    controller.$inject = deps;
    app.lazy.controller("MyselfController", controller);
});
