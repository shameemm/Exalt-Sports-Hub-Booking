import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../axios'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ViewTurf() {
    const [data,setData] = useState([])
    const [turfName, setTurfName] = useState()
    const {id} = useParams()
    console.log(id);
    useEffect(()=>{
        axios.get(`turf/view-turf/${id}`).then((res)=>{
            console.log(res.data);
            setTurfName(res.data.turf.name)
            setData(res.data)
        })
    },[])
    console.log("data",data);
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
    </ImageList>  */}
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
                             {data.fives?<li>5's Football</li>:""}
                             {data.sevens?<li>7's Football</li>:""}
                             {data.elevens?<li>11's Football</li>:""}
                             {data.cricket?<li>Cricket</li>:""}
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

export default ViewTurf