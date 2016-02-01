(function () {
    var $page = navTab.getCurrentPanel();
//查询服务
    $("#search-button", $page).click(function () {
        if ($("#search-form", $page).valid()) {
            var role_name = $("#role_name", $page).val();
            $("#role_list", $page).cutPage({
                role_name: role_name,
                service_code: "S21001"
            }, function (list) {
            });
        }
    }).trigger('click');
    //删除服务
    $("#delete", $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            alertMsg.confirm("确定要删除么？", {okCall: function () {
                    var o = new AjaxOptions();
                    o.put("role_id", rowData.role_id);
                    o.put("service_code", "P21004");
                    o.sus = function () {
                        alertMsg.correct("删除成功！");
                        $("#search-button", $page).trigger("click");
                    };
                    $.ajax(o);

                }});
        } else {
            alertMsg.warn("请选择要删除的角色");
        }
    });
    //打开添加服务对话框
    $("#add", $page).click(function () {
        $.pdialog.open("page/zcgl/xm0001-handle.html", 'add_role_zcgl', "添加角色", {"width": 550, "height": 259});
    });
    //打开修改服务对话框
    $("#edit", $page).click(function () {
        var rowData = $(this).getRow();

        if (rowData) {
            sessionStorage.xm0001_detail = JSON.stringify(rowData);
            $.pdialog.open("page/zcgl/xm0001-handle.html", 'mod_role_zcgl', "修改角色", {"width": 550, "height": 259});
        } else {
            alertMsg.warn("请选择要更改的角色");
        }
    });
    $('#auth', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            $.pdialog.open("page/zcgl/xm0001-auth.html", 'auth_role_zcgl', "角色授权", {"width": 550, "height": 559,param:{role_id:rowData.role_id}});
        } else {
            alertMsg.warn("请选择一个角色");
        }

    });
}).call();