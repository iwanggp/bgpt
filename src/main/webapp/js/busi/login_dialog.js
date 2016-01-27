/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    console.log('remark ...');
    var $page = $.pdialog.getCurrent();

    $("#login", $page).click(function() {
        if ($("#login_form", $page).valid()) {
            var o = new AjaxOptions($("#login_form", $page));
            o.put("service_code", "P11000");
            o.sus = function(data) {
                localStorage.bgpt_user = this.get("username");
                localStorage.bgpt_pwd = this.get("password");
                sessionStorage.user = JSON.stringify(data.user);    //把登录的用户信息在客户端也保存一份
                alertMsg.correct("登录成功！");
                $.pdialog.closeCurrent();
                navTab.reload();      //登录成功后刷新当前navTab
            };
            $.ajax(o);
        }
    });
    //自动登录
    if (localStorage.bgpt_user && localStorage.bgpt_pwd) {
        $('#username', $page).val(localStorage.bgpt_user);
        $('#password', $page).val(localStorage.bgpt_pwd);
        $("#login", $page).click();
    }

    $("#cancel", $page).click(function() {
        alertMsg.confirm("确定要退出吗？", {"okCall": function() {
                location.href = "index.html";
            }});
    });

    $("a.close", $page).mousedown(function(e) {
        alertMsg.confirm("确定要退出吗？", {"okCall": function() {
                location.href = "index.html";
            }});
        e.stopPropagation();    //阻止浏览器的冒泡事件
        e.preventDefault();     //阻止浏览器默认的事件
        return false;
    });
})();