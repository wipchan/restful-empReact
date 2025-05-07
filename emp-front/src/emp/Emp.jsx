import React from 'react'
import { useNavigate } from 'react-router-dom'

const Emp = (props) => {
  let navigate = useNavigate();
  const empSelect = () => {
    navigate('/empSelect', {state:{empno:props.emp.empno, deptno:props.emp.deptno}})
  }
  return (
    <tr className='text-center table-success'>
        <td>{props.emp.empno}</td>
        <td><button className='btn btn-success btn-sm'
        onClick={empSelect}>{props.emp.ename}</button></td>
        <td>{props.emp.job}</td>
        <td>{props.emp.hiredate}</td>
    </tr>        
  )
}

export default Emp
