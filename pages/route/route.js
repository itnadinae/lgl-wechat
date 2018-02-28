// pages/route/route.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'bomb',
    flag:true,
    view:true,
    currentTab:0,
    height:1200,
    iNow:0,
    price:0,
    checkOut:'￥35起送'
  },
  /***
   * 选项卡1
   */
  changeCurrent:function(e){
    var that = this;
    that.setData({
      currentTab: e.currentTarget.dataset.current
    });
    if (e.currentTarget.dataset.current == 0) {
      that.setData({
        height: 1200
      })
    } else {
      that.setData({
        height: 500
      })
    }
  },
  changeNav:function(e){
    var that = this;
    if (e.currentTarget.dataset.current == e.detail.current){
      return false
    }else{
      that.setData({
        currentTab: e.detail.current
      })
    };
   
  },
  /**
   * 选项卡2
   */
  changeiNow:function(e){
    var that = this;
    that.setData({
      iNow:e.currentTarget.dataset.current
    })
  },
  changeTab:function(e){
    var that = this;
    if(e.currentTarget.dataset.current == e.detail.current){
      return false
    }else{
      that.setData({
        iNow:e.detail.current
      })
    }
  },
  /**
   * 订餐
   */
  choseFood:function(){
    var that = this;
    console.log(1)
  },
  /**
   * 判断显示隐藏
   */
  showInfo:function(){
    this.setData({
      flag:false
    })
  },
  closeBomb:function(){
    this.setData({
      flag: true
    })
  },

  openDisc:function(){
    this.setData({
      view:false
    })
  },
  closeDisc:function(){
    this.setData({
      view:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '餐厅1',
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000',
    });
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