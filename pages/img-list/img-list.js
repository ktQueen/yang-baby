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
    this.getImgDatas();
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
  
   // 获取图片数据
  getImgDatas: function () {
    const that=this;
    wx.getStorage({
      key: 'imgDatas',
      success(res) {
        that.setData({ 
          title: res.data.title,
          imgDatas: res.data.details
        })
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  // 上传图片
  toUploadImg: function () {
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            user: 'test'
          },
          success(res) {
            const data = res.data
            // do something
          }
        })
      }
    })
  },
  // 修改图片名称
  editTitle: function (e) {
    this.titleFn(e, 'start');
  },
  // 确认修改标题
  sureTitle: function (e) {
    console.log(e.detail.value);
    this.titleFn(e, 'end');
  },
  titleFn: function (e, state) {
    var data = this.data.imgDatas;
    for (var i = 0; i < data.length; i++) {
      data[i].isShow = false;
      if (i == e.currentTarget.dataset.index) {
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
      imgDatas: data
    });
  }
})