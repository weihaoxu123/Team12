package com.example.employgold.Controller;

import com.example.employgold.Domain.Employer;
import com.example.employgold.Domain.LearnStyleAssessment;
import com.example.employgold.Domain.WorkGeniusAssessment;
import com.example.employgold.Service.AssessmentService;
import com.example.employgold.Utils.EmployGoldResponse;
import com.example.employgold.Utils.ResponseCode;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
public class AssessmentController {

    @Autowired
    private AssessmentService assessmentService;

    @RequestMapping(value = "/api/{id}/assessment", method = RequestMethod.GET)
    @ResponseBody
    public EmployGoldResponse takeAssessment(@RequestParam Map<String,String> params,@PathVariable Integer id) throws JSONException {
        if (params.get("assessmentType").equals("learnStyleAssessment")) {
            LearnStyleAssessment assessment = new LearnStyleAssessment();
            assessment.setAural(params.get("aural"));
            assessment.setJobSeekerId(id);
            assessment.setKinesthetic(params.get("kinesthetic"));
            assessment.setReadWrite(params.get("readWrite"));
            assessment.setLearningPreference(params.get("learningPreference"));
            assessment.setVisual(params.get("visual"));
            assessmentService.addLearnStyleAssessment(assessment);
            return new EmployGoldResponse().addCodeMessage(ResponseCode.C200.getCode(),"add assessment successfully", ResponseCode.C200.getDesc());
        }
        else if (params.get("assessmentType").equals("workGeniusAssessment")){

            WorkGeniusAssessment assessment = new WorkGeniusAssessment();
            assessment.setGenius(params.get("genius"));
            assessment.setJobSeekerId(id);
            assessment.setCompetency(params.get("competency"));
            assessment.setFrustration(params.get("frustration"));
            assessment.setSkills(params.get("skills"));
            assessmentService.addWorkGeniusAssessment(assessment);

            return new EmployGoldResponse().addCodeMessage(ResponseCode.C200.getCode(),"add assessment successfully", ResponseCode.C200.getDesc());

        }
        else {
            return new EmployGoldResponse().addCodeMessage(ResponseCode.C301.getCode(),"Please check your input again.", ResponseCode.C301.getDesc());

        }
    }
}
