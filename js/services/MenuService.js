/**菜单的配置信息**/
define(["app"], function(app) {
    app.lazy.service("MenuService", function() {
        return {
            config: {
                usersetting: {
                    name: '个人设置',
                    routeURL: 'home.usersetting',
                    locationURL: '/usersetting'
                },
                homePage: {
                    name: '主页',
                    routeURL: 'home.homePage',
                    locationURL: '/homePage',
                    IconClass: 'i1'
                },
                polity: {
                    name: '参政议政',
                    routeURL: 'home.polity',
                    locationURL: '/polity',
                    IconClass: 'i2'
                },
                task: {
                    name: '任务',
                    routeURL: 'home.task',
                    locationURL: '/task',
                    IconClass: 'i3'
                },
                help: {
                    name: '互助',
                    routeURL: 'home.help',
                    locationURL: '/help',
                    IconClass: 'i4'
                },
                topic: {
                    name: '话题',
                    routeURL: 'home.topic',
                    locationURL: '/topic',
                    IconClass: 'i5'
                },
                channel: {
                    name: '资讯',
                    routeURL: 'home.channel',
                    locationURL: '/channel',
                    IconClass: 'i6'
                },
                address: {
                    name: '找人',
                    routeURL: 'home.address',
                    locationURL: '/address',
                    IconClass: 'i7'
                },
                book: {
                    name: '好书',
                    routeURL: 'home.book',
                    locationURL: '/book',
                    IconClass: 'i8'
                },
            },

            firstLevelMenus: ['own', 'partner', 'competence'],

            queryByLocationURL: function(locationURL) {
                if (this.config && locationURL) {
                    if (locationURL.indexOf('/usersetting') > -1) {
                        return this.config['usersetting'];
                    }
                    if (locationURL.indexOf('/homePage') > -1) {
                        return this.config['homePage'];
                    }
                    if (locationURL.indexOf('/polity') > -1) {
                        return this.config['polity'];
                    }
                    if (locationURL.indexOf('/task') > -1) {
                        return this.config['task'];
                    }
                    if (locationURL.indexOf('/help') > -1) {
                        return this.config['help'];
                    }
                    if (locationURL.indexOf('/topic') > -1) {
                        return this.config['topic'];
                    }
                    if (locationURL.indexOf('/channel') > -1) {
                        return this.config['channel'];
                    }
                    if (locationURL.indexOf('/address') > -1) {
                        return this.config['address'];
                    }
                    if (locationURL.indexOf('/book') > -1) {
                        return this.config['book'];
                    }
                }
                return {};
            }
        };
    });
});
