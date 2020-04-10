// pages/classic/components/music/index.js
import ClassicBeh from '../classic_beh'

const bgam = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: String,
    title: String
  },
  
  behaviors: [ClassicBeh],
  
  attached() {
    this.setStatus()
    this._monitorSwitch()
  },

  /**
   * 组件的初始数据
   */
  data: {
    playSrc: './images/player@play.png',
    pauseSrc: './images/player@pause.png',
    playing: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay() {
      if (this.data.playing) {
        bgam.pause()
        this.setData({
          playing: false
        })
      } else {
        bgam.src = this.properties.url
        bgam.title = this.properties.title
        bgam.play()
        this.setData({
          playing: true
        })
      }
    },
    
    setStatus() {
      if (bgam.paused) {
        this.setData({
          playing: false
        })
        
        return
      }
      
      if (bgam.src === this.properties.url) {
        this.setData({
          playing: true
        })
      }
    },
  
    /**
     * 监听背景音频
     * */
    _monitorSwitch() {
      bgam.onPlay(() => {
        console.log('onPlay')
        this.setStatus()
      })
      
      bgam.onPause(() => {
        console.log('onPause')
        this.setStatus()
      })
  
      bgam.onEnded(() => {
        this.setStatus()
      })
  
      bgam.onStop(() => {
        this.setStatus()
      })
    }
  }
})
