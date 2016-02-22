/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.zcgl;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import com.soa.service.busi.pl.GetUserAllLimitPl;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * S21015 获取某一个管辖范围的人员信息
 *
 * @author wgp
 */
@Service
public class GetZcglDepRy extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }
    private static final Logger log = Logger.getLogger(GetUserAllLimitPl.class);

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData acd = getSession(in);
        String dabm = in.getStringValue("dabm");
        log.debug(acd.getStringValue("glbm") + "----------->>>>>>>>>>>");
        log.debug(dabm + "--=-=-=-=-=-=-=-=--=");
        if (dabm.equals("0")) {
            in.putStringValue("sql", "get_dep_ry");
            in.putObjectValue("args", new Object[]{acd.getStringValue("glbm"),in.getStringValue("jh"), in.getStringValue("xm")});//如果查询全部，则glbm为当前用户的管理部门   
        } else {
            in.putStringValue("sql", "get_all_zcgl_ry");//否则则调用以前查询人员的bean,由于目前自加载出自己管理部门的管理部门故该方法可行
            in.putObjectValue("args", new Object[]{in.getStringValue("jh"), in.getStringValue("xm"), dabm});
        }
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }

}
