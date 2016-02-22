insert into ST_ERR_MSG(err_code,err_msg) values('100042','该角色下存在用户，不能删除');
insert into ST_ERR_MSG(err_code,err_msg) values('100043','该角色已分配权限，不能删除');
insert into app_dep(glbm,bmmc,sjbm,czsj,cjr,ord) values('000000000001','固定资产管理','410100000000',sysdate,'','9');
insert into app_dep(glbm,bmmc,sjbm,czsj,cjr,ord) values('000000000002','部门资产管理','410100000000',sysdate,'','10');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'ryzt', '1', '人员状态', '在岗');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'ryzt', '2', '人员状态', '调动');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'ryzt', '3', '人员状态', '出差');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'ryzt', '0', '人员状态', '退休');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'gzzl', '01', '工作种类', '车检');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'gzzl', '02', '工作种类', '工程');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'gzzl', '03', '工作种类', '事故');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'gzzl', '04', '工作种类', '平台');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'gzzl', '05', '工作种类', '指挥中心');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'gzzl', '06', '工作种类', '智能交通管理');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'gzzl', '07', '工作种类', '交巡');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('S21007','getRolePl','获得全部角色','Y','zcgl');