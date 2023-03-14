import React, { useEffect, useState } from 'react'
import './TurfDetail.css'
import jwt_decode from 'jwt-decode'
import axios from '../../axios'

function TurfDetails() {
    const token = localStorage.getItem('refresh')
    const decode = jwt_decode(token)
    const [data, setData] = useState({})
    console.log(decode);
    const id = decode.user_id
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/turf/get-details/${id}/`)
        .then((response)=>{
            setData(response.data)
        })
    })
    console.log(data);
  return (
    <div className="turf-detail">
        <div className="turf-detail-card">
            <div className="turf-detail-card-image">
                <img src={data.image} alt="asdfg" />
            </div>
            <div className="turf-name">
                {decode.user}
            </div>
        </div>
    </div>
  )
}

export default TurfDetails