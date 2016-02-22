
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
//    var $page = navTab.getCurrentPanel();
    var $dialog = $("body").data('det_zcgl_ry');//必须通过这种方法
    var param = $dialog.data('param'); //父窗口传递的参数
    initParaSelect('zcgl_ry.zzmm', $('#zzmm', $dialog));
    initParaSelect('zcgl_ry.ryzt', $('#ryzt', $dialog));
    initParaSelect('zcgl_ry.gzzl', $('#gzzl', $dialog));
    initParaSelect('zcgl_ry.dabm', $('#dabm', $dialog));
    initParaSelect('zcgl_ry.dabm', $('#zgbm', $dialog));
    initRole();
    padBackData(param.row, $('#ry', $dialog));
    $('select', $dialog).prop("disabled", true);//1.6以后的写法
    $('input', $dialog).attr({readonly: "readonly"});
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
