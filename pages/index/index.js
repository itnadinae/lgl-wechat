//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name:'person',
    item: {
      mapName: '点击进行定位2',
      imgUrl: [
        {
          id: 1,
          img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        },
        {
          id: 2,
          img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
        },
        {
          id: 3,
          img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        }
      ],
      iconSlide: [
        [
          {
            id: '1',
            img: '../img/1.jpeg',
            text: '美食'
          },
          {
            id: '2',
            img: '../img/2.jpeg',
            text: '午餐'
          },
          {
            id: '3',
            img: '../img/3.jpeg',
            text: '商超便利'
          },
          {
            id: '4',
            img: '../img/4.jpeg',
            text: '果蔬生鲜'
          },
          {
            id: '5',
            img: '../img/5.jpeg',
            text: '大牌五折'
          },
          {
            id: '6',
            img: '../img/6.jpeg',
            text: '医药健康'
          },
          {
            id: '7',
            img: '../img/7.jpeg',
            text: '浪漫鲜花'
          },
          {
            id: '8',
            img: '../img/8.jpeg',
            text: '麻辣烫'
          }
        ],
        [
          {
            id: '1',
            img: '../img/2-1.jpeg',
            text: '地方菜系'
          },
          {
            id: '2',
            img: '../img/2-2.jpeg',
            text: '披萨意面'
          },
          {
            id: '3',
            img: '../img/2-3.jpeg',
            text: '地方小吃'
          },
          {
            id: '4',
            img: '../img/2-2.jpeg',
            text: '零食'
          },
          {
            id: '5',
            img: '../img/2-1.jpeg',
            text: '奶茶'
          },
          {
            id: '6',
            img: '../img/2-1.jpeg',
            text: '地方小吃'
          },
          {
            id: '7',
            img: '../img/2-3.jpeg',
            text: '地方小吃'
          },
          {
            id: '8',
            img: '../img/2-2.jpeg',
            text: '外卖美食'
          }
        ]
      ],
      restList: [
        {
          img: '../img/3-1.jpeg',
          title: '台资味（北京崇文门店）',
          h2: {
            title1: '月售1724单',
            title2: '蜂鸟专送'
          },
          postPrise: '￥20起送 | 配送费￥5.5',
          time: '3.01km | 43分钟'
        },
        {
          img: '../img/3-2.jpeg',
          title: '阿金炒饭',
          h2: {
            title1: '月售1724单',
            title2: '蜂鸟专送'
          },
          postPrise: '￥20起送 | 配送费￥5.5',
          time: '3.01km | 43分钟'
        },
        {
          img: '../img/3-3.png',
          title: '周大虾盖浇饭',
          h2: {
            title1: '月售1724单',
            title2: '蜂鸟专送'
          },
          postPrise: '￥20起送 | 配送费￥5.5',
          time: '3.01km | 43分钟'
        },
        {
          img: '../img/3-4.jpeg',
          title: '杭州小笼包',
          h2: {
            title1: '月售1724单',
            title2: '蜂鸟专送'
          },
          postPrise: '￥20起送 | 配送费￥5.5',
          time: '3.01km | 43分钟'
        },
        {
          img: '../img/3-5.jpeg',
          title: '188大馅儿水饺',
          h2: {
            title1: '月售1724单',
            title2: '蜂鸟专送'
          },
          postPrise: '￥20起送 | 配送费￥5.5',
          time: '3.01km | 43分钟'
        }
      ]
    },
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    mapName:'点击进行定位1',
   
  },
  getLoca:function(){
    var that = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.chooseLocation({
          success: function(res) {
            if(res.name){
              that.setData({
                mapName: res.name
              })
            }
          }
        })
      }
    })
  },
  noMsg:function(){
    wx.showModal({
      title: '提示信息',
      content: '你确定进入XXX餐馆吗',
      success:function(res){
        if(res.confirm){
          wx.showToast({
            title: '您进入了XXX餐馆',
          })
        }else if(res.cancel){
          wx.showToast({
            title: '您未选择进入XXX餐馆',
            icon:'loading'
          })
        }
      }
    })
  },

  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '我的个人网站',
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000',
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getMoto:function(){
    this.setData({
      name:'h'
    })
  },
  getFind: function () {
    this.setData({
      name: 'find'
    })
  },
  getPerson: function () {
    this.setData({
      name: 'person'
    })
  },
  getPage:function(){
    this.setData({
      name:'page'
    });
    var that = this;
    wx.request({
      url:'../template/page/weibo.txt',
      success: function (res) {
        console.log(res);
        // that.setData({
        //   list: date
        // })
      },
      fail: function () {
        console.log("接口调用失败");
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
