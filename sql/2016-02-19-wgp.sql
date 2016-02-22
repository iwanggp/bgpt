insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('S21014','getDepTree','获取全部部门下列表','Y','zcgl');
insert into APP_MENU (m_id, m_name, m_url, m_title, m_type, m_super, xtbb)
values ('ry0002','警员查询','zcgl/ry0002','警员查询','0','zcgl01','1');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('S21015','getZcglDepRy','获取某一个管辖的人员信息','Y','zcgl');
insert into APP_MENU (m_id, m_name, m_url, m_title, m_type, m_super, xtbb) values ('ry0003','警员调动','zcgl/ry0003','警员调动','0','zcgl01','1');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc) values ('zcgl_ry_dd', 'ddzt', '1', '调动状态', '调动');
insert into ST_TABLE_PARAMET (table_name, col_name, col_value, col_desc, value_desc) values ('zcgl_ry_dd', 'ddzt', '2', '调动状态', '返岗');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('P21019','addZcglRydd','添加人员调度信息','Y','zcgl');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('S21020','getZcglRydd','获取全部的人员的调度信息','Y','zcgl');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('P21021','delZcglRydd','删除人员调度信息','Y','zcgl');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('P21022','modZcglRydd','修改调度信息','Y','zcgl');
insert into ST_BGPT_BEAN(service_code,bean_name,service_desc,is_login,module) values('P21023','modZcglRyddFg','修改警员返岗','Y','zcgl');
#更新人员表增加角色id
create table ZCGL_RY
(
  jh      VARCHAR2(6) not null,
  xm      VARCHAR2(50) not null,
  xb      VARCHAR2(2),
  sfzmhm  VARCHAR2(20),
  dabm    VARCHAR2(12),
  zgbm    VARCHAR2(12),
  lxdh    VARCHAR2(15) not null,
  cjgzsj  DATE,
  zzmm    VARCHAR2(4),
  yhkh    VARCHAR2(30),
  khh     VARCHAR2(50),
  gzzl    VARCHAR2(2),
  fqxm    VARCHAR2(50),
  fqlxdh  VARCHAR2(15),
  mqxm    VARCHAR2(50),
  mqlxdh  VARCHAR2(15),
  jtzz    VARCHAR2(200),
  ryzt    VARCHAR2(1) not null,
  lrr     VARCHAR2(6) not null,
  lrrxm   VARCHAR2(50),
  lrsj    DATE not null,
  bz      VARCHAR2(200),
  role_id VARCHAR2(20) not null
);
-- Add comments to the table 
comment on table ZCGL_RY
  is '资产管理人员表';
-- Add comments to the columns 
comment on column ZCGL_RY.jh
  is '警号，与app_user表关联';
comment on column ZCGL_RY.xm
  is '姓名';
comment on column ZCGL_RY.xb
  is '性别';
comment on column ZCGL_RY.sfzmhm
  is '身份证号';
comment on column ZCGL_RY.dabm
  is '档案部门';
comment on column ZCGL_RY.zgbm
  is '在岗部门';
comment on column ZCGL_RY.lxdh
  is '联系电话';
comment on column ZCGL_RY.cjgzsj
  is '参加工作时间';
comment on column ZCGL_RY.zzmm
  is '政治面貌，参考：zcgl.zzmm';
comment on column ZCGL_RY.yhkh
  is '银行卡号';
comment on column ZCGL_RY.khh
  is '开户行';
comment on column ZCGL_RY.gzzl
  is '工作种类，参考：zcgl.gzzl';
comment on column ZCGL_RY.fqxm
  is '父亲名子';
comment on column ZCGL_RY.fqlxdh
  is '父亲联系电话';
comment on column ZCGL_RY.mqxm
  is '母亲名子';
comment on column ZCGL_RY.mqlxdh
  is '母亲联系电话';
comment on column ZCGL_RY.jtzz
  is '家庭住址';
comment on column ZCGL_RY.ryzt
  is '人员状态，参考：zcgl.ryzt';
comment on column ZCGL_RY.lrr
  is '录入人';
comment on column ZCGL_RY.lrrxm
  is '录入人姓名';
comment on column ZCGL_RY.lrsj
  is '录入时间';
comment on column ZCGL_RY.bz
  is '备注';
comment on column ZCGL_RY.role_id
  is '角色id';
-- Create/Recreate primary, unique and foreign key constraints 
alter table ZCGL_RY
  add constraint ZCGL_RY_PK primary key (JH);