
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
//    var $page = navTab.getCurrentPanel();
    var $dialog = $("body").data('dabm-detail');//必须通过这种方法
    var param = $dialog.data('param'); //父窗口传递的参数
    padBackData(param.row, $('#dabmdetail', $dialog));

}).call();
