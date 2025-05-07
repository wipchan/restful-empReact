import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import DeptList from './dept/DeptList'
import InsertDeptForm from './dept/InsertDeptForm'
import UpdateDeptForm from './dept/UpdateDeptForm'
import EmpList from './emp/EmpList'
import EmpInsertForm from './emp/EmpInsertForm'
import EmpSelect from './emp/EmpSelect'
import EmpUpdateForm from './emp/EmpUpdateForm'
import AllEmpList from './emp/AllEmpList'
import ImageResult from './dept/ImageResult'
import ImageForm from './dept/ImageForm'

const Header = () => {
  return (
    <div className='container'>
      <Link className='btn btn-success' to="/">부서목록</Link>    
      <Link className='btn btn-primary' to="/insertDeptForm/">부서정보입력</Link>
      <Link className='btn btn-warning' to="/allEmpList/">전직원 목록</Link>
      <Link className='btn btn-danger' to="/imageForm/">이미지 올리기</Link>
      <Routes>
        <Route path='/' element={<DeptList/>}></Route>
        <Route path='/insertDeptForm' element={<InsertDeptForm />}></Route>
        <Route path='/updateDeptForm' element={<UpdateDeptForm />}></Route>
        <Route path='/empList' element={<EmpList />}></Route>
        <Route path='/empInsertForm' element={<EmpInsertForm />}></Route>      
        <Route path='/empSelect' element={<EmpSelect />}></Route>
        <Route path='/empUpdateForm' element={<EmpUpdateForm/>}></Route>
        <Route path='/allEmplist' element={<AllEmpList />}></Route>
        <Route path='/imageForm' element={<ImageForm />}></Route>
        <Route path='/imageResult' element={<ImageResult />}></Route>
      </Routes>
    </div>
  )
}

export default Header
