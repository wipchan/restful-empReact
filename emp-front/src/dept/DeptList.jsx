import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dept from './Dept'

const DeptList = ({ onlyTable }) => {
    let [deptList, setDeptList] = useState([])
    useEffect(() => {
        axios.get('/dept/deptList').then((response) => {
            setDeptList(response.data)
            //console.log(deptList)
        }).catch((err) => {
            alert("Err 확인해 보슈")
            console.log(err)
        })
    }, [])
  return (
    <div className='container text-center'>
        {!onlyTable && <h2 className='text-primary'>부서 목록</h2>}
        <table className='table table-striped'>
            <thead>
                <tr className='table-danger'>
                    <th>부서코드</th><th>부서명</th><th>근무지</th><th>수정</th><th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {
                    deptList.map((dept) => {
                        return (
                            <Dept dept={dept} key={dept.deptno}/>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )}
export default DeptList
