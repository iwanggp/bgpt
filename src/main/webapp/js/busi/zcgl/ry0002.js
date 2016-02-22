(function () {
    var $page = navTab.getCurrentPanel();
    getTreeMap();//开始获得自己管理下部门的下列列表
    var roleList = null;        //用于保存角色信息，传递给打开的弹出窗口，可生成下拉列表
    var treeMap = null;//用于保存自己管理下部门下列列表
    /**
     * 查询服务
     */
    $('#search-button', $page).on('click', function () {
        $("#users", $page).cutPage({
            jh: $('#jh', $page).val(),
            xm: $('#xm', $page).val(),
            dabm: $("#glbm", $page).val(),
            service_code: "S21015"
        }, function (list) {
        });
    }).trigger('click');
    $('#detail', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            $.pdialog.open('page/zcgl/ry0001-detail.html', 'det_zcgl_ry', '用户详细信息', {
                width: 900,
                height: 400,
                param: {row: rowData, roleList: roleList},
                close: function (param) {
                    return true;
                }
            });
        } else {
            alertMsg.warn('请先选择一条数据！')
        }


    });
    /**
     * 获取自己管辖部门的下列部门列表
     */
    function getTreeMap() {
        var o = new AjaxOptions();
        o.put('service_code', 'S21013');
        o.sus = function (data) {
            treeMap = data.dabm_list;
            if (treeMap != null) {
                $.each(treeMap, function (i, n) {
                    $('#glbm', $page).append($('<option />').attr({value: n.glbm}).html(n.bmmc));
                });
            } else {
                alertMsg.warn("没有找到该部门的信息");
            }
        };
        $.ajax(o);
    }
}).call();