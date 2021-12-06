package com.example.employgold.Service;

import com.example.employgold.Domain.LearnStyleAssessment;
import com.example.employgold.Domain.WorkGeniusAssessment;

public interface AssessmentService {

    void addLearnStyleAssessment(LearnStyleAssessment assessment);
    void addWorkGeniusAssessment(WorkGeniusAssessment assessment);
}
