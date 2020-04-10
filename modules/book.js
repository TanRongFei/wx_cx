import Request from '../utils/request'

export default class Book extends Request{
  hotList() {
    const param = {
      url: 'book/hot_list'
    }
    return this.http(param)
  }
  
  bookDetail(id) {
    const param = {
      url: `book/${id}/detail`
    }
    
    return this.http(param)
  }
  
  shortComment(id) {
    const param = {
      url: `book/${id}/short_comment`
    }
  
    return this.http(param)
  }
}
