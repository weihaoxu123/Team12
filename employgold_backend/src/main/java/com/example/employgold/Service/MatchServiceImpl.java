package com.example.employgold.Service;

import com.example.employgold.Dao.MatchDao;
import com.example.employgold.Domain.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchServiceImpl implements MatchService{
    @Autowired
    MatchDao matchDao;
    @Override
    public List<Match> getByJobSeeker(Integer id) {
        return matchDao.getMatchByCandidate(id);
    }

    @Override
    public List<Match> getByEmployer(Integer id) {
        return matchDao.getMatchByEmployer(id);
    }
}
