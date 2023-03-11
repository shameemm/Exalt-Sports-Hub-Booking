import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'
import React, { useState } from "react";
import Input from "@mui/material/Input";
import './TurfDetailForm.css'

function TurfDetailForm() {
    const [image, setImage] = useState(null)
    const [fives,setFives] = useState(false)
    const [sevens, setSevens] = useState(false)
    const [elevens, setElevens] = useState(false)
    const [cricket, setCricket] = useState(false)
    const [prev,setPrev] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
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
    
  return (
    <div>
        <Typography variant="h5">Add Details of Your Hub</Typography>
        <FormGroup>
      <form>
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="Place"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="Map Link"
          variant="outlined"
        />
        <br />
        <h5>Logo</h5>
        <br />
        <input type = "file" accept="image/png, image/gif, image/jpeg" onChange={handleFileSelect}/>
        <img className='prev-image' src={previewUrl}alt="" srcset="" width="150" height="150"/>
        <br />
        <br />
        <h5>Availible Courts</h5>
        <FormControlLabel control={<Checkbox onChange={(event)=>{setFives(event.target.checked)}} />} label="5's Football" />
        <FormControlLabel control={<Checkbox onChange={(e)=>{setSevens(e.target.checked)}}/>} label="7's Football" />
        <FormControlLabel control={<Checkbox onChange={(e)=>{setElevens(e.target.checked)}} />} label="11's Football" />
        <FormControlLabel control={<Checkbox onChange={(e)=>{setCricket(e.target.checked)}} />} label="Cricket" />
        <br />
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </form>
      </FormGroup>
    </div>
  )
}

export default TurfDetailForm