// behaviors用于组件间代码共享，类似于mixins
module.exports = Behavior({
    behaviors: [],
    properties: {
        myBehaviorProperty: {
            type: String
        }
    },
    data: {
        myBehaviorData: {
            text: '这是behavior中的数据'
        }
    },
    attached: function() {

    },
    methods: {
        myBehaviorMethod: function() {}
    }
});