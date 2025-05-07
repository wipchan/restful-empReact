package com.green.empReact.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.green.empReact.dto.Dept;
import com.green.empReact.dto.ImgTest;
import com.green.empReact.service.DeptService;

@RestController
public class DeptController {
	@Autowired
	private DeptService ds;
	
	@GetMapping("/dept/list")
	public String deptList(Model model) {
	    List<Dept> list = ds.deptList();  // 서비스에서 부서 목록 가져오기
	    model.addAttribute("deptList", list);         // 모델에 데이터 담기
	    return "templates.dept.deptList";             // deptList.html 렌더링
	}
	// url이  '/'이거나 '/dept/deptList/' 모두 대응
	@GetMapping({"/","/dept/deptList"})
	public List<Dept> deptList() {
		List<Dept> deptList = ds.deptList();
		return deptList;
	}
	@GetMapping("/dept/deptDelete")
	public int deptDelete(@RequestParam("deptno") int deptno) {
		int result = ds.delete(deptno);
		return result;
	}
	@GetMapping("/dept/deptUpdateForm")
	public Dept deptUpdateForm(@RequestParam("deptno") int deptno) {
		Dept dept = ds.select(deptno);
		return dept;
	}
	@PostMapping("/dept/updateDept")
	public int updateDept(@RequestBody Dept dept) {
		int result = ds.update(dept);
		return result;
	}
	
	@GetMapping("/dept/insertDeptForm")
	public void insertDeptForm() {}
	@PostMapping("/dept/dupChk")
	public String dupChk(@RequestParam("deptno") int deptno) {
		String msg = "";
		Dept dept = ds.select(deptno);
		if (dept == null) msg = "부서코드를 사용할 수 있습니다!!!!";
		else msg = "사용중인 부서코드입니다...";
		return msg;
	}
	@PostMapping("/dept/insertDept")
	public int insertDept(@RequestBody Dept dept){
		int result = 0;
		Dept dept2 = ds.select(dept.getDeptno());
		if (dept2 == null) result = ds.insert(dept); // 아이디 중복
		else result = -1;
		return result;
	}
	@PostMapping("/dept/imageInsert")
	public int imgTest(@ModelAttribute ImgTest it) throws IOException {
		int result = 0;
		String real = "src/main/resources/static/upload";
		String imgName1 = it.getImage().getOriginalFilename();
		UUID uuid = UUID.randomUUID();
		String fileName = uuid+imgName1.substring(imgName1.lastIndexOf("."));
		it.setImageName(fileName);
		FileOutputStream fos = new FileOutputStream(new File(real+"/"+fileName));
		fos.write(it.getImage().getBytes());
		fos.close();
		result = ds.insertIt(it);
		result = ds.selectNum();
		return result;
	}
	@GetMapping("/dept/imageSelect")
	public ImgTest imageSelect(@RequestParam("num") int num) {
		ImgTest it = ds.imageSelect(num);
		return it;
	}
}
