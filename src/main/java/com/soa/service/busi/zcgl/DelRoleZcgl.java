/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.zcgl;

import com.soa.service.busi.pl.*;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P21004 删除角色
 * @author wgp
 */
@Service
public class DelRoleZcgl extends BaseService {

    @Override
    public String[] keys() {
        return null;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData acd = queryData("check_role_user_pl", in);       //校验是否有用户
        if (acd != null && !"0".equals(acd.getStringValue("c"))) {
            throw new GlobalException(100042);        //该角色下存在用户，不能删除
        }
        acd = queryData("check_role_limit_pl", in);
        if (acd != null && !"0".equals(acd.getStringValue("c"))) {
            throw new GlobalException(100043);        //该角色已分配权限，不能删除
        }
//        acd = queryData("check_role_busi_pl", in);
//        if (acd != null && !"0".equals(acd.getStringValue("c"))) {
//            throw new GlobalException(100045);        //该角色存在负责业务，不能删除
//        }
//        acd = queryData("check_role_limit_wx_pl", in);
//        if (acd != null && !"0".equals(acd.getStringValue("c"))) {
//            throw new GlobalException(100044);        //该角色已分配微信访问权限，不能删除
//        }
        update("del_role_pl", in);
    }
}
