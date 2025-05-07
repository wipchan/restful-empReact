import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const EmpInsertForm = () => {
    const location = useLocation()
    const deptno1 = location.state.deptno
    let navigate = useNavigate()
    let [empno, setEmpno] = useState("")
    let [ename, setEname] = useState("")
    let [job, setJob] = useState("")
    let [mgr, setMgr] = useState("")
    let [hiredate, setHiredate] = useState("")
    let [sal, setSal] = useState("")
    let [comm, setComm] = useState("")
    let [deptno, setDeptno] = useState("")
    let [empList, setEmpList] = useState([])
    let [deptList, setDeptList] = useState([])
    useEffect(() => {
        axios.get('/emp/empInsertForm?deptno=' + deptno1).then((response) => {
            setDeptList(response.data.deptList)
            setEmpList(response.data.empList)
            setDeptno(deptno1)
        }).catch((err) => {
            alert("에러 발생 확인 : ", err)
        })
    }, [deptno1])
        const Chk = () => {
            if(!empno){
                alert("사번을 입력 후 체크 해주세요")
                return;
            }
            axios.post('/emp/Chk?empno='+empno).then((response) => {
                alert(response.data)
            }).catch((err) => {
                alert("에러 발생 확인 : ", err)
            })
        }
        const submit = () => {
            let body = {empno, ename, job, mgr, hiredate, sal, comm, deptno}
            if (!mgr){
                alert("관리자를 선택하세요")
                return
            }
            axios.post('/emp/empInsert', body).then((response) => {
                if(response.data === 1){
                    alert("입력 되었습니다")
                    navigate("/empList", {state:{deptno:deptno}})
                }else if(response.data === 0){
                    alert("입력 실패하였습니다.")
                }else alert("이미 있는 사번 입니다.")
            }).catch((err) => {
                alert("에러 발생", err)
            })
        }
    return (
        <div className="container text-center">
            <h2 className="text-primary">직원정보 입력</h2>
                <table className="table table-bordered table-info">
                    <tbody>
                    <tr><td>사번</td><td><div className="row"><div className="col-auto"><input type="number" name="empno"
                        required="required" autoFocus="autoFocus" min="10" max="9999" className="form-control"
                        onChange={(e) => {setEmpno(e.target.value)}}/></div>
                        <div className="col-auto"><input type="button" value="중복체크" onClick={Chk}
                            className="btn btn-danger btn-sm me-4"/><span id="chk" className="err"></span></div></div></td></tr>
                    <tr><td>이름</td><td><input type="text" name="ename" required="required"
                        className="form-control" onChange={(e) => {
                            setEname(e.target.value)
                        }}/></td></tr>
                    <tr><td>업무</td><td><input type="text" name="job" required="required"
                        className="form-control" onChange={(e) => {
                            setJob(e.target.value)
                        }}/></td></tr>
                    <tr><td>관리자 사번</td><td><select name="mgr" className="form-select" onChange={(e) => {
                            setMgr(e.target.value)
                        }}>{
                            empList.map((emp1, i) => {
                                return(<option value={emp1.empno} key={i}>
                                    {emp1.empno}({emp1.ename})
                                </option>)
                            })
                        }
                        </select></td></tr>
                    <tr><td>입사일</td><td><input type="date" name="hiredate" required="required"
                        className="form-control" onChange={(e) => {
                            setHiredate(e.target.value)
                        }}/></td></tr>
                    <tr><td>급여</td><td><input type="number" name="sal" required="required"
                        className="form-control" onChange={(e) => {
                            setSal(e.target.value)
                        }}/></td></tr>
                    <tr><td>커미션</td><td><input type="number" name="comm" required="required"
                        className="form-control" onChange={(e) => {
                            setComm(e.target.value)
                        }}/></td></tr>
                    <tr><td>부서코드</td><td><select name="deptno" className="form-select"
                        onChange={(e) => { setDeptno(e.target.value) }} value={deptno1}>
                        { deptList.map((dept, i) => {
                            return(
                                <option value={dept.deptno} key={i}>
                                    {dept.dname}({dept.deptno})
                                </option>
                            )
                        })}
                    </select></td></tr>
                    <tr><td colSpan="2" className="text-center">
                        <input type="button" value="확인" className="btn btn-success" onClick={submit}/></td></tr>
                    </tbody>
                </table>
                <button onClick={() => {
                    navigate('/empList', {state:{deptno:deptno1}})
                }} className='btn btn-success'>직원 목록</button>                
        </div>
    )
}

export default EmpInsertForm
