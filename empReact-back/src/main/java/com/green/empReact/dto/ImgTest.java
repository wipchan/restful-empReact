package com.green.empReact.dto;

import org.apache.ibatis.type.Alias;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
@Alias("it")
public class ImgTest {
	private int num;
	private String title;
	private String imageName;
	private MultipartFile image;
}
