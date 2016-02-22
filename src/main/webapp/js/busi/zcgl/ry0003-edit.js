
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $page = navTab.getCurrentPanel();
    var $dialog = $("body").data('mod_zcgl_dd');//必须通过这种方法
    var param = $dialog.data('param'); //父窗口传递的参数
    initParaSelect('zcgl_ry_dd.ddzt', $('#ddzt', $dialog));
    initParaSelect('zcgl_ry.dabm', $('#yxbm', $dialog));
//    initParaSelect('zcgl_ry.dabm', $('#ddbm', $dialog));
    padBackData(param.row, $('#ry', $dialog));
    $('#jh', $dialog).attr({readonly: "readonly"});
    $('#xm', $dialog).attr({readonly: "readonly"});
    $('#yxbm', $dialog).prop("disabled", true);//1.6以后的写法
    $("#save", $dialog).click(function () {
        if (!$("#ry", $dialog).valid()) {
            return false;
        }
        var options = new AjaxOptions($('#ry', $dialog));
        if ($('#_ddbm', $dialog).val())
            options.put('ddbm', $('#_ddbm', $dialog).val());
        else
            options.put('ddbm', $('#ddbm', $dialog).val());
        options.put('service_code', 'P21022');//修改调度信息
        options.put('ddbh', param.row.ddbh);
        options.sus = function () {
            alertMsg.correct("修改成功");
//            form2JSON($('#ry', $dialog), param.row);      //把修改后的数据写回
//            param.isFlush = true;       //刷新表格
            $("#close").trigger("click");
            $('#search-button', $page).trigger('click');
        };
        $.ajax(options);
    });
}).call();
