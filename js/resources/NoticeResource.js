define(["app"], function(app) {
	var deps = ["$http", "BaseService"];
	
	function resource($http, BaseService) {
		return initNoticeResource($http,BaseService.restfulUrl + "notice/");
	}
	
	var postHeader = {
			"Content-Type" : "application/x-www-form-urlencoded;charset=utf-8"
	};
	
	function initNoticeResource($http, notice){
		return {

			getNotifications: {
				method: "GET",
				url: notice + "getUserNoteInfo",
				isArray: true
			},

			setNoteReadState: {
				method: "POST",
				url: notice + "setNoteReadState",
				headers: postHeader
			},

			setNotesReadState: {
				method: "POST",
				url: notice + "setNotesReadState",
				headers: postHeader
			},


		};
	}
	resource.$inject = deps;
	app.lazy.factory("NoticeResource", resource);
});
