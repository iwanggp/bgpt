-- Add/modify columns
alter table ST_ERR_LOG modify err_code VARCHAR2(11);


-- Create table
create table ST_BGPT_BEAN
(
  service_code VARCHAR2(6) not null,
  bean_name    VARCHAR2(100) not null,
  service_desc VARCHAR2(100),
  is_login     VARCHAR2(1) default 'N' not null,
  module       VARCHAR2(20)
);
-- Add comments to the table
comment on table ST_BGPT_BEAN
  is '服务码';
-- Add comments to the columns
comment on column ST_BGPT_BEAN.service_code
  is '服务码';
comment on column ST_BGPT_BEAN.bean_name
  is 'spring的bean ID 首字母小字';
comment on column ST_BGPT_BEAN.service_desc
  is '说明';
comment on column ST_BGPT_BEAN.is_login
  is '要求的登录状态';
comment on column ST_BGPT_BEAN.module
  is '模块';
-- Create/Recreate primary, unique and foreign key constraints
alter table ST_BGPT_BEAN
  add constraint ST_BGPT_BEAN_PK primary key (SERVICE_CODE);


insert into st_bgpt_bean select * from st_service_bean where service_code in ('S11000','S11001','P11000');
insert into ST_BGPT_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P10001', 'translationServiceImpl', '控制器中的事务管理', 'N', 'st');
insert into ST_BGPT_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S10001', 'cutPageOracle', '分页查询服务', 'N', 'st');
insert into ST_BGPT_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('S10002', 'getTableParamet', '获取系统参数', 'N', 'st');
insert into ST_BGPT_BEAN (service_code, bean_name, service_desc, is_login, module)
values ('P10002', 'clearErrLogTask', '清理异常日志', 'N', 'st');


-- Add/modify columns
alter table APP_MENU add xtbb varchar2(1) default '0' not null;
-- Add comments to the columns
comment on column APP_MENU.xtbb
  is '系统版本，0-老系统，1-新系统';

create or replace view app_limit_v as
select a.jh,
       b."M_ID",
       b."M_NAME",
       b."M_URL",
       b."M_TITLE",
       b."M_TYPE",
       b."M_SUPER",
       b."XTBB"
  from app_user_limit a, app_menu b
 where a.m_id = b.m_id;


