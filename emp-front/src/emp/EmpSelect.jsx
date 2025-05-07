import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import EmpList from './EmpList'
const EmpSelect = () => {
    let navigate = useNavigate()
    const location = useLocation()
    const empno = location.state.empno;
    let [emp, setEmp] = useState({})
    useEffect(() => {
        axios.get('/emp/empSelect?empno='+empno).then((response) => {
            setEmp(response.data)
        }).catch((err) => {
            alert("에러 발생 확인 ",err)
        })
    },[empno])
    const del = () => {
        axios.get('/emp/empDelete?empno='+empno).then((response) => {
            alert('삭제 되었습니다')
            navigate('/empList', {state:{deptno:emp.deptno}})
        })
    }
  return (
    <div className="container text-center">
        <h2 className="text-primary">직원정보 상세</h2>
        <table className="table table-striped table-info">
            <tbody>
            <tr><td>사번</td><td>{emp.empno}</td><td>이름</td><td>{emp.ename}</td></tr>
            <tr><td>업무</td><td>{emp.job}</td><td>관리자</td><td>{emp.mgr}({emp.mgrName})</td></tr>
            <tr><td>입사일</td><td>{emp.hiredate}</td><td>급여</td><td>{emp.sal}</td></tr>
            <tr><td>커미션</td><td>{emp.comm}</td><td>부서코드</td><td>{emp.deptno}({emp.dname})</td></tr>    
            <tr><td colspan="4" className="text-center bg-success-subtle">
                <button onClick={() => {
                    navigate('/empList', {state:{deptno:emp.deptno}})
                }} className="btn btn-info">직원목록</button>
                 <button onClick={() => {
                     navigate('/empUpdateForm', {state:{empno:emp.empno}})
                 }} className="btn btn-warning">수정</button>
                <button onClick={del} className="btn btn-danger">삭제</button></td></tr>
            </tbody>
        </table>
        <EmpList deptno={emp.deptno} onlyTable={true}/>
    </div>
  )
}

export default EmpSelect
