
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('P21008','addZcglRy','添加人员信息','Y','zcgl');
--添加一个错误代码当系统中已经存在该警号时
insert into st_err_msg(err_code,err_msg) values('300001','系统中已经存在该警号！');
insert into st_err_msg(err_code,err_msg) values('100002','加密算法异常！');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('S21009','getZcglRy','获取全部人员信息','Y','zcgl');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('P21010','delZcglRy1','删除警员人员信息','Y','zcgl');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('P21011','modZcglRy','修改人员信息','Y','zcgl');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('S21012','getDabm','查询档案信息','Y','zcgl');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('S21013','getTreeMap','获取自己管辖下的部门下列表','Y','zcgl');