
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $dialog = $("body").data('zcgl_rydd_detail');//必须通过这种方法
    var param = $dialog.data('param'); //父窗口传递的参数
    initParaSelect('zcgl_ry_dd.ddzt', $('#ddzt', $dialog));
    initParaSelect('zcgl_ry.dabm', $('#yxbm', $dialog));
    initParaSelect('zcgl_ry.dabm', $('#ddbm', $dialog));
    padBackData(param.row, $('#ry', $dialog));
    $('select', $dialog).prop("disabled", true);//1.6以后的写法
    $('input', $dialog).attr({readonly: "readonly"});

}).call();
