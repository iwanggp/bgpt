(function () {
    var $page = navTab.getCurrentPanel();

    /**
     * 查询服务
     */
    $('#search-button', $page).on('click', function () {
        $("#users", $page).cutPage({
            jh: $('#jh', $page).val(),
            xm: $('#xm', $page).val(),
            service_code: "S21020"
        }, function (data) {
//            for (var i = 0; i < data.length; i++) {
//                var item = data[i];
//                item.gzdd = ((($('<a/>').attr({
//                    "jh": item.jh,
//                    "xm": item.xm,
//                    "yxbm": item.zgbm
//                }).addClass('dd-link').css({"cursor": "pointer", "color": "blue"})).html("工作调动")));
//            }
//            setTimeout(function () {
//                $('.dd-link').unbind('click').bind('click', function (e) {
//                    $.pdialog.open('page/zcgl/ry0003-rydd.html', 'ry-rydd', '警员调动',
//                            {"width": 1000, "height": 250, mask: true,
//                                param: {jh: $(this).attr("jh"), xm: $(this).attr("xm"), yxbm: $(this).attr("yxbm")},
//                                close: function (param) {
//                                    return true;
//                                }
//                            });
//                });
//            });
        });
    }).trigger('click');
    /**
     * 删除服务,如果删除调度信息。我们认为这个调度不存在，则该警员的在岗部门恢复为以前的在岗部门
     */
    $('#delete', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            alertMsg.confirm('确定要删除么？', {okCall: function () {
                    var o = new AjaxOptions();
                    o.put('ddbh', rowData.ddbh);
                    o.put('jh', rowData.jh);
                    o.put('zgbm', rowData.yxbm);//取出原先的部门
                    o.put('service_code', 'P21021');
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
    //打开修改用户对话框
    $('#edit', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            $.pdialog.open('page/zcgl/ry0003-edit.html', 'mod_zcgl_dd', '修改用户调度信息', {
                width: 900,
                height: 300,
                param: {row: rowData},
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
    //调度人员返岗
    $('#rollback', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            $.pdialog.open('page/zcgl/ry0003-fgrq.html', 'zcgl_dd_fg', '警员返岗', {
                width: 400,
                height: 150,
                param: {row: rowData},
                close: function (param) {
                    if (param.isFlush) {
                        padBackTable(users, $('#users', $page));//回填表格
                    }
                    return true;
                }
            });
//            var o = new AjaxOptions();
//            o.put('ddbh', rowData.ddbh);
//            o.put('jh', rowData.jh);
//            o.put('zgbm', rowData.yxbm);//取出原先的部门
//            o.put('service_code', 'P21021');
//            o.sus = function () {
//                alertMsg.correct('返岗成功！');
//                $('#search-button', $page).trigger('click');
//            };
//            $.ajax(o);
        } else {
            alertMsg.warn('请先选择一条数据！')
        }
    });
    $('#detail', $page).click(function () {
        var rowData = $(this).getRow();
        if (rowData) {
            $.pdialog.open('page/zcgl/ry0003-detail.html', 'zcgl_rydd_detail', '人员调度详细信息', {
                width: 1000,
                height: 200,
                param: {row: rowData},
                close: function (param) {
                    return true;
                }
            });
        } else {
            alertMsg.warn('请先选择一条数据！')
        }
    });
}).call();