/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.zcgl;

import com.soa.service.busi.pl.*;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;

/**
 * S21001
 *
 * @author wgp
 */
@Service
public class CutRoleZcgl extends BaseService {

    private final String[] KEY = new String[]{};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "get_all_role");
        AbstractCommonData session = getSession(in);
//        String glbm_ = session.getStringValue("glbm");
//        System.out.println(glbm_ + "---------<>><><<><><><><<<<>");
//        String glbm = (session.getStringValue("glbm").equals(new String("410100000000")) ? null : glbm_);//如果是支队用户则默认可以查看全部的角色，否则只能查看本部门的
//        Object[] args = new Object[]{in.getStringValue("role_name"), glbm};
        Object[] args = new Object[]{in.getStringValue("role_name")};
        in.putObjectValue("args", args);
        runService("S10001", in, inHead, out, outHead);
    }
}
