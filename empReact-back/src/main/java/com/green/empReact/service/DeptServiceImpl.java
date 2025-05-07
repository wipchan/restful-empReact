package com.green.empReact.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.green.empReact.dto.Dept;
import com.green.empReact.dto.ImgTest;
import com.green.empReact.mapper.DeptMapper;

@Service
public class DeptServiceImpl implements DeptService{
	@Autowired
	private DeptMapper dm;
	@Override
	public List<Dept> deptList() {
		return dm.deptList();
	}
	@Override
	public Dept select(int deptno) {
		return dm.select(deptno);
	}
	@Override
	public int insert(Dept dept) {
		return dm.insert(dept);
	}
	@Override
	public int update(Dept dept) {
		return dm.update(dept);
	}
	@Override
	public int delete(int deptno) {
		return dm.delete(deptno);
	}
	@Override
	public int insertIt(ImgTest it) {
		return dm.insertIt(it);
	}
	@Override
	public int selectNum() {
		// TODO Auto-generated method stub
		return dm.selectNum();
	}
	@Override
	public ImgTest imageSelect(int num) {
		return dm.imageSelect(num);
	}
}
