import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const UpdateDeptForm = () => {
        let navigate = useNavigate()
        let location = useLocation()
        const deptno = location.state.deptno;
        let [dept, setDept] = useState({});
        let [dname, setDname] = useState("");
        let [loc, setLoc] = useState("");
        useEffect(() => {            
            axios.get('/dept/deptUpdateForm?deptno='+deptno).then((response) => {
                setDept(response.data)
                setDname(response.data.dname)
                setLoc(response.data.loc)            
            }).catch((err) => {
                alert("에러 확인 요망", err)
            })
        }, [deptno])
        const submit = (e) => {
            let body = {deptno, dname, loc}
            axios.post('/dept/updateDept', body).then((response) => {
                if(response.data === 1){
                    alert("수정 되었습니다.")
                    navigate("/")
                }else alert("수정 실패하였습니다.")
            }).catch((err) => {
                alert("에러 발생발생발생", err)
            })
        }
        return (
        <div className="container text-center">
            <h2 className="text-primary">부서 목록</h2>
                <table className="table table-bordered table-info">
                    <tbody>
                    <tr><td>부서코드</td><td>{dept.deptno}</td></tr>
                    <tr><td>부서명</td><td><input type="text" name="dname" required="required"
                        className="form-control" value={dname} autoFocus onChange={(e) => {
                            setDname(e.target.value)
                        }}/></td></tr>
                    <tr><td>근무지</td><td><input type="text" name="loc" required="required"
                        className="form-control" value={loc} onChange={(e) => {
                            setLoc(e.target.value)
                        }}/></td></tr>
                    <tr><td colSpan="2" className="text-center">
                        <input type="button" value="수정" className="btn btn-success" onClick={submit}/></td></tr>
                    </tbody>
                </table>            
        </div>
    )
}

export default UpdateDeptForm
