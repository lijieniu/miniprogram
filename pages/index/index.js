var common = require('../../common/common.js');
Page({
    data: {
        text: 'init data',
        array: [
            {
                msg: '1'
            },
            {
                msg: '2'
            }
        ],
        num: 0,
        object: {
            text: 'init data'
        },
        id: 0,
        zero: 0,
        item: {
            index: 0,
            msg: 'this is a template',
            time: '2018-09'
        }
    },
    onLoad: function(query) { // 调用一次
        console.log(query);
    },
    onShow: function() { // 显示/切入前台时触发
        console.log(this.route);
        common.sayHello('niu');
    },
    onReady: function() { // 初次渲染完成时触发，调用一次
        this.mapCtx = wx.createMapContext('myMap');
    },
    onUnload: function() { // redirectTo或者navigateBack时触发

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() { // 可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance

    },
    onPageScroll: function(options) {

    },
    handleTap1: function() {
        console.log('handleTap1');
    },
    handleTap2: function() {
        console.log('handleTap2');
    },
    handleTap3: function() {
        console.log('handleTap3');
    },
    onTabItemTap: function(item) {
        console.log(item.index + 'aaa');
    },
    viewTap: function() {
        console.log('haha');
    },
    changeNum: function() {
        this.data.num = 1;
        this.setData({
            num: this.data.num
        });
    },
    changeItemInArray: function() {
        this.setData({
            'array[0].msg': 'changed data'
        });
    }
});