//基地址
let BAST_URL = 'http://localhost:3000/api'
export default function request ({url,method,data}){
  return new Promise((resolve,reject)=>{
    //请求loading
    wx.showLoading({
      title: '加载中....',
    })
    wx.request({
      url:BAST_URL+ url,
      method,
      data,
      success:res=>{
        let { status, message} = res.data
        if (status === 0) {
          //status为0，表示数据正确
          resolve(res.data)
        }else{
          // 错误时候提示
          wx.showToast({
            title: message,
            icon: 'none'
          })
        }
        
      },
      fail:err=>{
        reject(err)
      },
      //请求结束关闭loading
      complete(){
        wx.hideLoading()
      }
    })
  })
}