package com.green.empReact.service;

import java.util.List;

import com.green.empReact.dto.Emp;

public interface EmpService {
	List<Emp> empList(int deptno);
	List<Emp> list();
	Emp selectChk(int empno);
	int insert(Emp emp);
	int update(Emp emp);
	int delete(int empno);
	List<Emp> allEmplist();
}