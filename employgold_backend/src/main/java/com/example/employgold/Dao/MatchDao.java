package com.example.employgold.Dao;

import com.example.employgold.Domain.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MatchDao extends JpaRepository<Match, Integer> {
    @Query(value = "select match from Match match where match.jobSeekerId = ?1")
    List<Match> getMatchByCandidate(Integer id);

    @Query(value = "select match from Match match where match.jobId = ?1")
    List<Match> getMatchByEmployer(Integer id);
}
