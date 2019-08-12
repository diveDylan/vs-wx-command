interface WxFile {
  [index: string]: string;
}

/**
 * 
 * @param name file name
 */export const files = function (name: string): {
  page: WxFile,
  components: WxFile
 } {
  const page = {
    js: `
/**
 * ${name}.js
*/
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
})`
,
wxss: `/**${name}.wxss**/`,
json: `
/** 
 * ${name}.json
 * */
{
"usingComponents": {}
}`,
wxml: `<!--${name}.wxml-->
<text>${name}</text>`
};
const components = {
js: `
/**
 * ${name}
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

`,
  json: `
/**
* ${name}
* /
{
  "component": true,
  "usingComponents": {}
}
  `,
   wxss: `
/**
 * ${name}
 */
`,
   wxml: `
<!--${name}-->
<text>${name}</text>
`
  };
  return {
    page,
    components
  };
};

