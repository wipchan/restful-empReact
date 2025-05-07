drop sequence img_seq;
drop table imgTest;
create sequence img_seq;
create table imgTest (
	num number(10) primary key,
	title varchar2(50),
	imageName varchar(50)
);