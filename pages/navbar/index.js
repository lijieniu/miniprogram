Page({
    data: {
        currIndex: 0,
        opacity: 0,
    },
    onShow() {
        this.setUnderline();
    },
    changeNav(e) {
        let currentIndex = e.currentTarget.dataset.currentIndex;
        this.setData({
            currIndex: currentIndex,
        });
        this.setUnderline();
    },
    setUnderline() {
        let _this = this;
        const query = wx.createSelectorQuery();
        query.select('.active .nav-name').boundingClientRect().exec(function(rect) {
            console.log(rect);
            _this.setData({
                scrollItemWidth: rect[0].width + 'px',
                tX: rect[0].left + 'px'
            });
        });
    },
    addToCart(evt) {
        // 加购动效start
        let _this = this;
        setTimeout(function() {
            _this.setData({
                bus_x: evt.touches["0"].clientX - 20,
                bus_y: evt.touches["0"].clientY,
                opacity: 0,
                boxFly: {
                    transition: 'transform 1s cubic-bezier(0,0,0,0)',
                    transform: ''
                },
                innerFly: {
                    transform: ``
                }
            });
        }, 400);

        setTimeout(function() {
            _this.setData({
                bus_x: evt.touches["0"].clientX - 20,
                bus_y: evt.touches["0"].clientY,
                opacity: 1,
                boxFly: {
                    transition: 'transform 1s cubic-bezier(0,0,0,0)',
                    transform: 'translateX(-' + wx.getSystemInfoSync().windowWidth + 'rpx)'
                },
                innerFly: {
                    transform: `translateY(${(wx.getSystemInfoSync().windowHeight - evt.touches["0"].clientY) * 2}rpx)`
                }
            });
        }, 1000);
        
        setTimeout(function() {
            _this.setData({
                opacity: 0,
                boxFly: {
                    transition: 'transform 1s cubic-bezier(0,0,0,0)',
                    transform: ''
                },
                innerFly: {
                    transform: ``
                }
            });
        }, 2000);

        // 加购动效end
    }
});