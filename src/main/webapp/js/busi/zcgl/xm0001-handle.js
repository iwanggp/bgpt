(function () {
    var $page = $.pdialog.getCurrent();
    var jsonStr = sessionStorage.xm0001_detail;
    var role_id='';
    sessionStorage.removeItem("xm0001_detail");
    initParaSelect('app_dep.glbm', $('#ssbm', $page));
    if (jsonStr) {
        var data = JSON.parse(jsonStr);
        role_id=data['role_id'];
        //回填表单数据并增加只读属性
        padBackData(data,$('#info',$page));
        $('#bz').val(data['bz']);
        //修改服务
        $("#save", $page).click(function () {
            var opt = new AjaxOptions($('#info',$page));
            opt.put("service_code", "P21003");
            opt.put("role_id", role_id);
            opt.sus = function () {
                alertMsg.correct("修改成功！");
                $("#close").trigger("click");
                $("#search-button", navTab.getCurrentPanel()).trigger("click");
            };
            $.ajax(opt);
        });
    } else {
        $("#save", $page).click(function () {
            if (!$("#info", $page).valid()) {
                return false;
            }
            var options = new AjaxOptions($("#info", $page));
            options.put("service_code", "P21002");
//            options.put("ssbm",$("#ssbm").val());
            options.sus = function () {
                alertMsg.correct("添加成功!");
                $("#close").trigger("click");
                $("#search-button", navTab.getCurrentPanel()).trigger("click");
            };
            $.ajax(options);
        });
    }
}).call();