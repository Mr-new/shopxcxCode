//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    orderNumber: null,  //订单编号
    sumPrice: null,  //支付金额
  },
  onLoad: function (options) {
    //记录订单编号和支付金额
    if(options){
      this.setData({
        orderNumber: options.orderNumber,
        sumPrice: options.sumPrice
      })
    }
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  //跳转到订单页面
  goOrder:function(){
    wx.navigateTo({
      url: '/pages/order/order?idx=2',
    })
  },
  //跳转到首页
  goHome:function(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})
