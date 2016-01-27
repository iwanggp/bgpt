/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soa.service.busi.pl;

import com.lianzt.commondata.AbstractCommonData;
import com.lianzt.factory.AESFactory;
import com.soa.exception.GlobalException;
import com.soa.service.BaseService;
import com.soa.util.SystemUtil;
import java.util.HashSet;
import java.util.Set;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 用户登录<br />
 * service_code : P11000<br />
 * @author Asus
 */
@Service
public class LoginPl extends BaseService {

    private static final Logger log = Logger.getLogger(LoginPl.class);
    private static final String[] KEYS = new String[]{"username", "警号",
                                                      "password", "密码"};

    @Override
    public String[] keys() {
        return KEYS;
    }

    @Override
    public void execute(AbstractCommonData in, AbstractCommonData inHead,
            AbstractCommonData out, AbstractCommonData outHead) {
        AbstractCommonData user = queryData("get_enabled_user_pl_lzt", in.getStringValue("username"));
        if (user == null || user.isEmpty()) {
            throw new GlobalException(200008);      //用户名或密码错误
        }
        String ip = inHead.getStringValue("_ip");
        boolean ifip = confIp(user, inHead);
        if (ifip == false) {
            throw new GlobalException(200013);        //只能在指定的电脑上登录
        }
//        if (user.getStringValue("ip").indexOf("#") == -1) {
//            if (user.getStringValue("ip").indexOf(inHead.getStringValue("_ip")) == -1) {
//                throw new GlobalException(200013);        //只能在指定的电脑上登录
//            }
//        }
        String psw = null;
        try {
            psw = AESFactory.encryptString(in.getStringValue("password"));
        } catch (Exception e) {
            throw new GlobalException(200002, e);       //加密算法异常
        }
        if (!user.getStringValue("password").equals(psw)) {
            throw new GlobalException(200008);      //用户名或密码错误
        }
        AbstractCommonData session = getSession(in);
        session.putStringValue(SystemUtil.loginRemark, in.getStringValue("username"));
        session.putAll(user);         //把用户信息放入session
        Set<String> limitSet = new HashSet<String>();       //在session中保存用户权限
        limitSet.add("index");      //把不需要权限验证的页面加入session
        limitSet.add("welcome");
        limitSet.add("logout");
        limitSet.add("update_psw");
        limitSet.add("error");
        session.putObjectValue("limit", limitSet);
    }

    /**
     * 验证登录的ip是否有权限
     * @param user //用户信息
     * @param ip
     */
    public boolean confIp(AbstractCommonData user, AbstractCommonData inHead) {
        String ip = inHead.getStringValue("_ip");
        String user_ip = user.getStringValue("ip").trim();
        //String str_ip_s;//中间值
        boolean ifIp = false;
        if (user_ip.indexOf("#") == -1) {//数据库不是#
            if (user_ip.indexOf(ip) == -1) { //  判断 ip不在记录 可能是*
                String[] user_ip_s = user_ip.split(",");  //截取所有ip段
                String[] ip_s = ip.split(".");  //把客户端ip截取  方便对比
                for (int i = 0; i < user_ip_s.length; i++) {
                    String[] user_ipD = user_ip_s[i].split("\\.");  //截取数据库ip的字段
                    StringBuffer str_ip = new StringBuffer();//每个中间ip的值
                    for (int j = 0; j < user_ipD.length; j++) {  //循环数据库每个ip  已.分割
                        if (user_ipD[j].equals("*") && ip_s.length >= j) {  //如果有* 而且长度不超过客户端ip的长度
                            user_ipD[j] = ip_s[j];                    //把*变成客户端对应的字段
                        }
                        str_ip.append(user_ipD[j] + ".");           //把字段拼接
                    }
                    String str = str_ip.substring(0, str_ip.length() - 1); //去掉最后的一个 .
                    if (str.equals(ip)) {  //相等就返回true
                        return true;
                    }
                }
            } else {
                ifIp = true;
            }
        } else {
            ifIp = true;
        }
        return ifIp;
    }
}
