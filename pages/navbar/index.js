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
      let info = wx.getSystemInfoSync();
      let w = info.windowWidth;
      let h = info.windowHeight;

      _this.setData({
        bus_x: evt.touches["0"].clientX - 20,
        bus_y: evt.touches["0"].clientY,
        opacity: 0,
        boxFly: {
          transition: '',
          transform: ''
        },
        innerFly: {
          transform: ``
        }
      }, () => {
        setTimeout(() => {
          _this.setData({
            bus_x: evt.touches["0"].clientX - 20,
            bus_y: evt.touches["0"].clientY,
            opacity: 1,
            boxFly: {
              transition: 'transform 1s cubic-bezier(0,0,0,0)',
              transform: 'translateX(-' + w + 'rpx)'
            },
            innerFly: {
              transform: `translateY(${(h - evt.touches["0"].clientY) * 2}rpx)`
            }
          });
        }, 300);
      });

        // 加购动效end
    }
});