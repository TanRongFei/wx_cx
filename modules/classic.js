import Request from '../utils/request'

export default class Classic extends Request {
  latest() {
    const params = {
      url: '/classic/latest'
    }
    return this.http(params)
  }
}