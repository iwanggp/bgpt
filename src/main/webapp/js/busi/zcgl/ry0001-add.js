
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var $page = navTab.getCurrentPanel();
    var $dialog = $("body").data('add_user_zcgl');//必须通过这种方法
    var param = $dialog.data('param'); //父窗口传递的参数
    initParaSelect('zcgl_ry.zzmm', $('#zzmm', $dialog));
    initParaSelect('zcgl_ry.ryzt', $('#ryzt', $dialog));
    initParaSelect('zcgl_ry.gzzl', $('#gzzl', $dialog));
    initRole();
    $("#add", $dialog).click(function () {
        if (!$("#ry", $dialog).valid()) {
            return false;
        }
        var options = new AjaxOptions($('#ry', $dialog));
        options.put('dabm', $('#_dabm', $dialog).val());
        options.put('zgbm', $('#_zgbm', $dialog).val());//数据库中存放两个部门的编码
        options.put('service_code', 'P21008');//向数据库中添加数据，同时向用用户表中添加数据

        options.sus = function (data) {
            if (data["flag"] == "1") {
                alertMsg.correct("添加成功");
                $('#search-button', $page).trigger('click');
                $('input[id!=dabm][id!=zgbm]', $dialog).val("").focus();//保留档案部门和主管部门的内容将其他的一些输入框的内容清空，同时获得输入的焦点
            } else {
                alertMsg.error("写入数据异常");
            }
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
