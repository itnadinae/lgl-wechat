//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
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
  }
  // getLoca: function () {
  //   var that = this;
  //   wx.getLocation({
  //     type: 'gcj02', //返回可以用于wx.openLocation的经纬度
  //     success: function (res) {
  //       var latitude = res.latitude
  //       var longitude = res.longitude
  //       wx.chooseLocation({
  //         success: function (res) {
  //           if (res.name) {
  //             that.setData({
  //               mapName: res.name
  //             })
  //           }
  //         }
  //       })
  //     }
  //   })
  // },
  // noMsg: function () {
  //   wx.showModal({
  //     title: '提示信息',
  //     content: '你确定进入XXX餐馆吗',
  //     success: function (res) {
  //       if (res.confirm) {
  //         wx.showToast({
  //           title: '您进入了XXX餐馆',
  //         })
  //       } else if (res.cancel) {
  //         wx.showToast({
  //           title: '您未选择进入XXX餐馆',
  //           icon: 'loading'
  //         })
  //       }
  //     }
  //   })
  // }
})