# 工具库

## 换行符 ↵ 转换

```javascript
function turn(data) {
  return data.replace(/(\r\n|\n|\r)/gm, "
")
}
export default turn
```

## 随机颜色

```javascript
function randomColor() {
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += ((Math.random() * 16) | 0).toString(16);
  }
  return color;
}
export default randomColor;
```

## 去除空格

```javascript
function trim(str, pos = "both") {
  if (pos == "both") {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, "");
  } else if (pos == "right") {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == "all") {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}

export default trim;
```

## 随机数值

```javascript
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    let gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}

export default random;
```

## 用户名-手机号加密特殊处理

```javascript
function hidden(str, frontLen, endLen) {
  // 结合判断是否为空函数
  if (empty(str)) {
    return ''
  } else {
    let len = str.length - frontLen - endLen;
    let xing = "";
    for (let i = 0; i < len; i++) {
      xing += "*";
    }
    return str.substring(0, frontLen) + xing + str.substring(str.length - endLen)
  }
export default hidden
```

## 规则校验

```javascript
/**
 * 验证电子邮箱格式
 */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(
    value
  );
}

/**
 * 验证手机格式
 */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
 * 验证URL格式
 */
function url(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(
    value
  );
}

/**
 * 验证日期格式
 */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
 * 验证ISO类型的日期格式
 */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
    value
  );
}

/**
 * 验证十进制数字
 */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
 * 验证整数
 */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
 * 验证身份证号码
 */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
    value
  );
}

/**
 * 是否车牌号
 */
function carNo(value) {
  // 新能源车牌
  const xreg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  const creg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
 * 金额,只允许2位小数
 */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function chinese(value) {
  let reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
 * 只能输入字母
 */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
  //英文或者数字
  let reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
 * 是否固定电话
 */
function landline(value) {
  let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
 * 判断是否为空
 */
function empty(value) {
  switch (typeof value) {
    case "undefined":
      return true;
    case "string":
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
        return true;
      break;
    case "boolean":
      if (!value) return true;
      break;
    case "number":
      if (0 === value || isNaN(value)) return true;
      break;
    case "object":
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;
  }
  return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
  if (typeof value == "string") {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == "object" && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
 * 是否数组
 */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
 * 是否对象
 */
function object(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

/**
 * 是否短信验证码
 */
function code(value, len = 6) {
  return new RegExp(`^\\d{${len}}$`).test(value);
}

export default {
  email,
  mobile,
  url,
  date,
  dateISO,
  number,
  digits,
  idCard,
  carNo,
  amount,
  chinese,
  letter,
  enOrNum,
  contains,
  range,
  rangeLength,
  empty,
  isEmpty: empty,
  jsonString,
  landline,
  object,
  array,
  code,
};
```

## 颜色转换

```javascript
/**
 * 求两个颜色之间的渐变值
 * @param {string} startColor 开始的颜色
 * @param {string} endColor 结束的颜色
 * @param {number} step 颜色等分的份额
 * */
function colorGradient(
  startColor = "rgb(0, 0, 0)",
  endColor = "rgb(255, 255, 255)",
  step = 10
) {
  let startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  let startR = startRGB[0];
  let startG = startRGB[1];
  let startB = startRGB[2];

  let endRGB = hexToRgb(endColor, false);
  let endR = endRGB[0];
  let endG = endRGB[1];
  let endB = endRGB[2];

  let sR = (endR - startR) / step; //总差值
  let sG = (endG - startG) / step;
  let sB = (endB - startB) / step;
  let colorArr = [];
  for (let i = 0; i < step; i++) {
    //计算每一步的hex值
    let hex = rgbToHex(
      "rgb(" +
        Math.round(sR * i + startR) +
        "," +
        Math.round(sG * i + startG) +
        "," +
        Math.round(sB * i + startB) +
        ")"
    );
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor, str = true) {
  let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    let sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    let arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map((val) => Number(val));
  } else {
    return sColor;
  }
}

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  let _this = rgb;
  let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    let aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    let strHex = "#";
    for (let i = 0; i < aColor.length; i++) {
      let hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + "" + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    let aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      let numHex = "#";
      for (let i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}

export default {
  colorGradient,
  hexToRgb,
  rgbToHex,
};
```

## 函数防抖

```javascript
let timeout = null;

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function debounce(func, wait = 500, immediate = false) {
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === "function" && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === "function" && func();
    }, wait);
  }
}

export default debounce;
```

## 函数节流

```javascript
let timer, flag;
/**
 * 节流原理：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function throttle(func, wait = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === "function" && func();
      timer = setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(() => {
        flag = false;
        typeof func === "function" && func();
      }, wait);
    }
  }
}
export default throttle;
```

## 全局唯一标识符

```javascript
/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier)
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
function guid(len = 32, firstU = true, radix = null) {
  let chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  let uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (let i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    let r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return "u" + uuid.join("");
  } else {
    return uuid.join("");
  }
}

export default guid;
```

## 坐标系转换

```javascript
//百度坐标转高德（传入经度、纬度）
function gps_bd_gd(bd_lng, bd_lat) {
  var X_PI = (Math.PI * 3000.0) / 180.0;
  var x = bd_lng - 0.0065;
  var y = bd_lat - 0.006;
  var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI);
  var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI);
  var gd_lng = z * Math.cos(theta);
  var gd_lat = z * Math.sin(theta);
  return { lng: gd_lng, lat: gd_lat };
}

//高德坐标转百度（传入经度、纬度）
function gps_gd_bd(gd_lng, gd_lat) {
  var X_PI = (Math.PI * 3000.0) / 180.0;
  var x = gd_lng,
    y = gd_lat;
  var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * X_PI);
  var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * X_PI);
  var bd_lng = z * Math.cos(theta) + 0.0065;
  var bd_lat = z * Math.sin(theta) + 0.006;
  return {
    lat: bd_lat,
    lng: bd_lng,
  };
}

export default {
  gps_bd_gd,
  gps_gd_bd,
};
```

## 匹配大于 0 小于等于 5000 整数

```javascript
/^1$|^[1-9][\d]{0,2}$|^[1-4][\d]{3}$|^5000$/
/^5000$|^(\d|[1-9]\d{1,2}|[1-4]\d{3})$/
```

## 匹配密码

```javascript
//匹配密码（密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)）
regExpPwd: (str) => {
return RegExp(/^[a-zA-Z]\w{5,17}$/).test(str)
},
```

## 验证银行卡号（10 到 30 位, 覆盖对公/私账户, 参考微信支付）

```javascript
export const isAccountNumber = (value) => /^[1-9]\d{9,29}$/g.test(value);
```

## 设备检测

```javascript
varWIN=window;
varNA=WIN.navigator;
varUA=NA.userAgent.toLowerCase();
functiontest(needle) {
  returnneedle.test(UA);
}
varIsTouch="ontouchend"inWIN;
varIsAndroid=test(/android|htc/) ||/linux/i.test(NA.platform+"");
varIsIPad=!IsAndroid&&test(/ipad/);
varIsIPhone=!IsAndroid&&test(/ipod|iphone/);
varIsIOS=IsIPad||IsIPhone;
varIsWinPhone=test(/windows phone/);
varIsWebapp=!!NA["standalone"];
varIsXiaoMi=IsAndroid&&test(/mi\s+/);
varIsUC=test(/ucbrowser/);
varIsWeixin=test(/micromessenger/);
varIsBaiduBrowser=test(/baidubrowser/);
varIsChrome=!!WIN["chrome"];
varIsBaiduBox=test(/baiduboxapp/);
varIsPC=!IsAndroid&&!IsIOS&&!IsWinPhone;
varIsHTC=IsAndroid&&test(/htc\s+/);
varIsBaiduWallet=test(/baiduwallet/);
```

## js 对象赋值不影响原对象

```javascript
let a = { name: "wangying" };
let b = Object.assign({}, a);
b.name = "yingwang";
console.log(a.name); //wangying
```

## 删除对象

```javascript
//不改变原对象
let b = { a: 1, b: 2, c: 3 };
let { a, ...obj } = b;
console.log(obj); //{b: 2, c: 3}

//改变原对象
var Employee = {
  firstname: "John",
  lastname: "Doe",
};
console.log(Employee.firstname);
// expected output: "John"
delete Employee.firstname;
console.log(Employee.firstname);
// expected output: undefined
```

## 获取域名

```javascript
if (!window.location.origin) {
  window.location.origin =
    window.location.protocol +
    "//" +
    window.location.hostname +
    (window.location.port ? ":" + window.location.port : "");
} else {
  window.location.origin;
}
```

## 删除空值的对象

```javascript
removeProperty(object) {
  for(letpropinobject) {
    if(object[prop]==="") {
    	delete object[prop];
    }
  }
},
```

## 删除对象中的空值

```javascript
function deleteEmpty(information) {
  for (let name in information) {
    if (information[name] === "") {
      delete information[name];
    }
    if (typeof information[name] === "object") {
      if (information[name].length === 0) {
        delete information[name];
      } else {
        deleteEmpty(information[name]);
      }
    }
  }

  return information;
}
```

## 判断是否是微信浏览器的函数

```javascript
function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}
```

## 判断是否是支付宝浏览器的函数

```javascript
function isAlipay() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/Alipay/i) == "alipay") {
    return true;
  } else {
    return false;
  }
}
```

## ES6 Set 数组去重

```javascript
var newArr = Array.from(newSet(arr));
```

## 手机号码

```javascript
let reg = /^1\d{10}$/;
```

## 千分位分割

```javascript
let reg=/(\d)(?=(?:\d{3})+$)/g
money.replace(reg, '$1,')  12000000=>12,000,000
let reg=/(\d)(?=(\d{3})+(\.\d+)?$)/g
money.replace(reg, '$1,')   12000000.11=>12,000,000.11
```

## vue 对象属性的监听

```javascript
data() {
　　return {
　　　　bet: {
　　　　　　pokerState: 53,
　　　　　　pokerHistory: 'local'
　　　　}
    }
},
watch: {
　　'bet.pokerHistory'(newValue, oldValue) {
　　　　console.log(newValue)
　　}
}
```

## js 驼峰转换

```javascript
js 下划线转驼峰
// apiHookGet
'api_hook_get'.replace(/\_(\w)/g, (all, letter) => {
    return letter.toUpperCase()
})
js 驼峰转下划线
// api_hook
'apiHook'.replace(/\B([A-Z])/g, '_$1').toLowerCase()
```

## 从 url 上获取 query 参数

```javascript
// 获取链接后的参数(不带#号)
getQueryString(name) {
　　 let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}
```

## 获取链接后的参数(带#号)

```javascript
getQueryStrings(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    if(window.location.hash.indexOf("?") < 0){
            return null;
    }
    let r = window.location.hash.split("?")[1].match(reg); 　　
    if (r != null) return decodeURIComponent(r[2]);
　　    return null;
}
```

## 分割手机号

```javascript
//344分割
replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3’)
//4分割
replace(/(\d{4})(?=\d)/g, "$1 ")
```

## 随机验证码

```javascript
//四位数字
Math.random()
  .toString()
  .slice(
    2,
    6
  )(
    // or
    Math.random() * 9999
  )
  .toFixed();

// 四位数字加字母
Math.random().toString(16).slice(2, 6).toUpperCase();
```

## 数字补全不足补零

```javascript
prefixInteger(num, length) {
return (Array(length).join("0") + num).slice(-length);
},
```

## 多方法请求

```javascript
let methods = ["getScoreList", "getCouponList"];
const { data } = await this.$api[methods[this.current]](
  this.formData[this.current]
);
```

## 对象取别名

```javascript
const { data: products, count } = await getProducts();
```

## 查看页面布局小技巧

```javascript
javascript: (function () {
  var style = document.querySelector("#_outline_");
  if (style) {
    style.parentNode.removeChild(style);
  } else {
    style = document.createElement("style");
    style.id = "_outline_";
    style.innerHTML = "*{outline: 1px solid red}";
    document.body.appendChild(style);
  }
})();
```

## 函数柯里化

```javascript
function curry(fn) {
  let len = fn.length;
  return function temp() {
    let args = [...arguments];
    if (args.length >= len) {
      return fn(...arguments);
    } else {
      return function () {
        return temp(...args, ...arguments);
      };
    }
  };
}
function add(val1, val2, val3) {
  let total = val1 + val2 + val3;
  console.log(total);
}
let r = curry(add);
let r1 = r(1)(2);
r1(3);
```

## 微信登陆

```javascript
const weixinLogin = function (manual) {
  let scope = null;
  if (manual) {
    scope = "snsapi_userinfo";
  } else {
    scope = "snsapi_base";
  }
  let urlrouter = null;
  if (
    window.location.search &&
    window.location.search.indexOf("state=weChatLogin") == -1
  ) {
    urlrouter = window.location.href;
  } else {
    urlrouter = window.location.origin + window.location.pathname;
    if (window.location.search) {
      let array = [];
      const search = window.location.search.substring(1).split("&");
      for (let i = 0; i < search.length; i++) {
        if (search[i].indexOf("code") == -1) {
          if (search[i] != "state=weChatLogin") {
            array.push(search[i]);
          }
        } else {
          if (search[i + 1] != "state=weChatLogin") {
            array.push(search[i]);
          }
        }
      }
      if (array.length) {
        urlrouter = urlrouter + "?" + array.join("&");
      }
    }
  }

  const str = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
    window.key.WECHATAPPID
  }&redirect_uri=${encodeURIComponent(
    urlrouter
  )}&response_type=code&scope=${scope}&state=weChatLogin&connect_redirect=1#wechat_redirect`;
  window.location.href = str;
};
export default weixinLogin;
```

## 支付宝登陆

```javascript
const alipaylogin = function (manual) {
  let urlrouter = null;
  if (
    window.location.search &&
    window.location.search.indexOf("state=alipylogin") == -1
  ) {
    urlrouter = window.location.href;
  } else {
    urlrouter = window.location.origin + window.location.pathname;
    if (window.location.search) {
      let array = [];
      const search = window.location.search.substring(1).split("&");
      for (let i = 0; i < search.length; i++) {
        if (search[i].indexOf("code") == -1) {
          if (search[i] != "state=alipylogin") {
            array.push(search[i]);
          }
        } else {
          if (search[i + 1] != "state=alipylogin") {
            array.push(search[i]);
          }
        }
      }
      if (array.length) {
        urlrouter = urlrouter + "?" + array.join("&");
      }
    }
  }
  const str = `https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=${window.key.ALIPAYAPPID}&scope=auth_user&redirect_uri=${urlrouter}&state=alipylogin`;
  window.location.href = str;
};
export default alipaylogin;
```

## 第三方 SDK

```javascript
import { wechatSign } from "@/api/user";
import wx from "weixin-js-sdk";

function getWechatSign(jsAPi) {
  return new Promise((resolve, reject) => {
    wechatSign(window.location.href)
      .then((res) => {
        if (res.code === 49000) {
          wx.config({
            debug: false,
            appId: res.result.appid, // 必填，公众号的唯一标识
            timestamp: res.result.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.result.noncestr, // 必填，生成签名的随机串
            signature: res.result.signature, // 必填，签名
            jsApiList: ["checkJsApi", ...jsAPi], // 必填，需要使用的JS接口列表
          });
          wx.ready(function () {
            if (!window.wxerror) {
              wx.checkJsApi({
                jsApiList: jsAPi,
                success: function (res) {
                  if (res.errMsg.indexOf("checkJsApi:ok") != -1) {
                    const result = res.checkResult;
                    let err = false;
                    for (let key in result) {
                      if (!result[key]) {
                        err = true;
                      }
                    }
                    if (!err) {
                      resolve();
                    } else {
                      reject({ msg: `该微信版本不支持该功能，请更新微信` });
                    }
                  }
                },
                fail: (err) => {
                  console.error(err);
                  reject({ msg: "微信内部错误" });
                },
              });
            }
          });
          wx.error(function (err) {
            window.wxerror = true;
            console.error(err);
            reject({ msg: "微信授权失败" });
          });
        } else if (res.code != 49200) {
          reject({ msg: res.msg });
        }
      })
      .catch((err) => reject(err));
  });
}

export { getWechatSign };
```

## 深冻结函数

```javascript
// 深冻结函数.
function deepFreeze(obj) {
  // 取回定义在obj上的属性名
  var propNames = Object.getOwnPropertyNames(obj);

  // 在冻结自身之前冻结属性
  propNames.forEach(function (name) {
    var prop = obj[name];

    // 如果prop是个对象，冻结它
    if (typeof prop == "object" && prop !== null) deepFreeze(prop);
  });

  // 冻结自身(no-op if already frozen)
  return Object.freeze(obj);
}
```

## 滚动

```javascript
window.addEventListener("scroll", () => {
  let top =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop;
  if (top > 100) {
    this.guidanceShow = false;
  } else {
    this.guidanceShow = true;
  }
});
```

## 导入多个组件

```javascript
const path = require("path");
const files = require.context("@/components/home", false, /\.vue$/);
const modules = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".vue");
  modules[name] = files(key).default || files(key);
});
components: modules;
```

实际上是 webpack 的方法,vue 工程一般基于 webpack,所以可以使用 require.context(directory,useSubdirectories,regExp) 接收三个参数: directory：说明需要检索的目录 useSubdirectories：是否检索子目录 regExp: 匹配文件的正则表达式,一般是文件名

## 导入多个路由

```javascript
/**
 * 设置路由
 */
let routes = [];
const modulesFiles = require.context("./modules", true, /\.js$/);
modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath);
  routes.push(...value.default);
}, {});
```

```javascript
let current = e.detail.current;
{
  detail: {
    current;
  }
}
```

## vue 函数传 data 值

```shell
   let str='formData.anchor.topic'
   let arr = detail.name.split(".");
   let obj = this;
   for (var i = 0; i < arr.length; i++) {
   obj = obj[arr[i]];
   }
   obj = msg.result[0];
```

```shell
 this.tags = res.result.map(v => ({
            ...v,
            checked: false,
          }))

this.tags = res.result.map(v => {
            if (
              this.$db.get('searchLocal') &&
              this.$db
                .get('searchLocal')
                .form.tag.split(',')
                .includes(v.id + '')
            ) {
              return { ...v, checked: true }
            } else {
              return { ...v, checked: false }
            }
          })
```

## 截取小数点后位数

```javascript
	getBit(value, bit = 2) {
		let str = value.toString();
		let strIndex = str.indexOf('.');
		if (strIndex === -1) return str;
		str = str.substring(0, strIndex + bit + 1);
		return str;
	}

```

## 取整

```javascript
var a = ~~2.33;
var b = 2.33 | 0;
var c = 2.33 >> 0;
```

## 下载一个链接

```javascript
function download(link, name) {
  if (!name) {
    name = link.slice(link.lastIndexOf("/") + 1);
  }
  let eleLink = document.createElement("a");
  eleLink.download = name;
  eleLink.style.display = "none";
  eleLink.href = link;
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}
//下载excel
download("http://111.229.14.189/file/1.xlsx");
```

## 树形目录结构算法

```javascript
// 可选值
let options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
            code: 752100,
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
            code: 453400,
          },
        ],
      },
    ],
  },
];
/**递归之父找子**/
// 获取label
getLabel = (value, options) => {
  let item = options.find((i) => i.value === value[0]) || {};
  return value.length > 1
    ? [item.label, ...getLabel(value.slice(1), item.children)]
    : [item.label];
};

let label = getLabel(["zhejiang", "hangzhou", "xihu"], options).join("/");

/**递归之子找父**/
// 树转换为数组
treeToArray = (ls, parent) =>
  (ls || []).reduce((r, p) => {
    p.parent = parent;
    r = r.concat([p, ...treeToArray(p.children, p)]);
    return r;
  }, []);
// 获取父级
getParents = (item = {}) =>
  item.parent ? [...getParents(item.parent), item.value] : [item.value];
// 获取label
getLabel = (value, options) => {
  let item = treeToArray(options).find((i) => i.value === value);
  return getParents(item);
};

let label = getLabel("xihu", options).join("/");
console.log(label);
```
