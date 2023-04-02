import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'
import React, { useCallback, useState } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import axios from '../../axios'
import './TurfDetailForm.css'
import Grid from '@mui/material/Grid';
import Cropper from 'react-easy-crop'
import { Area } from 'react-easy-crop';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';

// require('dotenv').config();



function TurfDetailForm({ handleClose }) {

  const [location, setLocation] = useState(null)
  const [place, setPlace] = useState('')
  const [link, setLink] = useState('')
  const [fives, setFives] = useState(false)
  const [sevens, setSevens] = useState(false)
  const [elevens, setElevens] = useState(false)
  const [cricket, setCricket] = useState(false)
  const [parking, setParking] = useState(false)
  const [shower, setShower] = useState(false)
  const [locker, setLocker] = useState(false)
  const [cafe, setCafe] = useState(false)
  const [rest, setRest] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [position, setPosition] = useState({ lat: 11.033891443915735, lng: 76.08324340090986 });
  const token = localStorage.getItem('refresh')
  const decode = jwt_decode(token)
  console.log(decode);
  const data = {
    turf: decode.user_id,
    place: place,
    lat: position.lat,
    lng: position.lng,
    fives: fives,
    sevens: sevens,
    logo: selectedFile,
    elevens: elevens,
    cricket: cricket,
    parking: parking,
    shower: shower,
    locker: locker,
    cafe: cafe,
    rest: rest,
  }

  // start



  const mapContainerStyle = {
    height: "10vw",
    width: "100%"
  };

  const center = {
    lat: 11.033891443915735,
    lng: 76.08324340090986
  };

  const options = {
    zoom: 12
  };

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setPosition({ lat, lng });

  };
  console.log(data);
  // end

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

  const submitDetails = (e) => {
    if (place.length !== 0 || selectedFile.length != 0) {
      e.preventDefault()
      console.log(data);
      axios.post('http://127.0.0.1:8000/turf/add-details/', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        handleClose()
        console.log(response);
        alert("Succesfully Registered")
        if (response.status === 201) {
        }
      })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        })
    }
    else {
      // alert("Fill the form");
      toast("Fill the form")
    }
  }


  return (
    <div>
      <ToastContainer />
      <Typography variant="h5">Add Details of Your Hub</Typography>
      <FormGroup>
        <form>
          <ToastContainer />
          <TextField
            style={{ width: "100%", margin: "5px" }}
            type="text"
            value={place}
            required
            onChange={(e) => { setPlace(e.target.value)
            }}
            label="Place"
            variant="outlined"
          />
          <br />
          <LoadScript googleMapsApiKey="AIzaSyA4SEdn3yITumvRLV392637DAuVTt8tKaE">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={options.zoom}
              onClick={handleMapClick}
            >
              {position && (
                <Marker position={position} />
              )}
            </GoogleMap>
          </LoadScript>

          <br />
          <h5>Logo</h5>
          <br />

          <input type="file" required accept="image/png, image/gif, image/jpeg" onChange={handleFileSelect} />
          {/*  */}

          {/*  */}
          {previewUrl == null ? null : <img className='prev-image' src={previewUrl} alt="" srcset="" width="150" height="150" />}
          <br />
          <br />
          <h5>Availible Courts</h5>
          <FormControlLabel control={<Checkbox onChange={(event) => { setFives(event.target.checked) }} />} label="5's Football" />
          <FormControlLabel control={<Checkbox onChange={(e) => { setSevens(e.target.checked) }} />} label="7's Football" />
          <FormControlLabel control={<Checkbox onChange={(e) => { setElevens(e.target.checked) }} />} label="11's Football" />
          <FormControlLabel control={<Checkbox onChange={(e) => { setCricket(e.target.checked) }} />} label="Cricket" />
          <br />
          <br />
          <h5>Availible Facilities</h5>
          <FormControlLabel control={<Checkbox onChange={(event) => { setCafe(event.target.checked) }} />} label="Cafe" />
          <FormControlLabel control={<Checkbox onChange={(e) => { setRest(e.target.checked) }} />} label="Rest Room" />
          <FormControlLabel control={<Checkbox onChange={(e) => { setLocker(e.target.checked) }} />} label="Locker" />
          <FormControlLabel control={<Checkbox onChange={(e) => { setParking(e.target.checked) }} />} label="Parking" />
          <FormControlLabel control={<Checkbox onChange={(e) => { setShower(e.target.checked) }} />} label="Shower" />
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