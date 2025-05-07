package com.green.empReact.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.green.empReact.dto.Emp;
import com.green.empReact.mapper.EmpMapper;

@Service
public class EmpServiceImpl implements EmpService{
	@Autowired
	private EmpMapper em;

	@Override
	public List<Emp> empList(int deptno) {
		return em.empList(deptno);
	}
	@Override
	public List<Emp> list() {
		return em.list();
	}
	@Override
	public Emp selectChk(int empno) {
		return em.selectChk(empno);
	}
	@Override
	public int insert(Emp emp) {
		return em.insert(emp);
	}
	@Override
	public int update(Emp emp) {
		return em.update(emp);
	}
	@Override
	public int delete(int empno) {
		return em.delete(empno);
	}
	@Override
	public List<Emp> allEmplist() {
		// TODO Auto-generated method stub
		return em.allEmplist();
	}
}
