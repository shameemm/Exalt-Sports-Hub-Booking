import React, { useEffect, useState } from 'react'
import './TurfList.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import axios from '../../axios'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function TurfList() {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/turf/get-details/').then((res)=>{
      console.log(res.data);
      setData(res.data)
    })
  },[])
  return (
    <div>
      <Grid container spacing={2}>
        <div className="turf-list-view">
        {data.map((data)=>

          
          <Grid item xs={12}>
            <div className="turf-card">
              <div className="turf-details">
                <div className="turf-details-left">
                  <div className="turf-list-logo">
                    <img src={`http://127.0.0.1:8000${data.logo}`} alt="" />
                  </div>
                  <div className="turf-details-right">

                  </div>
                </div>
              </div>  
              </div>
          </Grid>)}
        </div>
      </Grid>
    </div>
  )
}

export default TurfList