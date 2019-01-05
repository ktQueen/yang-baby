// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showText();
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
  // 显示文字
  showText:function(){
    //文字逐个显示
    var story = [
      "hello,欢迎来到小杨宝宝的天地，",
      '这里可以记录宝宝的成长，',
      '你也可以在这里写下对宝宝想说的话，',
      '现在就开启奇幻之旅吧！'
      ];
    this.showTextOne(story);
  },
  showTextOne: function (story,j,oldText) {
    var that = this;
    var i = 0;
    var j=j?j:0;
    var time = setInterval(function () {
      var text = story[j].substring(0, i);
      i++;
      that.setData({
        text: (oldText?oldText+'\n':'')+text
      });
      if (text.length == story[j].length) {
        clearInterval(time);
        j++;
        if (j <= story.length-1) {
          that.showTextOne(story, j, that.data.text);
        }else{
          that.setData({
            isShow: true
          });
        }
      }
    }, 20);
  },
  //跳转相册
  toPhoto:function(){
    wx.navigateTo({
      url: '../../pages/photo-list/photo-list'
    })
  },
  // 跳转日志
  toLog: function () {
    wx.navigateTo({
      url: '../../pages/log-list/log-list'
    })
  },
})