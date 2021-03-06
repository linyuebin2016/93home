define(["app", "spin"], function(app, Spinner) {

    var deps = [];

    function directive() {
        var opts = {
            lines: 11, // The number of lines to draw
            length: 0, // The length of each line
            width: 15, // The line thickness
            radius: 30, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: "#000", // #rgb or #rrggbb or array of colors
            speed: 1, // Rounds per second
            trail: 31, // Afterglow percentage
            shadow: true, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: "spinner", // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: "auto", // Top position relative to parent in px
            left: "auto" // Left position relative to parent in px
        };
        return {
            templateUrl: "views/common/loading/Loading.html",
            replace: true,
            link: function($scope, elem) {
                var spinner = new Spinner(opts).spin();
                var loadingContainer = elem.find(".loading-spinner-container")[0];
                loadingContainer.appendChild(spinner.el);
            }
        };
    }

    directive.$inject = deps;
    return app.lazy.directive("fcLoading", directive);
});
