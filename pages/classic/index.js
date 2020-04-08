import Classic from '../../modules/classic'

const classicModule = new Classic()

// pages/classic/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    like_status: false,
    fav_nums: 0,
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModule.latest().then(res => {
      console.log(res)
      this.setData({
        detail: res,
        like_status: res.like_status,
        fav_nums: 0
      })
    })
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

  onLike(e) {
    console.log(e)
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

  }
})