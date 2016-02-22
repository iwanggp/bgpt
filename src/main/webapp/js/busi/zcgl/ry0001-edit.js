
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $page = navTab.getCurrentPanel();
    var $dialog = $("body").data('mod_zcgl_ry');//必须通过这种方法
    var param = $dialog.data('param'); //父窗口传递的参数
    initParaSelect('zcgl_ry.zzmm', $('#zzmm', $dialog));
    initParaSelect('zcgl_ry.ryzt', $('#ryzt', $dialog));
    initParaSelect('zcgl_ry.gzzl', $('#gzzl', $dialog));
    
    initRole();
    padBackData(param.row, $('#ry', $dialog));
    $('#jh', $dialog).attr({readonly: "readonly"});
//    $('#cjgzsj', $dialog).val(new Date(param.row.cjgzsj).format("YYYY-MM-dd"));
    $("#save", $dialog).click(function () {
        if (!$("#ry", $dialog).valid()) {
            return false;
        }
        var options = new AjaxOptions($('#ry', $dialog));
        if ($('#_dabm', $dialog).val())
            options.put('dabm', $('#_dabm', $dialog).val());
        else
            options.put('dabm', $('#dabm', $dialog).val());
        if ($('#_zgbm', $dialog).val())
            options.put('zgbm', $('#_zgbm', $dialog).val());
        else
            options.put('zgbm', $('#zgbm', $dialog).val());
        options.put('service_code', 'P21011');//修改人员信息
        options.sus = function () {
            alertMsg.correct("修改成功");
//            form2JSON($('#ry', $dialog), param.row);      //把修改后的数据写回
//            param.isFlush = true;       //刷新表格
            $("#close").trigger("click");
            $('#search-button', $page).trigger('click');
        };
        $.ajax(options);
    });
    /**
     * 初始化角色列表
     * @returns {undefined}
     */
    function initRole() {
        var roleList = param.roleList;
        if (roleList != null) {
            $.each(roleList, function (i, n) {
                $('#role_id', $dialog).append($('<option />').attr({value: n.role_id}).html(n.role_name));
            });
        }
    }
}).call();
