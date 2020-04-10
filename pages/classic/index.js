import Classic from '../../modules/classic'
import Like from '../../modules/like'

const classicModule = new Classic()
const likeModule = new Like()

// pages/classic/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    like_status: false,
    fav_nums: 0,
    detail: {},
    isLatest: false,
    isLast: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModule.latest().then(res => {
      console.log(res)
      let isLast = false
      res.index === 1 ? isLast = true : isLast = false
      this.setData({
        detail: res,
        like_status: res.like_status,
        fav_nums: res.fav_nums,
        isLatest: true,
        isLast
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
  
  /**
  * 获取期刊
  * */
  handleNavi(e) {
    classicModule.fetchClassic(this.data.detail.index, e.detail.type).then(res => {
      let isLast = false
      let isLatest = false

      res.index === 2 ? isLast = true : isLast = false
      wx.getStorageSync('latest') === res.index ? isLatest = true : isLatest = false
      
      this.setData({
        detail: res,
        like_status: res.like_status,
        fav_nums: res.fav_nums,
        isLatest,
        isLast
      })
    })
  },
  
  /**
   * 点赞/取消点赞
   * */
  onLike() {
    likeModule.onLike(this.data.like_status, this.data.detail.id, this.data.detail.type)
      .then(() => {
        return likeModule.fetchLike(this.data.detail.type, this.data.detail.id)
      }).then(res => {
        this.setData({
          like_status: res.like_status,
          fav_nums: res.fav_nums,
        })
    })
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
