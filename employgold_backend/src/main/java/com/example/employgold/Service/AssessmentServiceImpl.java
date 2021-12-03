package com.example.employgold.Service;

import com.example.employgold.Dao.LearnStyleAssessmentDao;
import com.example.employgold.Dao.WorkGeniusAssessmentDao;
import com.example.employgold.Domain.LearnStyleAssessment;
import com.example.employgold.Domain.WorkGeniusAssessment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssessmentServiceImpl implements AssessmentService {
    @Autowired
    private LearnStyleAssessmentDao learnStyleAssessmentDao;
    @Autowired
    private WorkGeniusAssessmentDao workGeniusAssessmentDao;

    @Override
    public void addLearnStyleAssessment(LearnStyleAssessment assessment) {
        learnStyleAssessmentDao.save(assessment);
    }

    @Override
    public void addWorkGeniusAssessment(WorkGeniusAssessment assessment) {
        workGeniusAssessmentDao.save(assessment);
    }
}
