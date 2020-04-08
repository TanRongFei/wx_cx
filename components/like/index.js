// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number,
    isLike: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc: 'images/like.png',
    disLikeSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e) {
      const count = this.properties.count
      const like = this.properties.isLike

      this.setData({
        count: !like ? count + 1 : count - 1,
        isLike: !like
      })
      this.triggerEvent('like', this.properties.count)
    }
  }
})
