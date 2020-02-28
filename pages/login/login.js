// pages/login/login.js
import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //获取用户信息
  getUser(res) {
    let info = res.detail
    console.log(info)
    if (!res.detail.userInfo) {
      wx.showToast({
        title: '登录失败，请授权',
        icon:'none'
      })
      return;
    }
    //获取微信账号的唯一标识
    wx.login({
      async success(loginRes) {
        console.log(loginRes)
        //使用封装好的方法
        let data = await request({
          url: '/user/wxlogin',
          method: 'POST',
          data: {
            code: loginRes.code,
            nickname: info.userInfo.nickName,
            avatar: info.userInfo.avatarUrl
          },
        })
        //保存token
        wx.setStorageSync('token', data.token)
        wx.showToast({
          title: '登录成功',
          icon:'none',
          success(){
            wx.navigateTo({
              url: '/pages/home/home',
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})