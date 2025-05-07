import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dept = (props) => {
  let navigate = useNavigate();
  const updateDeptForm = () => {
    navigate("/updateDeptForm", {state:{deptno:props.dept.deptno}})
  }
  const del = () => {
    axios.get('/dept/deptDelete?deptno='+props.dept.deptno).then((response) => {
      if(response.data === 1){
          alert("삭제 되었습니다.")
          window.location.reload()
      }else alert("삭제 실패했습니다.")        
    })
  } 
  const empList = () => {
    navigate('/empList', {state:{deptno:props.dept.deptno}})
  }
  return (
    <tr className='text-center table-success'>
      <td>{props.dept.deptno}</td>
      <td><span className='btn btn-primary btn-sm' onClick={empList}>{props.dept.dname}</span></td>
      <td>{props.dept.loc}</td>
      <td><span className='btn btn-warning btn-sm' onClick={updateDeptForm}>수정</span></td>
      <td><span className='btn btn-danger btn-sm' onClick={del}>삭제</span></td>
    </tr>
  )
}

export default Dept
