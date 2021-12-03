package com.example.employgold.Controller;

import com.example.employgold.Domain.Employer;
import com.example.employgold.Domain.JobSeeker;
import com.example.employgold.Service.EmployerService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import static com.example.employgold.Utils.StaticMethods.createResponse;

public class EmployerController {
    @Autowired
    EmployerService employerService;

    @RequestMapping(value = "/api/{id}/employerInformation", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject getInformation(@PathVariable Integer id) throws JSONException {
        System.out.println(id);
        Employer employer  = employerService.findEmployById(id);
        String msg = "get employerInfo";
        JSONObject object = createResponse(200,"success getProductsSelective",employer,msg);
        System.out.println(object);
        return object;
    }
}
