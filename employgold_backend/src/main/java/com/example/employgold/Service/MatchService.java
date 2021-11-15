package com.example.employgold.Service;

import com.example.employgold.Domain.Match;

import java.util.List;

public interface MatchService {
    List<Match> getByJobSeeker(Integer id);
    List<Match> getByEmployer(Integer id);
}
