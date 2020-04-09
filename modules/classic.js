import Request from '../utils/request'

export default class Classic extends Request {
  latest() {
    const params = {
      url: 'classic/latest'
    }
    return this.http(params).then(res => {
      this.setStorage('latest', res.index)
      return res
    })
  }
  
  fetchClassic(index, type) {
    let n = 0
    if (type === 'next') n = index - 2
    if (type === 'previous') n = index + 2
  
    const params = {
      url: `classic/${n}/${type}`
    }
  
    const syncData = this.getStorage(this._setKey(index, type))

    if (syncData) {
      return new Promise((resolve, reject) => {
        resolve(syncData)
      })
    } else {
      return this.http(params).then(res => {
        this.setStorage(this._setKey(index, type), res)
        return res
      })
    }
  }
  
  setStorage(key, value) {
    wx.setStorageSync(key, value)
  }
  
  getStorage(key) {
    return wx.getStorageSync(key)
  }
  
  _setKey(key, type) {
    let n = 0
  
    if (type === 'previous') {
      n = key + 1
    } else {
      n = key - 1
    }
    return `classic-${n}`
  }
}
