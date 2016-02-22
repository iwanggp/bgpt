
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $page = navTab.getCurrentPanel();
    var $dialog = $("body").data('ry-rydd');//必须通过这种方法
    var param = $dialog.data('param'); //父窗口传递的参数
    initParaSelect('zcgl_ry.dabm', $('#yxbm', $dialog));
    $('#yxbm', $dialog).val(param.yxbm);
    $('#jh', $dialog).attr({readonly: "readonly"}).val(param.jh);
    $('#xm', $dialog).attr({readonly: "readonly"}).val(param.xm);
    $('#yxbm', $dialog).prop("disabled", true);//1.6以后的写法====================================
    $("#add", $dialog).click(function () {
        if (!$("#ry", $dialog).valid()) {
            return false;
        }
        var options = new AjaxOptions($('#ry', $dialog));
        options.put('ddbm', $('#_dabm', $dialog).val());
        options.put("yxbm", param.yxbm);//将调度前的部门放入原先部门中
        options.put('service_code', 'P21019');//向数据库中添加数据，同时向用用户表中添加数据
        options.sus = function (data) {
            alertMsg.correct("添加成功");
            $('#search-button', $page).trigger('click');
            $("#close", $dialog).trigger("click");
        };
        $.ajax(options);
    });

}).call();
