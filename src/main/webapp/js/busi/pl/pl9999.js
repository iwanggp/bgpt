/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    console.log('remark ...');
    var $page = navTab.getCurrentPanel();

    $('#submit', $page).on('click', function() {
        if ($('#data_form', $page).valid()) {
            var data = ['service_code=' + $('#service_code', $page).val()];
            var jsonStr = $.trim($('#args', $page).val());     //去除前后空格
            var reg = /(\w+)=(.+)/g;
            var c = reg.exec(jsonStr);
            while (c) {
                data.push(c[1] + '=' + encodeURIComponent(c[2]));       //key=value，value中有可能会出现特殊字符或中文，需要URIEncode UTF-8转码
                c = reg.exec(jsonStr);
            }

            var o = new AjaxOptions();
            o.data = data.join('&');
            o.sus = function(data) {
                $('#res p', $page).html(JSON.stringify(data));
                $('#res', $page).fadeIn(500);
            };
            $.ajax(o);
        }
    });

    $('#res', $page).hide();
})();
