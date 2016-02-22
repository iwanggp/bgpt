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
import static com.soa.service.BaseService.getSession;
import com.soa.util.SystemUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P21011 修改人员信息
 *
 * @author wgp
 */
@Service
public class ModZcglRy extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData acd = getSession(in);
        in.put("lrrxm", acd.get("xm"));
        in.put("lrr", acd.get(SystemUtil.loginRemark));
        update("mod_zcgl_ry", in);//更新zcgl_ry表的信息
        String sfzh = in.getStringValue("sfzmhm");//修改后的身份证号码
        String pwd = sfzh.substring(sfzh.length() - 6, sfzh.length());//默认的密码为身份证后六位（一般都应该是18位的）
        String _pwd;//对原始的密码进行加密后保存
        try {
            _pwd = AESFactory.encryptString(pwd);//对原始的身份证后六位进行加密
        } catch (Exception ex) {
            throw new GlobalException(100002, ex);       //加密算法异常
        }
        in.putStringValue("password", _pwd);
        in.putStringValue("glbm", in.getStringValue("zgbm"));//在岗部门为用户的管理部门
        update("mod_app_user", in);//更新app_user表中的相关信息
    }

}
