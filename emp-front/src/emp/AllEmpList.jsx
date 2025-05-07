import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllEmpList = () => {
    let [empList, setEmpList] = useState([])
    useEffect(() => {
        axios.get('/emp/allEmplist').then((response) => {
            setEmpList(response.data)            
        }).catch((err) => {
            alert("에러 발생 ", err)
        })
    }, [empList])
    return (
        <div className="container text-center">
            <h2 className="text-dark">전직원 목록</h2>
            <table className="table table-bordered table-striped table-info">
                <thead>
                <tr className="table-warning">
                    <td>사번</td><td>이름</td><td>업무</td><td>입사일</td><td>관리자(이름)</td>
                    <td>급여</td><td>부서명</td><td>근무지</td></tr>
                </thead>                    
                <tbody>
                    {empList.map((emp, i) => {
                        return(
                            <tr key={i}><td>{emp.empno}</td><td>{emp.ename}</td>
                                <td>{emp.job}</td><td>{emp.hiredate}</td><td>{emp.mgr}({emp.mgrName})</td>
                                <td>{emp.sal}</td><td>{emp.dname}</td><td>{emp.loc}</td></tr>
                        )
                    })}
                </tbody>
            </table>
            <a className="btn btn-info" href="/dept/deptList">부서목록</a>
        </div>
    )
}

export default AllEmpList
