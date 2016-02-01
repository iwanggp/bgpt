/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.zcgl;

import com.soa.service.busi.pl.*;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import static com.soa.service.BaseService.getSession;
import com.soa.util.SystemUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P21002 添加角色
 * @author wgp
 */
@Service
public class AddRoleZcgl extends BaseService {

    private final String[] KEY = {"role_name", "角色名称"};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData ses = getSession(in);
        in.putStringValue("create_user", ses.getStringValue(SystemUtil.loginRemark));
        in.putStringValue("role_id", SystemUtil.getSerialNum());
        update("add_role_pl", in);
    }
}
