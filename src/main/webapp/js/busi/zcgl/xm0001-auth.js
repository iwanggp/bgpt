(function () {
    var $page = $.pdialog.getCurrent();
    var param = $page.data('param');
    var options = new AjaxOptions($("#search_form", $page));
    options.put("service_code", "S21005");
    options.put("role_id", param.role_id);
    options.isAlert = false;
    options.sus = function (data) {
        var isCheck = "";
        $.each(data["role_limit"], function (i, v) {
            if (v.m_id.length == 6) {
                isCheck += ",#" + v.m_id;
            }
        });
        $("#menu_div ul", $page).eq(0).html("");
        createMenu(data["all_menu"], $("#menu_div ul", $page).eq(0));
        $("#menu_div", $page).jstree({
            "themes": {
                "theme": "apple"
            },
            "plugins": ["themes", "html_data", "checkbox", "sort", "ui"]
        })
                .bind("select_node.jstree", function (event, data) {
                    if (data.rslt.obj.attr("type") == "1") {
                        $("#menu_div").jstree("toggle_node", data.rslt.obj);        //打开或关闭自身
                    }
                });
        $("#save", $page).attr("role_id", this.get("role_id"));
        $("#auth_div", $page).fadeIn(800, function () {
            $("#menu_div", $page).jstree("check_node", $(isCheck.substr(1), $page));
        });
    };
    $("#auth_div", $page).fadeOut(100);
    $.ajax(options);
    $("#all_check", $page).click(function () {
        $("#menu_div", $page).jstree("check_all");
    });

    $("#all_uncheck", $page).click(function () {
        $("#menu_div", $page).jstree("uncheck_all");
    });

    $("#save", $page).click(function () {
        var options = new AjaxOptions();
        options.put("service_code", "P21006");
        options.put("role_id", param.role_id);
        options.put("menus", getCheck());
        options.sus = function () {
            $("#auth_div", $page).fadeOut(800);
            $.pdialog.closeCurrent();
            alertMsg.correct("分配成功");
            $("#search-button", $page).click();
        };
        $.ajax(options);
    });


    /**
     * 获取已选择的项
     */
    function getCheck() {
        var check = "";
        $("#menu_div", $page).find(".jstree-undetermined, .jstree-checked").each(function (i, v) {
            if (i > 0) {
                check = check + ",";
            }
            check = check + v.id;
        });
        return check;
    }
}).call();