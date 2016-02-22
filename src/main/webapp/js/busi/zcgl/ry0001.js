(function () {
    var $page = navTab.getCurrentPanel();
    var searchData;
    getRolePl();//开始调用服务获取全部的角色信息
    getDepMap();
    var roleList = null;        //用于保存角色信息，传递给打开的弹出窗口，可生成下拉列表
    var treeMap = null;//用于保存自己管理下部门下列列表
    /**
     * 查询服务
     */
    $('#search-button', $page).on('click', function () {
        $("#users", $page).cutPage({
            jh: $('#jh', $page).val(),
            xm: $('#xm', $page).val(),
            dabm: $("#dabm", $page).val(),
            service_code: "S21009"
        }, function (data) {
            searchData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                item.gzdd = ((($('<a/>').attr({
                    "jh": item.jh,
                    "xm": item.xm,
                    "yxbm": item.zgbm,
                }).addClass('dd-link').css({"cursor": "pointer", "color": "blue"})).html("工作调动")));
            }
            setTimeout(function () {
                $('.dd-link').unbind('click').bind('click', function (e) {
                    $.pdialog.open('page/zcgl/ry0003-rydd.html', 'ry-rydd', '警员调动',
                            {"width": 1000, "height": 300, mask: true,
                                param: {jh: $(this).attr("jh"), xm: $(this).attr("xm"), yxbm: $(this).attr("yxbm")},
                                close: function (param) {
                                    return true;
                                }
                            });
                });
            });
        });
    }).trigger('click');
    /**
     * 删除服务
     */
    $('#delete', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            alertMsg.confirm('确定要删除么？', {okCall: function () {
                    var o = new AjaxOptions();
                    o.put('jh', rowData.jh);
                    o.put('service_code', 'P21010');
                    o.sus = function () {
                        alertMsg.correct('删除成功！');
                        $('#search-button', $page).trigger('click');
                    };
                    $.ajax(o);
                }});
        } else {
            alertMsg.warn('请先选择一条数据！');
        }
    });
    //打开添加服务对话框
    $('#add', $page).click(function () {
        $.pdialog.open('page/zcgl/ry0001-add.html', 'add_user_zcgl', '添加警员', {
            width: 900,
            height: 450,
            param: {roleList: roleList},
            close: function (param) {
                return true;            //只有返回 true 时弹出窗口才会关闭

            }
        });
    });
    //打开修改用户对话框
    $('#edit', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            $.pdialog.open('page/zcgl/ry0001-edit.html', 'mod_zcgl_ry', '修改用户', {
                width: 900,
                height: 450,
                param: {row: rowData, roleList: roleList},
                close: function (param) {
                    if (param.isFlush) {
                        padBackTable(users, $('#users', $page));//回填表格
                    }
                    return true;
                }
            });
        } else {
            alertMsg.warn('请先选择一条数据！')
        }
    });
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
     * 获取所有角色
     * @returns {undefined}
     */
    function getRolePl() {
        var o = new AjaxOptions();
        o.put('service_code', 'S21007');
        o.sus = function (data) {
            roleList = data.role_list;
        };
        $.ajax(o);
    }
    //    /**
//     * 获取全部部门的下列部门列表
//     */
    function getDepMap() {
        var o = new AjaxOptions();
        o.put('service_code', 'S21014');
        o.sus = function (data) {
            treeMap = data.glbm_list;
            if (treeMap != null) {
                $.each(treeMap, function (i, n) {
                    $('#dabm', $page).append($('<option />').attr({value: n.glbm}).html(n.bmmc));
                });
                $("#dabm", $page).jqxComboBox({width: 280, height: 25});
            } else {
                alertMsg.warn("没有找到该部门的信息");
            }
        };
        $.ajax(o);
    }
}).call();