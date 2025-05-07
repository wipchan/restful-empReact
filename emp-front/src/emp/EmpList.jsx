import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Emp from './Emp';
import DeptList from '../dept/DeptList';

const EmpList = ({onlyTable}) => {
    const location = useLocation();
    const deptno = location.state.deptno;
    let [dept, setDept] = useState({});
    let [empList, setEmpList] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        axios.get('/emp/empList?deptno='+deptno).then((response) => {
            setEmpList(response.data.empList)
            setDept(response.data.dept)
        }).catch((err) => {
            alert("에러 확인 : ", err)
        })
    }, [deptno])
    return (
        <div className="container text-center">
        {!onlyTable && <h2 className="text-primary">{dept.dname} 직원 목록</h2>}            
            <table className="table table-striped table-bordered table-info">
                <thead>
                    <tr className="table-warning">
                        <td>사번</td><td>이름</td><td>업무</td><td>입사일</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        empList.map((emp) => {
                            return(
                                <Emp emp={emp} key={emp.empno} />
                            )
                        })
                    }
                </tbody>
            </table>
            {!onlyTable &&  <DeptList onlyTable={true}/>}
            {!onlyTable && <button className='btn btn-warning' onClick={(e) => {
                navigate('/empInsertForm', {state:{deptno:deptno}})
            }}>직원정보 입력</button>}
        </div>
    )
}

export default EmpList
