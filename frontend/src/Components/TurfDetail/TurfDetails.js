import React, { useEffect, useState } from 'react'
import './TurfDetail.css'
import jwt_decode from 'jwt-decode'
import axios from '../../axios'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function TurfDetails({open}) {
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem('token'))
    console.log("token",token);
    const [turfName,setTurfName] = useState('')
    const decode = jwt_decode(token.access)
    const [data, setData] = useState([])
    console.log(decode.user_id);
    const id = decode.user_id
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/turf/get-details/${id}/`)
        .then((response)=>{
            console.log("data",response.data);
            setData(response.data)
            setTurfName(response.data.turf.name)
        }).catch((error)=>{
            console.log(error);
            if(error.response.status===401){
                toast.error("You are not Authorized")
                navigate('/partner')
            }
        })
    },[open])
    console.log("data[0]",data);
    // const itemData = [
    //     {
    //       img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    //       title: 'Breakfast',
    //     },
    //     {
    //       img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    //       title: 'Burger',
    //     },
    //     {
    //       img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    //       title: 'Camera',
    //     },
    //     {
    //       img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    //       title: 'Coffee',
    //     },
        
    //   ];
  return (
    <div className="turf-detail">
        <div className="turf-detail-card">
            <div className="detail-card-left">
            {/* <ImageList sx={{ width: 400, height: 400 }} cols={2} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList> */}
    <div className="turf-logo">
                        {data.logo?<img src={`http://localhost:8000/${data.logo}`} alt="" />: <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>}
                    </div>
            </div>
            <div className="detail-card-right">
                
                <div className="turf-address">
                    
                    <div className="turf-name">
                        <h2>{turfName}</h2>
                    </div>
                    <div className="turf-place">
                        <h4>{data.place}</h4>
                    </div>
                </div>
                <div className="turf-courts">
                    <div className="court-details-heading">
                        <h3>Courts Availible</h3>
                        <ul className="court-list">
                            {data.fives?<li>5's Football  {data.price.fives}</li>:""}
                            {data.sevens?<li>7's Football {data.price.sevens}</li>:""}
                            {data.elevens?<li>11's Football {data.price.elevens}</li>:""}
                            {data.cricket?<li>Cricket {data.price.cricket}</li>:""}
                        </ul>
                    </div>
                </div>
            </div>
            
            
        </div>
        <div className="turf-facility-card">
            <h3>Facilities</h3>
            <div className="facility-icons">
                {data.cafe?<img src="/icons/facilities/cafe.png" alt="" />:""}
                {data.first_aid?<img src="/icons/facilities/first-aid.png" alt="" />:""}
                {data.locker?<img src="/icons/facilities/locker.png" alt="" />:""}
                {data.parking?<img src="/icons/facilities/parking.png" alt="" />:""}
                {data.shower?<img src="/icons/facilities/shower.png" alt="" />:""}
            </div>
        </div>
    </div>
  )
}

export default TurfDetails