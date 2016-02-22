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
 * P21019 添加人员调度信息
 *
 * @author wgp
 */
@Service
public class AddZcglRydd extends BaseService {

    public final String[] KEY = {"jh", "警号",
        "xm", "姓名",
        "ddbm", "调动后档案部门",
        "ddsy", "调动事由"
    };
    private final Logger log = LoggerFactory.getLogger(AddZcglRydd.class);

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
        in.putStringValue("ddbh", SystemUtil.getSerialNum());
        int result = update("add_zcgl_rydd", in);
        if (result != 0) {//调度表插入成功后，则修改原始人员表的在岗部门
            update("mode_zcgl_ry", new Object[]{in.getStringValue("ddbm"), in.getStringValue("jh")});
        } else {
            throw new GlobalException(999998);//数据库异常
        }
    }
}
