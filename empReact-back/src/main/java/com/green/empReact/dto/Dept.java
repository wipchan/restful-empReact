package com.green.empReact.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("dept")
public class Dept {
	private int deptno;
	private String dname;
	private String loc;
}
