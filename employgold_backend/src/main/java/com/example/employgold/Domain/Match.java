package com.example.employgold.Domain;

import javax.persistence.*;

@Entity
@Table(name = "job_match")
@IdClass(MatchId.class)//组合主键类
public class Match {
    @Id
    @Column(nullable = false)
    protected Integer jobSeekerId;
    @Id
    @Column(nullable = false)
    protected Integer jobId;

    @Column
    private String score;
    @Column
    private Integer employerId;

    public Match(){}
    //不能省略此构造方法
    //否则在将此类创建为数据库中的表时会出错

    public Integer getJobId() {
        return jobId;
    }
    public Integer getJobSeekerId() {
        return jobSeekerId;
    }

    public Integer getEmployerId() {
        return employerId;
    }

    public String getScore() {
        return score;
    }
}