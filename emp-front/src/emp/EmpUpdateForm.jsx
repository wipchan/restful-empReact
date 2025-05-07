import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const EmpUpdateForm = () => {
    const location = useLocation()
    let navigate = useNavigate()
    let empno = location.state.empno
    let [ename, setEname] = useState("")
    let [job, setJob] = useState("")
    let [mgr, setMgr] = useState("")
    let [hiredate, setHiredate] = useState("")
    let [sal, setSal] = useState("")
    let [comm, setComm] = useState("")
    let [deptno, setDeptno] = useState("")
    let [emp, setEmp] = useState({})
    let [empList, setEmpList] = useState([])
    let [deptList, setDeptList] = useState([])
    useEffect(() => {
        axios.get('/emp/empUpdateForm?empno=' + empno).then((response) => {
            setEmp(response.data.emp)
            setEname(response.data.emp.ename)
            setJob(response.data.emp.job)
            setMgr(response.data.emp.mgr)
            setHiredate(response.data.emp.hiredate)
            setSal(response.data.emp.sal)
            setComm(response.data.emp.comm)
            setDeptno(response.data.emp.deptno)
            setDeptList(response.data.deptList)
            setEmpList(response.data.empList)
        }).catch((err) => {
            alert("에러를 확인 ", err)
        })
    }, [empno])
    const submit = () => {
        let body = {empno, ename, job, mgr, hiredate, sal, comm, deptno}
        axios.post('/emp/empUpdate', body).then((response) => {
            if (response.data === 1){
                alert("수정 되었씁니다")
                navigate('/empList', {state:{deptno:deptno}})
            }else alert("수정 실패씀다")
        }).catch((err) => {
            alert("에러 발생 ",err)
        })
    }
    return (
        <div className="container text-center">
            <h2 className="text-primary">직원정보 상세</h2>
                <table className="table table-bordered table-info">
                    <tr><td><span className="form-control">사번</span></td><td>{emp.empno}</td></tr>
                    <tr><td><span className="form-control">이름</span></td>
                        <td><input type="text" name="ename" value={ename} required="required"
                            autoFocus className="form-control" onChange={(e) => {
                                setEname(e.target.value)
                            }}/></td></tr>
                    <tr><td><span className="form-control">업무</span></td>
                        <td><input type="text" name="job" value={job} required="required" className="form-control"
                         onChange={(e) => {
                            setJob(e.target.value)
                        }}/></td></tr>
                    <tr><td><span className="form-control">관리자 사번</span></td>
                        <td><select name="mgr" className="form-select" value={mgr} defaultValue={emp.mgr} onChange={(e) => {
                        setMgr(e.target.value)
                    }}>
                            {empList.map((e,i) => {
                                return(<option value={e.empno} key={i}>
                                    {e.empno}({e.ename})
                                </option>)
                            })}
                            </select></td></tr>
                    <tr><td><span className="form-control">입사일</span></td>
                        <td><input type="date" name="hiredate" required="required" className="form-control" value={hiredate}
                            onChange={(e) => {  setHiredate(e.target.value)  }}/></td></tr>
                    <tr><td><span className="form-control">급여</span></td>
                        <td><input type="number" name="sal" required="required" className="form-control" value={sal}
                            onChange={(e) => {  setSal(e.target.value)  }}/></td></tr>
                    <tr><td><span className="form-control">커미션</span></td><td><input type="number" name="comm" required="required"
                        className="form-control" value={comm} onChange={(e) => {  setComm(e.target.value)  }}/></td></tr>
                    <tr><td><span className="form-control">부서코드</span></td><td><select name="deptno" className="form-select"
                        value={deptno} defaultValue={emp.deptno}
                        onChange={(e) => {  setDeptno(e.target.value)  }}>
                        {
                            deptList.map((dept, i) => {
                                return(
                                    <option value={dept.deptno} key={i}>{dept.deptno}({dept.dname})</option>
                                )
                            })
                        }
                    </select></td></tr>
                    <tr><td colspan="2" className="text-center">
                        <input type="button" value="수정" className="btn btn-warning"
                            onClick={submit}/></td></tr>
                </table>
        </div>
    )
}

export default EmpUpdateForm
