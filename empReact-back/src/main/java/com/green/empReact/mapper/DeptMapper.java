package com.green.empReact.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.green.empReact.dto.Dept;
import com.green.empReact.dto.ImgTest;

@Mapper
public interface DeptMapper {
	List<Dept> deptList();
	Dept select(int deptno);
	int insert(Dept dept);
	int update(Dept dept);
	int delete(int deptno);
	int insertIt(ImgTest it);
	int selectNum();
	ImgTest imageSelect(int num);
}
