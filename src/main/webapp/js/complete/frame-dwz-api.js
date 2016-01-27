/**
 * @fileOverview 与dwz框架结合的项目ajax框架，提供了ajax的常用操作，需要依赖：<br />jquery、dwz框架、项目的global.js(BaseUrl)、
 * @author lianzt
 */
/**
 * 获取http响应码对应的说明
 * @param {String} code http响应码
 * @returns {String} 说明
 */
function getErrorMsg(code) {
}
var ajaxUrl = BaseUrl + "ajax.do";
/**
 * 阻止用户多次点击，阻止时间
 * @deprecated 已废弃
 */
var balkTime = 1000;
/**
 * 页面中的可操作元素，文本框和按钮等
 */
var pageElement;
/**
 * 系统参数 st_table_paramet 表
 */
var _paramets = {};

/**
 * 获取最顶层的窗口
 * @deprecated 不再使用
 */
function getTopWindows() {
}


/**
 * 删除所有表单的默认提交事件，
 * 在form中点击回车键是默认的提交事件
 */
$.fn.extend({
    /**
     * 绑定在按钮上，获取表格中被选中行的json数据
     */
    getRow: function() {
    },
    /**
     * 绑定在按钮上，获取表格中被选中行的jquery对像，为tbody中的tr对象
     */
    getRowObj: function() {
    },
    /**
     * 绑定在表格上，表格的分布查询函数
     * @param {type} json 分页数据
     * @param {type} callback 回调前调用的函数
     * @param {function} after 回调后调用的函数
     */
    cutPage: function(json, callback, after) {
    }
});

/**
 * 获取st_table_paramet表中的参数数组
 * @param {string} col table_name.col_name
 * @returns {array[json]} 该参数对应的所有行
 */
function getParaList(col) {
}

/**
 * 初始化下拉列表，把st_table_paramet表中的对应参数添加到下拉列表之后
 * @param {string} col table_name.col_name
 * @param {string} obj jquery对象
 */
function initParaSelect(col, obj) {
}

/**
 * 初始化下拉列表，把st_table_paramet表中的对应参数添加到下拉列表之后，该函数将在option标签中包含col_value
 * @param {string} col table_name.col_name
 * @param {string} obj jquery对象
 */
function initServiceParaSelect(col, obj) {
}

function initServiceParaUl(arr, obj) {
}

/**
 * 获取参数对应的值
 * @param {string} col table_name.col_name
 * @param {string} key col_value
 * @returns {string} col_desc
 */
function getParaValue(col, key) {
}
/**
 * 获取值对应的参数
 * @param {string} col table_name.col_name
 * @param {string} para col_desc
 * @returns {string} col_value
 */
function getKeyValue(col, para) {
}

/**
 * 显示进度条
 */
function showLoading() {
}
/**
 * 隐藏进度条
 */
function hideLoading() {
}
/**
 * 阻止用户多次点击，该方法必须放在页面初始化函数之后执行。
 * 用户点击一次按钮后会暂时接触该按钮上的事件，使按钮失效一段时间。
 * @deprecated 不再使用
 */
function balkMoreClick() {
}
/**
 * 页面的默认加载事件
 * @deprecated 不再使用
 */
function defualeInit() {
}

/**
 * @return {String} 当前 时间 HH:mm:ss
 */
function getNowTime() {
}

/**
 * @return {String} 当前 日期 + 时间 yyyy-MM-dd HH:mm:ss
 */
function getNowDateTime() {
}

/**
 * @return {String} 当前 日期 yyyy-MM-dd
 */
function getNowDate() {
}

/**
 * @class Ajax的Options对象，可对Ajax进行详细设置<br />该类仅为方便代码开发
 * @constructor
 * @param {jQuery} $form 表单的提交与回填范围，可以是page也可以具体的form，一般使用page。
 */
AjaxOptions = function($form) {
};
/**
 * 在执行ajax请求过程中是否出现提示<br />类型：boolean
 */
AjaxOptions.prototype.isAlert = false;
/**
 * 所有请求均为异步请求。如果需要发送同步请求，请将此项设置为false
 * 类型： Boolean
 */
AjaxOptions.prototype.async = true;

/**
 * 与服务器进行ajax交互时，用户是否可以进行输入。
 * 设置为true时，ajax期间所有表单项全为disabled状态。
 */
AjaxOptions.prototype.noInput = true;
/**
 * 是否为弹出窗口
 */
AjaxOptions.prototype.isDialog = false;
/**
 * 要提交的表单
 */
AjaxOptions.prototype.form = '';
/**
 * (默认：true， dataType为script和jsonp时默认为false) 设置为false将不缓存此页面
 * 类型 Boolean
 */
AjaxOptions.prototype.cache = false;

/**
 * 类型： String
 */
AjaxOptions.prototype.url = ajaxUrl;

/**
 * 返回信息回填到指定容器(jQuery格式)
 */
AjaxOptions.prototype.padBackElement = null;
/**
 * 是否回填
 */
AjaxOptions.prototype.isPadBack = true;

/**
 * 类型： Object
 */
AjaxOptions.prototype.data = "";

/**
 * 默认的成功回调函数
 * @param data 服务器返回的数据
 */
AjaxOptions.prototype.success = function(data) {
};

/**
 * 请求完成后回调函数 (请求成功或失败之后均调用)。
 * 参数： XMLHttpRequest 对象和一个描述成功请求类型的字符串。
 * 类型： function(XMLHttpRequest, textStatus)
 */
AjaxOptions.prototype.complete = function(request, status) {
};

/**
 * 发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。XMLHttpRequest 对象是唯一的参数。
 * 这是一个 Ajax 事件。如果返回false可以取消本次ajax请求。
 * 类型： function(XMLHttpRequest)
 */
AjaxOptions.prototype.beforeSend = function(XMLHttpRequest) {
};

/**
 * (默认: "application/x-www-form-urlencoded") 发送信息至服务器时内容编码类型。默认值适合大多数情况。
 * 如果你明确地传递了一个content-type给 $.ajax() 那么他必定会发送给服务器（即使没有数据要发送）
 * 类型： String
 */
AjaxOptions.prototype.contentType = "application/x-www-form-urlencoded; charset=utf-8";

/**
 * 这个对象用于设置Ajax相关回调函数的上下文。
 * 也就是说，让回调函数内this指向这个对象（如果不设定这个参数，那么this就指向调用本次AJAX请求时传递的options参数）。
 * 比如指定一个DOM元素作为context参数，这样就设置了success回调函数的上下文为这个DOM元素。
 * 类型：Object； (document.body)
 */
AjaxOptions.prototype.context = undefined;

/**
 * 给Ajax返回的原始数据的进行预处理的函数。
 * 提供data和type两个参数：data是Ajax返回的原始数据，type是调用jQuery.ajax时提供的dataType参数。
 * 函数返回的值将由jQuery进一步处理。
 * 类型： function(data, type)
 */
AjaxOptions.prototype.dataFilter = function(data, type) {
};

/**
 * 预期服务器返回的数据类型。
 * 如果不指定，jQuery 将自动根据 HTTP 包 MIME 信息来智能判断，比如XML MIME类型就被识别为XML。
 * 在1.4中，JSON就会生成一个JavaScript对象，而script则会执行这个脚本。随后服务器端返回的数据会根据这个值解析后，传递给回调函数。可用值:
 *      "xml": 返回 XML 文档，可用 jQuery 处理。
 *      "html": 返回纯文本 HTML 信息；包含的script标签会在插入dom时执行。
 *      "script": 返回纯文本 JavaScript 代码。不会自动缓存结果。除非设置了"cache"参数。'''注意：'''在远程请求时(不在同一个域下)，所有POST请求都将转为GET请求。(因为将使用DOM的script标签来加载)
 *      "json": 返回 JSON 数据 。
 *      "jsonp": JSONP 格式。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。
 *      "text": 返回纯文本字符串
 * 类型：String
 */
AjaxOptions.prototype.dataType = undefined;

/**
 * (默认: 自动判断 (xml 或 html)) 请求失败时调用此函数。
 * 有以下三个参数：XMLHttpRequest 对象、错误信息、（可选）捕获的异常对象。
 * 如果发生了错误，错误信息（第二个参数）除了得到null之外，还可能是"timeout", "error", "notmodified" 和 "parsererror"。
 * 类型： function(XMLHttpRequest, textStatus, errorThrow)
 */
AjaxOptions.prototype.error = function(request, status, error) {
};

/**
 * (默认: true) 是否触发全局 AJAX 事件。设置为 false 将不会触发全局 AJAX 事件.
 */
AjaxOptions.prototype.global = true;

/**
 * (默认: false) 仅在服务器数据改变时获取新数据。使用 HTTP 包 Last-Modified 头信息判断。
 */
AjaxOptions.prototype.ifModified = false;

/**
 * 在一个jsonp请求中重写回调函数的名字。
 * 这个值用来替代在"callback=?"这种GET或POST请求中URL参数里的"callback"部分，
 * 比如{jsonp:'onJsonPLoad'}会导致将"onJsonPLoad=?"传给服务器。
 * 类型： String
 */
AjaxOptions.prototype.jsonp = undefined;

/**
 * 为jsonp请求指定一个回调函数名。
 * 这个值将用来取代jQuery自动生成的随机函数名。
 * 这主要用来让jQuery生成度独特的函数名，这样管理请求更容易，也能方便地提供回调函数和错误处理。
 * 你也可以在想让浏览器缓存GET请求的时候，指定这个回调函数名。
 * 类型： String
 */
AjaxOptions.prototype.jsonpCallback = undefined;

/**
 * 用于响应HTTP访问认证请求的密码
 * 类型： String
 */
AjaxOptions.prototype.password = undefined;

/**
 * (默认: true) 默认情况下，通过data选项传递进来的数据，
 * 如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。
 * 如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
 */
AjaxOptions.prototype.processData = true;

/**
 * 只有当请求时dataType为"jsonp"或"script"，并且type是"GET"才会用于强制修改charset。通常只在本地和远程的内容编码不同时使用。
 * 类型： String
 */
AjaxOptions.prototype.scriptCharset = undefined;

/**
 * 用于响应HTTP访问认证请求的用户名
 * 类型： String
 */
AjaxOptions.prototype.username = undefined;

/**
 * 注：当请求为异步时有效
 * 类型： Number
 */
AjaxOptions.prototype.timeout = 10000;

/**
 * 类型： String
 */
AjaxOptions.prototype.type = "post";

/**
 * 自定义的成功回调函数
 * @param data ajax返回的数据
 */
AjaxOptions.prototype.sus = function(data) {
};

/**
 * 自定义的异常回调函数
 */
AjaxOptions.prototype.fal = function(code, desc) {
    //alert("系统错误: " + code + " -- " + desc);
};

/**
 * 自定义的finally函数
 */
AjaxOptions.prototype.after = function(code, desc) {
};

/**
 * 向data中增加参数
 */
AjaxOptions.prototype.put = function(key, value) {
};
/**
 * 获取data中的值
 */
AjaxOptions.prototype.get = function(key) {
};
/**
 * 删除data中的参数
 */
AjaxOptions.prototype.remove = function(key) {
};

/**
 * 把一个简单的数据对象回填到clone页面
 * @param {jsom} data ajax返回数据
 * @param {jQuery} $tag 要回填的目标标签，是一个jquery选择器，通常是#id
 * @return Boolean
 */
function padBackData(data, $tag) {
}

/**
 * 把一个json数据填充到表格中<br />表格为table标签，并且第一个tr标签的内容是th标签（表头）<br />
 * th标签中包含data-key属性，该属性中的值为json中的key，如果没有该属性或data中没有该值，该列不会填充数值
 * @param tableData 要填充的数据，必须是一个数组，数组中的元素为json
 * @param $table 表格的选择器，通常是#id
 */
function padBackTable(tableData, $table) {
}

/**
 * 把表单项组装成可提交的数据包，与jquery的serialize相比，包括disabled状态的属性标签
 * @param {jQuery} $form form的选择器，通常是#id
 */
function structFormData($form) {
}

/**
 * 把表单项组装成json
 * @param {jQuery} $form form的选择器，通常为#id
 */
function jsonFormData($form) {
}

/**
 * 针对ajax操作时的data参数(key=value&key=value....)<br />
 * 获取一个参数的值
 * @param {String} key 参数的key
 */
String.prototype.getParam = function(key) {
};
/**
 * 针对ajax操作时的data参数(key=value&key=value....)<br />
 * 删除一个参数<br />
 * 函数会返回一个新的字符串，需要对原字符串重新赋值
 */
String.prototype.removeParam = function(key) {
};

/**
 * 针对ajax操作时的data参数(key=value&key=value....)<br />
 * 增加一个参数，如果该参数已经存在则替换<br />
 * 函数会返回一个新的字符串，需要对原字符串重新赋值
 */
String.prototype.putParam = function(key, value) {
};

/**
 * 把jquery serialize()转的表单数据(key=value&key=value....)转为map
 * @param data 表单数据
 */
function dataToMap(data) {
}

/**
 * 把map组装成表单数据包
 */
function structData(data) {
}

/**
 * 把json转为字符串
 * @param {json} o json对象
 */
function json2string(o) {
}

var errorColor = "#FFD7D8";
var okColor = "#ccffcc";

/**
 * 利用Javascript中每个对象(Object)的prototype属性 为Javascript中的内置对象添加方法和属性。
 */
String.prototype._length = function() {
};
/**
 * 验证，不能为空
 * @param {String} i_field 对参数的说明
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function notNull(i_field, obj) {
}
/**
 * 检验登陆名
 * @param {String} i_field 对参数的说明
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function username(i_field, obj) {
}
/**
 * 检验密码
 * @param {String} i_field 对参数的说明
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function password(i_field, obj) {
}
/**
 * 检验汉字
 * @param {String} i_field 对参数的说明
 * @param {Number} i_length 最小长度
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function isChinese(i_field, i_length, obj) {
}
/**
 * 检验包含汉字
 * @param {String} i_field 对参数的说明
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function hasChinese(i_field, obj) {
}

/**
 * 检验证件号码 zjmc：A 18位身份证， H 15位身份证
 * @param {String} zjmc A 18位身份证， H 15位身份证
 * @param {Jquery} zjhm jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function check_zjhm(zjmc, zjhm) {
}
/**
 * 日期校验
 * @param {String} i_field 日期lable
 * @param {String} thedate 日期值(字符串)
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function isDateBirthday(i_field, thedate) {
}
/**
 *
 * @param {String} i_field 对参数的说明
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function sfzCheck(hm, obj) {
}
/**
 * 身份证号15位转18位
 */
function id15to18(zjhm) {
}

/**
 * 自动清除输入框中的空格
 * @param {String} string 字符串
 * @return {String} 删除所有空格
 */
function delspace(string) {
}
/**
 * 检查手机号
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function check_sjhm(obj) {
}
/**
 * 检查长度
 * @param {String} i_field 对参数的说明
 * @param {Number} i_length 长度
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function isLength(i_field, i_length, obj) {
}
/**
 * 检查是否为字母，请配合位数验证函数isLength()使用
 * @param {String} i_field 对参数的说明
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function isChar(i_field, obj) {
}
/**
 * 检查是否为字母或数字，请配合位数验证函数isLength()使用
 * @param {String} i_field 对参数的说明
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function isCharOrNum(i_field, obj) {
}
/***
 * 检查是否为数字
 * @param {String} i_field 对参数的说明
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function isNum(i_field, obj) {
}
/**
 * 检查邮政编码
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function check_yzbm(obj) {
}
/**
 * 检验长度最大为i_length位
 * @param {String} i_field 对参数的说明
 * @param {Number} i_length 长度
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function xyLength(i_field, i_length, obj) {
}
/**
 * 长度至少为i_length位
 * @param {String} i_field 对参数的说明
 * @param {Number} i_length 长度
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function dyLength(i_field, i_length, obj) {
}
/**
 * 检验vin
 * @param {Jquery} obj jquery对象
 * @return {Number|String} 为1(Number)时表示验证通过，不为1时(String)为错误说明
 */
function vinCheck(obj) {
} //end function

/**
 * 创建权限树菜单
 * @param {json} menus json对象
 * @param {Jquery} menuTag jquery对象
 */
function createMenu(menus, menuTag) {
}

/**
 * 为日期对象增加函数
 * 日期格式化
 * 格式 YYYY/yyyy/YY/yy 表示年份
 * MM/M 月份
 * W/w 星期
 * dd/DD/d/D 日期
 * hh/HH/h/H 时间
 * mm/m 分钟
 * ss/SS/s/S 秒
 * @param {String} formatStr 日期格式字符串
 */
Date.prototype.format = function(formatStr) {
};
/**
 * 删除数组元素，删除后数据长度会减1
 * @param {Array} arr 数组
 * @param {Number} n 数组下标
 */
function delArr(arr, n) {
}

/**
 * 裁剪字符串，len为正时从末尾裁剪，为负时从开头裁剪
 */
function cutString(str, len, change) {
}


/**
 * 把表单项组装成json
 * @param {jQuery} $form
 * @param {json} json 如果不为空，就把表单数据增加到参数
 */
function form2JSON($form, json) {
}


/**
 * 文件上传对象
 * @param {array} $divs
 * @returns {object} 文件上传对象
 */
FileOptions = function() {
};

/**
 * 设置服务码，也可使用 put('service_code','') 函数
 * @param {type} service
 * @returns {undefined}
 */
FileOptions.prototype.setService = function(service) {
    this.data.service_code = service;
};

/**
 * 增加参数
 * @param {type} k
 * @param {type} v
 * @returns {undefined}
 */
FileOptions.prototype.put = function(k, v) {
    this.data[k] = v;
};

/**
 * 增加一个表单，将包含 disabled 与 display 的元素
 * @param {jQuery} $form 表单对象
 * @returns {undefined}
 */
FileOptions.prototype.putForm = function($form) {
    form2JSON($form, this.data);
};

/**
 * 获取文件列表
 * @param {type} id
 * @returns {undefined}
 */
FileOptions.prototype.getFileList = function(id) {
    return this.files[id];
};

/**
 * 上传进度回调，如果定义了上传进度条，需要在完成回调中隐藏
 * @param {event} e  e.loaded 已上传量， e.total 需上传总量
 */
FileOptions.prototype.progress = undefined;

/**
 * 上传完成回调
 * @param {event} e  如果定义了上传进度条，需要在完成回调中隐藏
 */
FileOptions.prototype.load = undefined;

/**
 *
 * @param {type} id
 * @param {type} files
 * @returns {undefined}
 */
FileOptions.prototype.readFile = function(id, files) {
    return true;
};

/**
 * 发送上传请求
 * @returns {undefined}
 */
FileOptions.prototype.send = function() {
};

/**
 * 成功回调
 * @param {type} data 返回数据
 * @returns {undefined}
 */
FileOptions.prototype.sus = function(data) {

};

/**
 * 失败回调
 * @param {type} c
 * @param {type} d
 * @returns {undefined}
 */
FileOptions.prototype.fal = function(c, d) {

};

/**
 * ajax结束回调
 * @param {type} c
 * @param {type} d
 * @returns {undefined}
 */
FileOptions.prototype.after = function(c, d) {

};