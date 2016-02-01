/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.zcgl;

import com.soa.service.busi.pl.*;
import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * P21003 修改角色信息
 *
 * @author wgp
 */
@Service
public class ModRoleZcgl extends BaseService {

    private final String[] KEY = {"role_name", "角色名称", "role_id", "角色id"};

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        update("modify_role_pl", in);
    }
}
