
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $page = navTab.getCurrentPanel();
    var $dialog = $("body").data('zcgl_dd_fg');//必须通过这种方法
    var param = $dialog.data('param'); //父窗口传递的参数

    $("#add", $dialog).click(function () {
//        alert($("#fgsj", $dialog).val());
        if (!$("#fgsj", $dialog).val()) {
            alertMsg.warn("请输入返岗日期");
        } else if (param.row.ddzt != '2') {
            var options = new AjaxOptions($('#ry', $dialog));
            options.put('service_code', 'P21023');//修改调度信息
            options.put('ddbh', param.row.ddbh);
            options.put('zgbm', param.row.yxbm);
            options.put('jh', param.row.jh);
            options.sus = function () {
                alertMsg.correct("返岗成功");
                $("#close").trigger("click");
                $('#search-button', $page).trigger('click');
            };
            $.ajax(options);
        } else {
            alertMsg.warn("该警员已经返岗，不可重复返岗");
        }
    });
}).call();
