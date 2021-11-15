package com.example.employgold.Service;

import com.example.employgold.Dao.AccountDao;
import com.example.employgold.Domain.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private com.example.employgold.Dao.AccountDao accountDao;

    @Override
    public void addAccount(Account account) {
        accountDao.save(account);
    }

    @Override
    public Account getAccountByEmail(String email) {
        return accountDao.getAccountByAccountEmail(email);
    }
}
