// pages/checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [
      { name: '1', bool: false },
      { name: '2', bool: false },
      { name: '3', bool: false },
      { name: '4', bool: false },
      { name: '5', bool: false },
      { name: '6', bool: false },
      { name: '7', bool: false },
      { name: '9', bool: false },
    ],
    bool:false,
    imgArr: ['../../static/img/icon_fuxuan_nor.png', '../../static/img/icon_fuxuan_pre.png'],
    img: ['../../static/img/icon_fuxuan_nor.png'],
    management_good: false,
    middlearr: [],
  },
  check: function (e) {
    var that = this;
    let arr2 = [];
    var arr = that.data.listArr;
    var index = e.currentTarget.dataset.index;
    arr[index].bool = !arr[index].bool;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].bool) {
        arr2.push(arr[i])
      }
    };
    that.setData({
      listArr: arr,
      middlearr: arr2
    })
    console.log(this.data.middlearr,'middlearrmiddlearr')
  },
  btn:function(){
      this.setData({
        bool:this.data.bool?false:true
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