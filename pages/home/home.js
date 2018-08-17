// pages/home/home.js
var barrage_style_arr = [];
var barrage_style_obj = {};
var phoneWidth = 0;
var timers = [];
var timer;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    right: false,
    imgArr: ['../../static/img/img_open.png', '../../static/img/img_close.png'],
    value: "",
    barrageTextColor: "#D3D3D3",
    barrage_style: [],
  },
  
  TextV: function (e) {
    this.setData({ value: e.detail.value })
  },
  send: function () {
    if (!this.data.value) { return; }
    var textColor = "rgb(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ")";

    var barrageText_height = (Math.random()) * 266;
    var barrageText_width = (Math.random()) * 266;
    barrage_style_obj = {
      barrageText_height: barrageText_height,
      barrage_shootText: this.data.value,
      barrage_shoottextColor: textColor,
      barrage_phoneWidth: barrageText_width
    };
    barrage_style_arr.push(barrage_style_obj);
    this.setData({
      barrage_style: barrage_style_arr,        //发送弹幕
      value: ""                    //清空输入框
    })
      timer = setInterval(this.barrageText_move, 800)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取屏幕的宽度
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          barrage_phoneWidth: res.windowWidth - 100,
        })
      }
    })
    phoneWidth = that.data.barrage_phoneWidth;
  },

  //定时器  让弹幕动起来
  barrageText_move: function () {
   if(this.data.right){
     this.setData({ barrage_style: [] })
     return;
   }
    var timerNum = barrage_style_arr.length;
    var textMove;
    for (var i = 0; i < timerNum; i++) {
      textMove = barrage_style_arr[i].barrage_phoneWidth;
      textMove = textMove - 13;
      barrage_style_arr[i].barrage_phoneWidth = textMove;
      //走完的移除掉
      if (textMove <= -100) {
        barrage_style_arr.splice(0, 1);
        i--;
        //全部弹幕运行完
        if (barrage_style_arr.length == 0) {
          this.setData({
            barrage_style: barrage_style_arr,
          })
          clearInterval(this.timer);
          return;
        }
      }
      this.setData({
        barrage_style: barrage_style_arr,
      })
    }
  },
  event: function () {
    this.setData({
      right: this.data.right ? false : true
    })
  },
})