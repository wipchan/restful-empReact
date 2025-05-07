import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const InsertDeptForm = () => {
  let [deptno, setDeptno] = useState("")
  let [dname, setDname] = useState("")
  let [loc, setLoc] = useState("")  
  let navigate = useNavigate()
  const dupChk = (e) => {
    axios.post('/dept/dupChk', `deptno=${deptno}`).then((response) => {
      alert(response.data)
    }).catch((err) => {
      alert('중복체크 에러', err)
    })
  }
  const submit = () => {
    let body = {deptno, dname, loc}
    axios.post('/dept/insertDept', body).then((response) => {
      if(response.data === 1){
        alert("입력되었습니다.")
        navigate("/")
      } else if (response.data === 0){
        alert("입력 실패했습니다.")
      } else alert("중복된 데이터 입니다.")
    }).catch((err) => {
      alert("입력 실패 확인 ", err)
    })
  }
  return (
    <div className='container text-center'>
      <h2 className='text-primary'>부서정보입력</h2>
      <form action="/dept/insertDept" name="frm" method="post">
        <table className="table table-bordered table-info">
          <tbody>
          <tr><td>부서코드</td><td><div className="row"><div className="col-auto"><input type="number" name="deptno"
            required="required" autoFocus="autoFocus" min="10" max="99" className="form-control" value={deptno}
              onChange={(e) => {
                setDeptno(e.target.value)
              }}/></div>
            <div className="col-auto"><input type="button" value="중복체크" onClick={dupChk}
              className="btn btn-danger btn-sm" /><span id="dup" className="err"></span></div></div></td></tr>
          <tr><td>부서명</td><td><input type="text" name="dname" required="required" value={dname}
            className="form-control" onChange={(e) => {
              setDname(e.target.value)
            }}/></td></tr>
          <tr><td>근무지</td><td><input type="text" name="loc" required="required" value={loc}
            className="form-control" onChange={(e) => {
              setLoc(e.target.value)
            }}/></td></tr>
          <tr><td colSpan="2" className="text-center">
            <input type="button" value="확인" className="btn btn-success" onClick={submit}/></td></tr>
          </tbody>
        </table>        
      </form>
    </div>
  )
}

export default InsertDeptForm
