var myBehavior = require('../../behaviors/my-behavior');

Component({
    behaviors: [myBehavior],
    options: {
        multipleSlots: true, // 自定义组件默认只允许一个slot，需要多个slot时需要设置这个参数
    },
    lifetimes: { // 旧的方式是写到lifetimes外面的
        attached: function() {
            console.log('attached...');
        },
        detached: function() {
            console.log('detached...');
        }
    },
    pageLifetimes: { // 组件所在的page生命周期
        show: function() {

        },
        hide: function() {

        }, 
        resize: function() {

        }
    },
    externalClasses: ['my-class'], // 使用父组件传过来的class
    properties: {
        innerText: {
            type: String,
            value: 'this is default value',
            observer: function(newVal, oldVal, changedPath) { // 该值改变之后被执行

            }
        }
    },
    data: {
        someData: {}
    },
    methods: {
        customMethod: function() {},
        onTap: function() {
            var myEventDetail = {};
            var myEventOption = {};
            this.triggerEvent('myevent', myEventDetail, myEventOption);
        }
    }
});