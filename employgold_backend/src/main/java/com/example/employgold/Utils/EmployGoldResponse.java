package com.example.employgold.Utils;

import lombok.Data;

import java.util.HashMap;


@Data
public class EmployGoldResponse extends HashMap<String, Object> {
    private static final long serialVersionUID = -8713837118340960775L;

    public EmployGoldResponse message(String message) {
        this.put("message", message);
        return this;
    }

    public EmployGoldResponse code(String code) {
        this.put("code", code);
        return this;
    }

    public EmployGoldResponse status(String status) {
        this.put("status", status);
        return this;
    }

    public EmployGoldResponse data(Object data) {
        this.put("data", data);
        return this;
    }

    @Override
    public EmployGoldResponse put(String key, Object value) {
        super.put(key, value);
        return this;
    }

    public EmployGoldResponse addCodeMessage(Integer code,String message,String status,Object data) {
        this.put("code", code);
        this.put("message", message);
        this.put("status", status);
        this.put("data", data);
        return this;
    }

    public EmployGoldResponse addCodeMessage(Integer code,String message,String status) {
        this.put("code", code);
        this.put("message", message);
        this.put("status", status);
        return this;
    }
}
