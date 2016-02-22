/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.zcgl;

import com.lianzt.commondata.AbstractCommonData;
import com.soa.service.BaseService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * S21012获取档案部门
 *
 * @author wgp
 */
@Service
public class GetDabm extends BaseService {
    
    @Override
    public String[] keys() {
        return null;
    }
    
    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        in.putStringValue("sql", "get_dabm");
        in.putObjectValue("args", new Object[]{in.getStringValue("glbm"), in.getStringValue("bmqc")});
        in.putIntValue("page_size", in.getIntValue("page_size"));
        runService("S10001", in, inHead, out, outHead);
    }
    
}
