package com.example.employgold.Utils;

import org.json.JSONException;
import org.json.JSONObject;


public class StaticMethods {
    public static JSONObject createResponse(int code, String status, Object content, String msg) throws JSONException {
        JSONObject response = new JSONObject();
        response.put("code",code);//HTTP响应码
        response.put("status",status);//fail：响应码为500-599；error：响应码为400-499；success：其他状态码（1xx,2xx,3xx）
        System.out.println(content);
        response.put("content",content);//多条记录使用JSON数组，单条记录使用JSON对象
        response.put("message",msg);//状态为error或fail时，对应的错误信息
        return response;
    }
}
