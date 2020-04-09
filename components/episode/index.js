// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer: function(n, o) {
        let val = n > 10 ? n : '0' + n
        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _index: 0,
    month: '',
    year: ''
  },
  
  /**
   * 在组件实例进入页面节点树时执行
   * */
  attached() {
    const temp = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    const date = new Date()
    
    this.setData({
      month: temp[date.getMonth()],
      year: date.getFullYear()
    })
  },
  
  /**
   * 在组件实例被从页面节点移除时执行
   * */
  detached() {},

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
