var utils = require('../../utils/utils.js');
// 相册
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
    this.getPhotoDatas();
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

  // 获取相册数据
  getPhotoDatas:function(){
    this.setData({ photoDatas: utils.photoDatas })
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
  // 去相册详情页
  toPhotoDetails:function(e){
    wx.setStorage({
      key: 'imgDatas',
      data: utils.photoDatas[e.currentTarget.dataset.id],
      success:function(res){
        wx.navigateTo({
          url: '../../pages/img-list/img-list'
        })
      },
      fail: function(res){
        console.log(res);
      }
    });
  },
  //表单提交
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  // 修改相册名称
  editTitle: function (e) {
    this.titleFn(e,'start');
  },
  // 确认修改标题
  sureTitle:function(e){
    console.log(e.detail.value);
    this.titleFn(e,'end');
  },
  titleFn:function(e,state){
    var data = this.data.photoDatas;
    for(var i=0;i<data.length;i++){
      data[i].isShow = false;
      if (i == e.currentTarget.dataset.index){
        if (state == 'start') {//点击的是当前名称
          data[i].isShow = true;
        }
        if (state == 'end') {// 失去焦点
          data[i].title = e.detail.value;
          // 发起请求，向后台存储数据
        }
      }
    }
    this.setData({
      photoDatas: data
    });
  }
})