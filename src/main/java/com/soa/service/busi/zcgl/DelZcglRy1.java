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
 * P21010 删除警员人员信息
 *
 * @author wgp
 */
@Service
public class DelZcglRy1 extends BaseService {

    public final String[] KEY = {"jh", "警号"
    };
    private final Logger log = LoggerFactory.getLogger(DelZcglRy1.class);

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        update("del_zcgl_ry", in.getStringValue("jh"));//从警员表中删除
//        update("del_app_user", in.getStringValue("jh"));//同时从用户表中也删除该警号的信息

    }
}
