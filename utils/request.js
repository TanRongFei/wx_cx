import config from '../config.js'

const error_code = {
  1: '抱歉，出现了一个错误！',
  1000: '输入参数错误',
  1001: '输入的json格式不正确',
  1002: '找不到资源',
  1003: '未知错误',
  1004: '禁止访问',
  1005: '不正确的开发者key',
  1006: '服务器内部错误',
  2000: '你已经点过赞了',
  2001: '你还没点过赞',
  3000: '该期内容不存在'
}

export default class Request {
  http({url, data = {}, method = 'GET'}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${config.api_base_url}${url}`,
        data,
        method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'content-type':'application/json',
          'appkey':config.appkey
        }, // 设置请求的 header
        success:(res) => {
          let code = res.statusCode.toString()
          console.log(code)
          if (code && code.startsWith('2')) {
            resolve(res.data)
          } else if (res && res.data && res.data.error_code) {
            this.showError(res.data.error_code)
          }
        },
        fail: () => {
          // fail
          this.showError(1)
        },
        complete: function() {
          // complete
        }
      })
    })
  }

  showError(code) {
    wx.showToast({
      title: error_code[code] ? error_code[code] : error_code[1],
      duration: 2000
    })
  }
}