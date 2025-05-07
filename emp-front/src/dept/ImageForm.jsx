import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ImageForm = () => {
    let [title, setTitle] = useState("")
    let navigate = useNavigate()
    let form = new FormData();
    const fileChange = (e) => {
        form.append("image", e.target.files[0])
    }
    const submit = () => {
        form.append("title", title)
        axios.post("/dept/imageInsert", form).then((response) => {
            if (response.data > 0) {
                alert("저장 되었슴다")
                // num 가장 최신에 입력된 번호
                navigate("/imageResult", {state:{num:response.data}})
            }else alert("저장 실패")
        }).catch((err) => {
            alert("에러 발생 ", err)
        })
    }
  return (
    <div className='container text-center'>
        <h2 className='text-primary'>이미지 올리기</h2>
        <table className='table table-bordered table-info'>
            <tbody>
                <tr><td>제목</td><td><input type='text' onChange={(e) => {
                    setTitle(e.target.value)
                }} required autoFocus className='form-control'/></td></tr>
                <tr><td>이미지</td><td><input type='file' name='image' required className='form-control'
                    onChange={fileChange}/></td></tr>
                <tr><td colSpan="2"><input type="button" onClick={submit} className='btn btn-success' value="upload"/></td></tr>
            </tbody>
        </table>
    </div>
  )
}

export default ImageForm
