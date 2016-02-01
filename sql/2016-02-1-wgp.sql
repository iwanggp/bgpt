insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('S21001','cutRolePl','获取角色','Y','pl')
insert into APP_MENU (m_id, m_name, m_url, m_title, m_type, m_super, xtbb)
values ('zcgl01','人员管理','','人员管理','1','zcgl','1');
insert into APP_MENU (m_id, m_name, m_url, m_title, m_type, m_super, xtbb)
values ('ry0001','人员信息管理','zcgl/ry0001','人员信息管理','0','zcgl01','1');
insert into APP_MENU (m_id, m_name, m_url, m_title, m_type, m_super, xtbb)
values ('zcgl02','物资管理','','物资管理','1','zcgl','1');
insert into APP_MENU (m_id, m_name, m_url, m_title, m_type, m_super, xtbb)
values ('zcgl03','项目管理','','项目管理','1','zcgl','1');
insert into APP_MENU (m_id, m_name, m_url, m_title, m_type, m_super, xtbb)
values ('xm0001','角色管理','zcgl/xm0001','角色管理','0','zcgl03','1');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'zzmm', '01', '政治面貌', '中共党员');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc)
values ('zcgl_ry', 'zzmm', '02', '政治面貌', '中共预备党员');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('P21006','saveRoleLimitPl','保存角色权限','Y','pl');