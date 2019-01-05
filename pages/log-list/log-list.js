var utils = require('../../utils/utils.js');
// 日志
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgColor:['red','green','blue']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getlogDatas();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 获取日志数据
  getlogDatas: function () {
    this.setData({ logDatas: utils.logDatas })
    // wx.request({
    //   url: '../pages/index/imgs.json', // 仅为示例，并非真实的接口地址
    //   data: {
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res.data)
    //   },
    //   fail(res){
    //     console.log(res)
    //   }
    // })
  },
  //发表
  toWriteLog:function(){
    wx.navigateTo({
      url: '../../pages/write-log/write-log'
    })
  }
})