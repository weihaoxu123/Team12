package com.example.employgold.Dao;

import com.example.employgold.Domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountDao extends JpaRepository<Account,Integer> {
}
