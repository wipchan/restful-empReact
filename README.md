# restful-empReact

React + Spring Boot 기반의 사원 정보 관리 프로젝트입니다.

## 📁 프로젝트 구조
- `emp-front`: React로 구성된 프론트엔드
- `empReact-back`: Spring Boot 기반의 백엔드

## 🚀 실행 방법

## 🛠 사용 기술 스택

### 백엔드(Spring Boot)
```bash
cd empReact-back
./mvnw spring-boot:run
⚠️ MySQL 등 데이터베이스 설정은 application.properties 파일을 확인해주세요.
```
### 프론트엔드 (React)
```bash
cd emp-front
npm install
npm start
```

🔹 **Frontend**  
- React 18+
- Axios
- Bootstrap (또는 원하는 CSS 프레임워크)

🔹 **Backend**  
- Spring Boot 3+
- Spring Data JPA
- MySQL (또는 H2)
- Lombok

## 📌 주요 기능 (예정 포함)
- 사원 목록 조회
- 사원 등록/수정/삭제
