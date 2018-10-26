import wepy from 'wepy'
import tip from './tip'

const wxRequest = async(params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  let res = await wepy.request({
    url: url, // 开发者服务器接口地址",
    data: data, // 请求的参数",
    method: params.method || 'GET',
    header: {'Content-Type': 'application/json'}
  })
  tip.loaded()
  return res
}
module.exports = {
  wxRequest
}
