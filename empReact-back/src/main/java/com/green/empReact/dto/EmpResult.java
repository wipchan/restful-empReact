package com.green.empReact.dto;

import java.util.List;

import lombok.Data;

@Data
public class EmpResult {
	private int deptno;
	private int result;
	private Emp emp;
	private Dept dept;
	private List<Emp> empList;
	private List<Dept> deptList;
}
