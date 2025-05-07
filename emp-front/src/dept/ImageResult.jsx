import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ImageResult = () => {
    const location = useLocation()
    let num = location.state.num
    let [imageTest, setImageTest] = useState({})
    useEffect(() => {
        axios.get('/dept/imageSelect?num='+num).then((response) => {
            setImageTest(response.data)            
        })
    },[num])
    return (
        <table>
            <tbody>
                <tr><td>번호</td><td>{num}</td></tr>
                <tr><td>제목</td><td>{imageTest.title}</td></tr>
                <tr><td>사진</td><td>
                    <img src={`/upload/${imageTest.imageName}`} width="300"
                    alt={imageTest.imageName} />    
                </td></tr>
            </tbody>
        </table>
  )
}

export default ImageResult
