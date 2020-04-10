// pages/book-detail/index.js
import Book from '../../modules/book'

const bookModule = new Book()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: null,
    comments: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    bookModule.bookDetail(options.bid).then(res => {
      console.log(res);
      this.setData({
        book: res
      })
    })
  
    bookModule.shortComment(options.bid).then(res => {
      this.setData({
        comments: res.comments
      })
      console.log(res.comments)
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
