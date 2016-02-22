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
 * P21021 删除人员调度信息 同时更新人员表的在岗部门和人员状态为在岗
 *
 * @author wgp
 */
@Service
public class DelZcglRydd extends BaseService {

    public final String[] KEY = {"jh", "警号",
        "ddbh", "调动编号",
        "zgbm", "原先的在岗部门"
    };
    private final Logger log = LoggerFactory.getLogger(DelZcglRydd.class);

    @Override
    public String[] keys() {
        return KEY;
    }

    @Override
    @Transactional
    public void execute(AbstractCommonData in, AbstractCommonData inHead, AbstractCommonData out, AbstractCommonData outHead) {
        int result = update("del_zcgl_rydd", in.getStringValue("ddbh"));
        if (result != 0) {//如果删除成功则修改人员信息的在岗部门和状态
            update("mod_zcgl_ry_dd", new Object[]{in.getStringValue("zgbm"), in.getStringValue("jh")});
        } else {
            throw new GlobalException(999998);//数据库异常
        }
    }
}
