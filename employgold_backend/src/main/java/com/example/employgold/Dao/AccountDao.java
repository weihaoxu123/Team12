package com.example.employgold.Dao;

import com.example.employgold.Domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AccountDao extends JpaRepository<Account,Integer> {
    @Query(value = "select account from Account account where account.accountEmail = ?1")
    Account getAccountByAccountEmail(String accountEmail);

}
