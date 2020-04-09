// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    isLatest: Boolean,
    isLast: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftSrc: './images/triangle@left.png',
    disLeftSrc: './images/triangle.dis@left.png',
    rightSrc: './images/triangle@right.png',
    disRightSrc: './images/triangle.dis@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPrevious() {
      if (this.properties.isLatest) return
      this.triggerEvent('handleNavi', {type: 'previous'})
    },
    onNext() {
      if (this.properties.isLast) return
  
      this.triggerEvent('handleNavi', {type: 'next'})
    }
  }
})
