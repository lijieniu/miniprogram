App({
    onLaunch: function(options) {
        console.log('launching...');
        console.log(options);
    },
    onShow: function(options) {
        // 不要在app.js中调用getApp(),使用this可以拿到app实例
        // var appInstance = getApp();
        // console.log(appInstance.globalData);
        console.log(this.globalData);
    },
    onHide: function() {

    },
    onError: function() {

    },
    onPageNotFound(res) {
        wx.redirectTo({
            url: 'pages/index/index'
        });
        // 如果是tabbar页面，使用wx.switchTab
    },
    globalData: 'I am global data'
});