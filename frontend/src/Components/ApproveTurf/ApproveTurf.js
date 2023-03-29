import React, { useEffect, useState } from 'react'
import './ApproveTurf.css'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import axios from '../../axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ApproveTurf() {
    const [loading,setLoading] = useState(false)
    const [approve,setApprove] = useState(0)
    const [data,setData] = useState([])
    function acceptTurf(id,e){
        console.log(id);
        setApprove(approve-1)
        const data = {
          'approve' : true
        }
        axios.patch(`turf/approve-turf/${id}/`,data).then((res)=>{
          alert("updated")
        }).catch((err)=>{
          alert(err)
        })
    }
    function rejectTurf(id,e){
      console.log(id);
      setApprove(approve+1)
      const data = {
        'approve' : false
      }
      axios.patch(`turf/reject-turf/${id}/`,data).then((res)=>{
        alert("updated")
      }).catch((err)=>{
        alert(err)
      })
  }
    useEffect(()=>{
        axios.get('turf/get-details/').then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
    },[approve])
  return (
    <div className = "approve-turf">
        <h1 >Approve Turf</h1>
        <div className="approve-turf-body">
        <Grid container spacing={8}>
        {data.map((data)=>{
          if(data.approved === true){
            return null
          }
          else{
            return(
              
              <Grid item xs={12} sm={6} md={4} lg={3}>
                {/* <Item> */}
                <div className="approve-card">
                  <div className="approve-card-image">
                    <img src={`http://127.0.0.1:8000/${data.logo}/`} alt="" />
                  </div>
                  <div className="approve-card-title">
                    <h2>{data.turf.name}</h2>
                  </div>
                  <div className="approve-card-body">
                    <p>{data.place}</p>
                  </div>
                  <div className="approve-card-buttons">
                    <Button variant="contained" color="success" onClick={(e)=>acceptTurf(data.id,e)}>Accept</Button>
                    <Button variant="contained" color="error" onClick={(e)=>rejectTurf(data.id,e)}>Reject</Button>
                  </div>
                  </div>
                
                {/* </Item> */}
              </Grid>
              
            )
          }
        })}
        </Grid>
          
          </div>
    </div>
  )
}

export default ApproveTurf