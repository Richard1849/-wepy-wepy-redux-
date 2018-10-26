export default class Tips {
  static loading(title = '加载中') {
    if (Tips.isLoading) {
      return
    }
    Tips.isLoading = true
    wx.showLoading({
      title: title,
      mask: true
    })
  }

  static loaded() {
    if (Tips.isLoading) {
      Tips.isLoading = false
      wx.hideLoading()
    }
  }
}
