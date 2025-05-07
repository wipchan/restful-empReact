package com.green.empReact.service;

import java.util.List;

import com.green.empReact.dto.Dept;
import com.green.empReact.dto.ImgTest;

public interface DeptService {
	List<Dept> deptList();
	Dept select(int deptno);
	int insert(Dept dept);
	int update(Dept dept);
	int delete(int deptno);
	int insertIt(ImgTest it);
	int selectNum();
	ImgTest imageSelect(int num);
}
