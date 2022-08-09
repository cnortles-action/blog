/*功能实现区*/
function refreshCache() {
  if (confirm('是否确定刷新博文缓存')) location.reload(true)
}

function share() {
  let e = window.location.origin + window.location.pathname;
  new ClipboardJS(".share", {
    text: function () {
      return document.title + "\n" + e
    }
  });
  btf.snackbarShow("你的剪切板已被吾辈占领,快去与同伴分享吧~")
}
async function updateConfig() {
  await fetch('/cw-cgi/api?type=config').then(res => res.text()).then(res => {
    if (res === 'ok') {
      console.log(`[CW]已更新配置`);
    } else {
      console.log(`[CW]唔~配置更新失败...`);
    }
  })
}


function setCookie(name, value, hours, path) {
  var name = escape(name);
  var value = escape(value);
  var expires = new Date();
  expires.setTime(expires.getTime() + hours * 3600000);
  path = path == "" ? "" : ";path=" + path;
  _expires = (typeof hours) == "string" ? "" : ";expires=" + expires.toUTCString();
  document.cookie = name + "=" + value + _expires + path;
}


//读取cookie
function getCookie(name) {
  var arrStr = document.cookie.split('; ');
  //alert(arrStr)
  for (var i = 0; i < arrStr.length; i++) {
    var arr = arrStr[i].split('=')
    if (arr[0] == name) {
      return decodeURIComponent(arr[1])
    }
  }
  return ''
}
/**网站提示区 */
function welcome_mes() {
  if (navigator.userAgent.match(/edg/i)) {
    var we_mes = 'Edge';
  }
  /**社交软件检测 */
  else if (navigator.userAgent.match(/weixin/i)) {
    var we_mes = '微信';
  } else if (navigator.userAgent.match(/ks/i)) {
    var we_mes = '快手';
  } else if (navigator.userAgent.match(/weibo/i)) {
    var we_mes = '微博';
  } else if (navigator.userAgent.match(/dy/i)) {
    var we_mes = '抖音';
  }
  /**手机厂商浏览器检测区域 */
  else if (navigator.userAgent.match(/heytapbrowser/i)) {
    var we_mes = 'OPPO浏览器';
  } else if (navigator.userAgent.match(/vivobrowser/i)) {
    var we_mes = 'VIVO浏览器';
  } else if (navigator.userAgent.match(/HBPC/i) || navigator.userAgent.match(/huaweibrowser/i)) {
    var we_mes = '华为浏览器';
  } else if (navigator.userAgent.match(/iphone/i) && navigator.userAgent.match(/mac/i)) {
    var we_mes = '苹果设备';
  }

  /**第三方浏览器检测区域 */
  else if (navigator.userAgent.match(/quark/i)) {
    var we_mes = '夸克浏览器';
  } else if (navigator.userAgent.match(/firefox/i)) {
    var we_mes = '火狐浏览器';
  } else if (navigator.userAgent.match(/ucbrowser/i)) {
    var we_mes = 'UC浏览器';
  } else if (navigator.userAgent.match(/baidubox/i)) {
    var we_mes = '百度浏览器';
  } else if (navigator.userAgent.match(/opr/i)) {
    var we_mes = 'Opera浏览器';
  }
  /**else if(navigator.userAgent.match(/360/i)){ var we_mes = '360浏览器';}因多次查证，360浏览器并不包含特有信息，无法查证*/
  else if (navigator.userAgent.match(/qq/i)) {
    var we_mes = 'QQ浏览器';
  } else if (navigator.userAgent.match(/chrome/i)) {
    var we_mes = 'Chrome浏览器';
  }

  /**IP部分 */
  if (ip_mes["nation"] == '中国') {
    var ip_mess = ip_mes["city"];
  } else if (ip_mes["city"].match(/台湾/i)) {
    var ip_mess = "中国台湾";
  } else {
    var ip_mess = ip_mes["nation"] + ip_mes["province"] + ip_mes["city"];
  }

  /**来源检测 */
  var we_link = document.referrer;
  if (we_link.match(/baidu/i)) {
    var welcome_link = '百度'
  } else if (we_link.match(/sougou/i)) {
    var welcome_link = '搜狗'
  } else if (we_link.match(/weixin/i)) {
    var welcome_link = '微信'
  } else if (we_link.match(/qq/i)) {
    var welcome_link = 'qq'
  } else if (we_link.match(/zhihu/i)) {
    var welcome_link = '知乎'
  } else if (we_link.match(/google/i)) {
    var welcome_link = '谷歌'
  } else if (we_link.match(/bing/i)) {
    var welcome_link = '必应'
  } else if (we_link.match(/so/i)) {
    var welcome_link = '360'
  } else if (we_link.match(/weibo/i)) {
    var welcome_link = '微博'
  } else if (we_link.match(/t.co/i)) {
    var welcome_link = '推特'
  } else if (we_link.match(/sougou/i)) {
    var welcome_link = '搜狗'
  } else if (we_link.match(/toutiao/i)) {
    var welcome_link = '今日头条'
  } else {
    var welcome_link = '远方'
  }
  if (getCookie("welcome") == '') {
    btf.snackbarShow("你好啊，来自" + ip_mess + "的朋友，您使用" + we_mes + "从" + welcome_link + "赶来", !1, 3e3);
    console.info(ip_mess+we_mes+we_link)
    setCookie("welcome", 1, "/");
  }
}
welcome_mes();

/**搜索引擎推送*/
(function () {
  var el = document.createElement("script");
  el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?8ae936feb612a2d4a890825a60def1c7d3172cc27fc13e57bb7e029ed48cc55abc434964556b7d7129e9b750ed197d397efd7b0c6c715c1701396e1af40cec962b8d7c8c6655c9b00211740aa8a98e2e";
  el.id = "ttzz";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(el, s);
})(window)
/**统计 */
LA.init({
  id: "JkcBsOFTTB5LJIqW",
  ck: "JkcBsOFTTB5LJIqW",
  autoTrack: true,
  hashMode: true
});
//开发者模式监测
window.onkeydown = function (e) {
  123 === e.keyCode && btf.snackbarShow("开发者模式已打开，请遵循GPL协议", !1, 3e3);
  console.warn("开发者模式已打开，请遵循GPL协议");
};


//IE内核监测
var isIE = IEVersion();
if (isIE == "6" || isIE == "7" || isIE == "8" || isIE == "9" || isIE == "10" || isIE == "11") { //判断当前是否是IE浏览器
  window.location = "/custom/html/kernel.html"; //如果是IE内核跳转至kernel.html
}
//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = 'w(ﾟДﾟ)w 服务器被黑洞吞了！连接中断......';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '♪(^∇^*)服务器又从白洞出来了！连接恢复' + OriginTitile;
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});


/*END*/
/*grayscale.js-变灰*/
if (PublicSacrificeDay()) {
  document.getElementsByTagName("html")[0].setAttribute("style", "filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
}

function PublicSacrificeDay() {
  var PSFarr = new Array("0327", "0403", "0404", "0405", "0406", "0414", "0512", "0707", "0807", "0814", "0909", "0918", "0930", "1025", "1213");
  //2022年3月27东航MU5735头七祭
  //2020年4月4日 新冠肺炎哀悼日，清明节
  //2010年4月14日，青海玉树地震
  //2008年5月12日，四川汶川地震
  //1937年7月7日,七七事变 又称卢沟桥事变
  //2010年8月7日，甘肃舟曲特大泥石流
  //8月14日，世界慰安妇纪念日
  //1976年9月9日，毛主席逝世
  //1931年9月18日，九一八事变
  //烈士纪念日为每年9月30日
  //1950年10月25日，抗美援朝纪念日
  //1937年12月13日，南京大屠杀
  var currentdate = new Date();
  var str = "";
  var mm = currentdate.getMonth() + 1;
  if (currentdate.getMonth() > 9) {
    str += mm;
  } else {
    str += "0" + mm;
  }
  if (currentdate.getDate() > 9) {
    str += currentdate.getDate();
  } else {
    str += "0" + currentdate.getDate();
  }
  if (PSFarr.indexOf(str) > -1) {
    return 1;
  } else {
    return 0;

  }
}
/*grayscale.js-变灰*/
/*函数定义去 */
/**运行时间 */

function siteTime() {
  var BootDate = new Date("2022/07/5 00:00:00");
  var NowDate = new Date();
  var RunDateM = parseInt(NowDate - BootDate);
  var RunDays = Math.floor(RunDateM / (24 * 3600 * 1000));
  var RunHours = Math.floor(RunDateM % (24 * 3600 * 1000) / (3600 * 1000));
  var RunMinutes = Math.floor(RunDateM % (24 * 3600 * 1000) % (3600 * 1000) / (60 * 1000));
  var RunSeconds = Math.round(RunDateM % (24 * 3600 * 1000) % (3600 * 1000) % (60 * 1000) / 1000);
  var RunTime = RunDays + "天" + RunHours + "时" + RunMinutes + "分" + RunSeconds + "秒";
  document.getElementById("runtime").innerHTML = "小破站已运行：" + RunTime;
}
siteTime();
/**IE检测 */
function IEVersion() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var IEVersion;
    IEVersion = parseFloat(RegExp["$1"]);
    if (IEVersion == 7) {
      return 7;
    } else if (IEVersion == 8) {
      return 8;
    } else if (IEVersion == 9) {
      return 9;
    } else if (IEVersion == 10) {
      return 10;
    } else {
      return 6; //IE版本<=7
    }
  } else if (isEdge) {
    return 'edge'; //edge
  } else if (isIE11) {
    return 11; //IE11
  } else {
    return -1; //不是ie浏览器
  }
}


function getLinks() {
  fetch("/link").then(e => e.text()).then(e => {
    let t = document.createElement("div");
    t.innerHTML = e;
    let o = document.querySelectorAll("#friend-links-in-footer .footer-item");
    let n = t.getElementsByClassName("flink-item-name");
    let l = t.querySelectorAll(".flink-list-item a");
    n = Array.from(n);
    l = Array.from(l);
    for (let t = 0; t < 5; t++) {
      let e = parseInt(Math.random() * n.length);
      o[t].innerText = n[e].innerText;
      o[t].href = l[e].href;
      n.splice(e, 1);
      l.splice(e, 1)
    }
  })
}
getLinks();
/**漫天繁星 */
function dark() {
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  var n, e, i, h, t = .05,
    s = document.getElementById("universe"),
    o = !0,
    a = "180,184,240",
    r = "226,225,142",
    d = "226,225,224",
    c = [];

  function f() {
    n = window.innerWidth, e = window.innerHeight, i = .216 * n, s.setAttribute("width", n), s.setAttribute("height", e)
  }

  function u() {
    h.clearRect(0, 0, n, e);
    for (var t = c.length, i = 0; i < t; i++) {
      var s = c[i];
      s.move(), s.fadeIn(), s.fadeOut(), s.draw()
    }
  }

  function y() {
    this.reset = function () {
      this.giant = m(3), this.comet = !this.giant && !o && m(10), this.x = l(0, n - 10), this.y = l(0, e), this.r = l(1.1, 2.6), this.dx = l(t, 6 * t) + (this.comet + 1 - 1) * t * l(50, 120) + 2 * t, this.dy = -l(t, 6 * t) - (this.comet + 1 - 1) * t * l(50, 120), this.fadingOut = null, this.fadingIn = !0, this.opacity = 0, this.opacityTresh = l(.2, 1 - .4 * (this.comet + 1 - 1)), this.do = l(5e-4, .002) + .001 * (this.comet + 1 - 1)
    }, this.fadeIn = function () {
      this.fadingIn && (this.fadingIn = !(this.opacity > this.opacityTresh), this.opacity += this.do)
    }, this.fadeOut = function () {
      this.fadingOut && (this.fadingOut = !(this.opacity < 0), this.opacity -= this.do / 2, (this.x > n || this.y < 0) && (this.fadingOut = !1, this.reset()))
    }, this.draw = function () {
      if (h.beginPath(), this.giant) h.fillStyle = "rgba(" + a + "," + this.opacity + ")", h.arc(this.x, this.y, 2, 0, 2 * Math.PI, !1);
      else if (this.comet) {
        h.fillStyle = "rgba(" + d + "," + this.opacity + ")", h.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1);
        for (var t = 0; t < 30; t++) h.fillStyle = "rgba(" + d + "," + (this.opacity - this.opacity / 20 * t) + ")", h.rect(this.x - this.dx / 4 * t, this.y - this.dy / 4 * t - 2, 2, 2), h.fill()
      } else h.fillStyle = "rgba(" + r + "," + this.opacity + ")", h.rect(this.x, this.y, this.r, this.r);
      h.closePath(), h.fill()
    }, this.move = function () {
      this.x += this.dx, this.y += this.dy, !1 === this.fadingOut && this.reset(), (this.x > n - n / 4 || this.y < 0) && (this.fadingOut = !0)
    }, setTimeout(function () {
      o = !1
    }, 50)
  }

  function m(t) {
    return Math.floor(1e3 * Math.random()) + 1 < 10 * t
  }

  function l(t, i) {
    return Math.random() * (i - t) + t
  }
  f(), window.addEventListener("resize", f, !1),
    function () {
      h = s.getContext("2d");
      for (var t = 0; t < i; t++) c[t] = new y, c[t].reset();
      u()
    }(),
    function t() {
      document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark' && u(), window.requestAnimationFrame(t)
    }()
};dark();
if (window.console) {
  Function.prototype.makeMulti = function () {
    let l = new String(this);
    l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
    return l;
  };
  let string = function () {
    /*
                           __  .__                 
____   ____   ____________/  |_|  |   ____   ______
_/ ___\ /    \ /  _ \_  __ \   __\  | _/ __ \ /  ___/
\  \___|   |  (  <_> )  | \/|  | |  |_\  ___/ \___ \ 
\___  >___|  /\____/|__|   |__| |____/\___  >____  >
   \/     \/                             \/     \/ 
                                                   
    Powered by crl Ralease 1.3.9. Butterfly 4.3.1.
    */
  };
  console.log(string.makeMulti());
}
/**自定义控制台输出END */