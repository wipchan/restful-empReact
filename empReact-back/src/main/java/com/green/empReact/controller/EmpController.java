package com.green.empReact.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.green.empReact.dto.Dept;
import com.green.empReact.dto.Emp;
import com.green.empReact.dto.EmpResult;
import com.green.empReact.service.DeptService;
import com.green.empReact.service.EmpService;

@RestController
public class EmpController {
	@Autowired
	private DeptService ds;
	@Autowired
	private EmpService es;
	@GetMapping("/emp/allEmplist")
	public List<Emp> allEmplist() {
		List<Emp> empList = es.allEmplist();
		return empList;
	}
	@GetMapping("/emp/empDelete")
	public int empDelete(@RequestParam("empno") int empno) {
		int result = es.delete(empno);
		return result;

	}
	@PostMapping("/emp/empUpdate")
	public int empUpdate(@RequestBody Emp emp) {
		int result = es.update(emp);
		return result;
	}
	@GetMapping("/emp/empUpdateForm")
	public EmpResult empUpdateForm(@RequestParam("empno") int empno) {		
		Emp emp = es.selectChk(empno);
		List<Dept> deptList = ds.deptList();
		List<Emp> empList = es.list();
		EmpResult er = new EmpResult();
		er.setEmp(emp);
		er.setDeptList(deptList);
		er.setEmpList(empList);
		return er;
	}
	@GetMapping("/emp/empSelect")
	public Emp empSelect(@RequestParam("empno") int empno){
		Emp emp = es.selectChk(empno);
		return emp;
	}
	@PostMapping("/emp/empInsert")
	public int empInsert(@RequestBody Emp emp) {
		int result = 0;
		Emp emp2 = es.selectChk(emp.getEmpno());
		if (emp2 == null) result = es.insert(emp);
		else result = -1; // 중복된 사번
		return result;
	}
	@PostMapping("/emp/Chk")
	public String Chk(@RequestParam("empno") int empno) {
		String msg = "";
		Emp emp = es.selectChk(empno);
		if (emp == null) msg = "사용가능한 사번 입니다. !!";
		else msg = "중복된 사번 입니다. ㅜㅜ";
		return msg;
	}
	@GetMapping("/emp/empInsertForm")
	public EmpResult empInsertForm(@RequestParam("deptno") int deptno) {
		List<Dept> deptList = ds.deptList();
		List<Emp> empList = es.list();
		EmpResult er = new EmpResult();
		er.setEmpList(empList);
		er.setDeptList(deptList);
		er.setDeptno(deptno);
		return er;
	}
	@GetMapping("/emp/empList")
	public EmpResult empList(@RequestParam("deptno") int deptno) {
		Dept dept = ds.select(deptno);
		List<Emp> empList = es.empList(deptno);
		EmpResult er = new EmpResult();
		er.setDept(dept);
		er.setEmpList(empList);
		return er;
	}
}