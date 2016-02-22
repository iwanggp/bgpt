/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.zcgl;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.factory.AESFactory;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import com.soa.util.SystemUtil;
import java.util.logging.Level;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P21008 添加资产管理人员信息
 *
 * @author wgp
 */
@Service
public class AddZcglRy extends BaseService {

    public final String[] KEY = {"jh", "警号",
        "xm", "姓名",
        "lxdh", "联系电话",
        "sfzmhm", "身份证号码"
    };
    private final Logger log = LoggerFactory.getLogger(AddZcglRy.class);

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData acd = getSession(in);
        in.put("lrrxm", acd.get("xm"));
        in.put("lrr", acd.get(SystemUtil.loginRemark));
        String jh = in.getStringValue("jh");
        String sfzh = in.getStringValue("sfzmhm");
        String pwd = sfzh.substring(sfzh.length() - 6, sfzh.length());//默认的密码为身份证后六位（一般都应该是18位的）
        String _pwd;//对原始的密码进行加密后保存
        try {
            _pwd = AESFactory.encryptString(pwd);//对原始的身份证后六位进行加密
        } catch (Exception ex) {
            throw new GlobalException(100002, ex);       //加密算法异常
        }
        in.putStringValue("ip", "#");
        in.putStringValue("password", _pwd);
        in.putStringValue("glbm", in.getStringValue("dabm"));//在岗部门为用户的档案部门
        log.debug(in.getStringValue("role_id") + "mimaaaa" + _pwd + "---" + pwd + "------------<><><><><");
        AbstractCommonData _acd = queryData("get_zcgl_jh", jh);//判断数据库中是否已经存在该警号的信息
        AbstractCommonData _acd1 = queryData("get_user_jh", jh);
        if (_acd == null) {
            int flag = update("add_zcgl_ry", in);
            out.putStringValue("flag", flag == 0 ? "0" : "1");//out用于将处理的数据返回
            if (_acd1 == null) {
                update("zdd_zcgl_user", in);//同时将这个用户的信息添加到用户表中
            } else {//如果用户表中已经有该警号的人员，则只修改角色的id即可
                update("update_user_role_id", new Object[]{in.getStringValue("role_id"), jh});
            }
        } else {
            throw new GlobalException(300001);//系统中已经存在该警号信息
        }
    }
}
