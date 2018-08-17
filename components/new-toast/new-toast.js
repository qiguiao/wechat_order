// components/Toast/Toast.js
var timer= null;
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  moved: function(){
    // 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
    clearTimeout(timer)
    },
    detached: function(){
    //组件生命周期函数，在组件实例被从页面节点树移除时执行
    clearTimeout(timer)
    },
  /**
   * 组件的方法列表
   */
  methods: {
    toastShow(str, cb) {
      var _this = this;
      _this.setData({
        isShow: true,
        txt: str
      });
      timer =  setTimeout(function () {    //toast消失
        if(_this.data && _this.data.isShow){
          _this.setData({
            isShow: false
          });
        }
        if(cb) cb();
      }, 1500);
    },
  }
})
