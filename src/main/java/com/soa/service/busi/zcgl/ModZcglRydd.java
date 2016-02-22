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
 * P21022 修改调度信息
 *
 * @author wgp
 */
@Service
public class ModZcglRydd extends BaseService {

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
        in.putStringValue("ddbh", in.getStringValue("ddbh"));
        String ddzt = in.getStringValue("ddzt");//获得人员的调度状态，判断如何修改为返岗则相应的人员表也要相应的更改
        int result = update("mod_zcgl_rydd", in);//更新人员调动表的信息
        if (result != 0) {//调度表更新成功后，则修改原始人员表的在岗部门
            if (ddzt.equals("1")) {
                update("mode_zcgl_ry", new Object[]{in.getStringValue("ddbm"), in.getStringValue("jh")});
            } else {
                update("mode_zcgl_ry_", new Object[]{in.getStringValue("ddbm"), in.getStringValue("jh")});
            }
        } else {
            throw new GlobalException(999998);//数据库异常
        }
    }

}
