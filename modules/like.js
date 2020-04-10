import Request from '../utils/request'

export default class Like extends Request{
  onLike(status, art_id, type) {
    const param = {
      url: !status ? '/like' : '/like/cancel',
      data: {
        art_id,
        type
      },
      method: 'POST'
    }
    return this.http(param)
  }
  
  fetchLike(type, id) {
    const param = {
      url: `classic/${type}/${id}/favor`
    }
  
    return this.http(param)
  }
}
