// pages/route/route.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'bomb',
    flag:true,
    view:true,
    view1:true,
    view2:true,
    winH:'',
    currentTab:0,
    height:1200,
    iNow:0,
    price:0,
    checkOut:'￥35起送',
    claName:'checkOut1',
    flavor:'0',
    total:0,
    money:4,
    text:'微辣+',
    foodArr:[],
    mount:0,
    isScroll:true,
    imgSrc:'../img/buyCar.png'
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
    that.setData({
      view1: false 
    });
    wx.getSystemInfo({
      success: (res) => { // 用这种方法调用，this指向Page
        that.setData({
          winH: res.windowHeight
        });
      }
    })
  },
  closeFood:function(){
    var that = this;
    that.setData({
      view1:true
    });
    wx.getSystemInfo({
      success: (res) => { // 用这种方法调用，this指向Page
        that.setData({
          winH:''
        });
      }
    })
  },
  choseFlavor:function(e){
    this.setData({
      flavor: e.currentTarget.dataset.current,
      money: e.currentTarget.dataset.prise,
      text: e.currentTarget.dataset.text
    });

  },
  /**
   * 判断显示隐藏
   */
  showInfo:function(){
    var that = this;
    that.setData({
      flag:false
    });
    wx.getSystemInfo({
      success: (res) => { // 用这种方法调用，this指向Page
        that.setData({
          winH: res.windowHeight
        });
      }
    })
  },
  closeBomb:function(){
    var that = this;
    that.setData({
      flag: true
    });
    wx.getSystemInfo({
      success: (res) => { // 用这种方法调用，this指向Page
        that.setData({
          winH: ''
        });
      }
    })
  },

  openDisc:function(){
    var that = this;
    that.setData({
      view:false
    });
    wx.getSystemInfo({
      success: (res) => { // 用这种方法调用，this指向Page
        that.setData({
          winH: res.windowHeight
        });
      }
    })
  },
  closeDisc:function(){
    var that = this;
    that.setData({
      view:true
    });
    wx.getSystemInfo({
      success: (res) => { // 用这种方法调用，this指向Page
        that.setData({
          winH: ''
        });
      }
    })
  },
  showFood:function(){
    var that = this;
    if (this.data.foodArr == '') {
      that.setData({
        view2: true
      })
    }else{
      that.setData({
        view2: false
      });
    }
    
    wx.getSystemInfo({
      success: (res) => { // 用这种方法调用，this指向Page
        that.setData({
          winH: res.windowHeight
        });
      }
    });
  },
  hideFood:function(){
    var that = this;
    that.setData({
      view2:true
    });
    wx.getSystemInfo({
      success: (res) => { // 用这种方法调用，this指向Page
        that.setData({
          winH: ''
        });
      }
    })
  },
  empty:function(){
    var that = this;
    that.setData({
      foodArr:[],
      view2:true,
      checkOut:'￥35起送',
      claName:'checkOut1',
      total:0,
      imgSrc:'../img/buyCar.png'
    })
  },
  /**
   * 点餐
   */
  makeSure:function(e){
    var arr = [{ name1: this.data.text, name2: this.data.money }];
    this.data.foodArr = arr.concat(this.data.foodArr);
    this.setData({
      foodArr:this.data.foodArr,
      view1:true,
      checkOut:'结算',
      claName:'checkOut',
      imgSrc:'../img/buyCar2.png'
    });
    console.log(this.data.foodArr);
    var number = 0;
    for (var i = 0; i < this.data.foodArr.length; i++){
      number += parseInt(this.data.foodArr[i].name2);
    }
    this.setData({
      total:number
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