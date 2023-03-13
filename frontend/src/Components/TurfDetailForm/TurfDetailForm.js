import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'
import React, { useState } from "react";
import Input from "@mui/material/Input";
import axios from '../../axios'
import './TurfDetailForm.css'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function TurfDetailForm() {
    const navigate = useNavigate()
    const [image, setImage] = useState(null)
    const [place, setPlace] = useState('')
    const [link, setLink] = useState('')
    const [fives,setFives] = useState(false)
    const [sevens, setSevens] = useState(false)
    const [elevens, setElevens] = useState(false)
    const [cricket, setCricket] = useState(false)
    const [parking,setParking] = useState(false)
    const [shower, setShower] = useState(false)
    const [locker, setLocker] = useState(false)
    const [cafe, setCafe] = useState(false)
    const [rest, setRest] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const token = localStorage.getItem('refresh')
    const decode = jwt_decode(token)
    console.log(decode);
    const data = {
      turf:decode.user_id,
      place:place,
      map_link:link,
      fives:fives,
      sevens:sevens,
      image:selectedFile,
      elevens:elevens,
      cricket:cricket,
      parking:parking,
      shower:shower,
      locker:locker,
      cafe:cafe,
      rest:rest,
    }
    const handleFileSelect = (event) => {
        const file = event.target.files[0];

        console.log(file);
        setSelectedFile(file);
        try {
          setPreviewUrl(URL.createObjectURL(file));
        } catch (error) {
          console.error('Error creating object URL: ', error);
        }
      };
    
   const submitDetails = (e)=>{
      e.preventDefault()
      console.log(data);
      axios.post('http://127.0.0.1:8000/turf/add-details/', data,{
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  }).then((response)=>{
    console.log(response);
    if(response.status===201){
      navigate('/login')
    }
  })
  .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
    })
  }

    
  return (
    <div>
        <Typography variant="h5">Add Details of Your Hub</Typography>
        <FormGroup>
      <form>
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          value = {place}
          onChange={(e)=>{setPlace(e.target.value)}}
          label="Place"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          value = {link}
          onChange={(e)=>{setLink(e.target.value)}}
          label="Map Link"
          variant="outlined"
        />
        <br />
        <h5>Logo</h5>
        <br />
        <input type = "file" accept="image/png, image/gif, image/jpeg" onChange={handleFileSelect}/>
        {previewUrl==null?null:<img className='prev-image' src={previewUrl}alt="" srcset="" width="150" height="150"/>}
        <br />
        <br />
        <h5>Availible Courts</h5>
        <FormControlLabel control={<Checkbox onChange={(event)=>{setFives(event.target.checked)}} />} label="5's Football" />
        <FormControlLabel control={<Checkbox onChange={(e)=>{setSevens(e.target.checked)}}/>} label="7's Football" />
        <FormControlLabel control={<Checkbox onChange={(e)=>{setElevens(e.target.checked)}} />} label="11's Football" />
        <FormControlLabel control={<Checkbox onChange={(e)=>{setCricket(e.target.checked)}} />} label="Cricket" />
        <br />
        <br />
        <h5>Availible Facilities</h5>
        <FormControlLabel control={<Checkbox onChange={(event)=>{setCafe(event.target.checked)}} />} label="Cafe" />
        <FormControlLabel control={<Checkbox onChange={(e)=>{setRest(e.target.checked)}}/>} label="Rest Room" />
        <FormControlLabel control={<Checkbox onChange={(e)=>{setLocker(e.target.checked)}} />} label="Locker" />
        <FormControlLabel control={<Checkbox onChange={(e)=>{setParking(e.target.checked)}} />} label="Parking" />
        <FormControlLabel control={<Checkbox onChange={(e)=>{setShower(e.target.checked)}} />} label="Shower" />
        <br />
        <Button variant="contained" onClick={submitDetails} color="primary">
          Submit
        </Button>
      </form>
      </FormGroup>
    </div>
  )
  }

export default TurfDetailForm