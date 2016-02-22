/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var $page = $.pdialog.getCurrent();
    var searchData;
    /**
     * 查询服务
     */
    $('#search-button', $page).on('click', function () {
        // '分页查询', 显示全部数据
        getResult();
    });
    function getResult() {
        $('#dabm', $page).cutPage({
            service_code: 'S21012',
            glbm: $('#glbm', $page).val(),
            bmqc: $('#bmqc', $page).val(),
            page_size: 10,
        }, function (data) {
            searchData = data;
            for (var i = 0; i < data.length; i++) {
                var item = data[i]; // 获取到table每一行数据
                item.name_link = $('<a/>').attr({
                    "rowData": i//这回通过传递改行的数据
                }).addClass("xq-link").css({"cursor": "pointer", "color": "blue"}).html('详情');
                item.find_fetch = $('<a/>').attr({
                    "glbm": item.glbm,
                    "bmmc": item.bmmc,
                    "href": "javascript:$.bringBack({orgName:'" + item.bmmc + "',glbm:'" + item.glbm + "'})"
                }).addClass("btnSelect").css({"cursor": "pointer", "color": "red"});
            }
            setTimeout(function () {
                $(".xq-link").unbind("click").bind("click", function (e) {
                    $.pdialog.open('page/zcgl/dabm-detail.html', 'dabm-detail', '档案部门详情', {
                        width: 880, height: 230, mask: true,
                        param: {row: data[$(this).attr('rowData')]},
                        close: function () {
                            return true;
                        }
                    });
//                    openDetail($(this).attr('hylb'), $(this).attr('hyid'), $(this).attr('hymc'));
                });
            }, 50);
        });
    }
}).call();

