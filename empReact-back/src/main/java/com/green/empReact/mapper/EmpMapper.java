package com.green.empReact.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.green.empReact.dto.Emp;

@Mapper
public interface EmpMapper {
	Emp selectDeptno(int deptno);
	List<Emp> empList(int deptno);
	List<Emp> list();
	Emp selectChk(int empno);
	int insert(Emp emp);
	int update(Emp emp);
	int delete(int empno);
	List<Emp> allEmplist();
}
