import React from 'react'
import './TopRated.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function TopRated() {
  return (
    <div>
        <div className="top-rated">
            <h2>Top Rated</h2>
            <div className="cards">
                <div className="card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1673357586471-0f766a83007c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)" }}>
                    <div className="card-title-top-rated">Title</div>
                    <div className="card-location">location</div>
                    <div className="card-rating">
                    <Rating
                    name="simple-controlled"
                    value="4.5"
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                    </div>
                </div>
                <div className="card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1673357586471-0f766a83007c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)" }}>
                    <div className="card-title-top-rated">Title</div>
                    <div className="card-location">location</div>
                    <div className="card-rating">
                    <Rating
                    name="simple-controlled"
                    value="4.5"
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                    </div>
                </div>
                <div className="card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1673357586471-0f766a83007c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)" }}>
                    <div className="card-title-top-rated">Title</div>
                    <div className="card-location">location</div>
                    <div className="card-rating">
                    <Rating
                    name="simple-controlled"
                    value="4.5"
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                    </div>
                </div>
                <div className="card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1673357586471-0f766a83007c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)" }}>
                    <div className="card-title-top-rated">Title</div>
                    <div className="card-location">location</div>
                    <div className="card-rating">
                    <Rating
                    name="simple-controlled"
                    value="4.5"
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                    </div>
                </div>
                <div className="card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1673357586471-0f766a83007c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)" }}>
                    <div className="card-title-top-rated">Title</div>
                    <div className="card-location">location</div>
                    <div className="card-rating">
                    <Rating
                    name="simple-controlled"
                    value="4.5"
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                    </div>
                </div>
                <div className="card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1673357586471-0f766a83007c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)" }}>
                    <div className="card-title-top-rated">Title</div>
                    <div className="card-location">location</div>
                    <div className="card-rating">
                    <Rating
                    name="simple-controlled"
                    value="4.5"
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                    </div>
                </div>
                <div className="card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1673357586471-0f766a83007c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)" }}>
                    <div className="card-title-top-rated">Title</div>
                    <div className="card-location">location</div>
                    <div className="card-rating">
                    <Rating
                    name="simple-controlled"
                    value="4.5"
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                    </div>
                </div>
                <div className="card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1673357586471-0f766a83007c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)" }}>
                    <div className="card-title-top-rated">Title</div>
                    <div className="card-location">location</div>
                    <div className="card-rating">
                    <Rating
                    name="simple-controlled"
                    value="4.5"
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                    </div>
                </div><div className="card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1673357586471-0f766a83007c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)" }}>
                    <div className="card-title-top-rated">Title</div>
                    <div className="card-location">location</div>
                    <div className="card-rating">
                    <Rating
                    name="simple-controlled"
                    value="4.5"
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                    </div>
                </div><div className="card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1673357586471-0f766a83007c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)" }}>
                    <div className="card-title-top-rated">Title</div>
                    <div className="card-location">location</div>
                    <div className="card-rating">
                    <Rating
                    name="simple-controlled"
                    value="4.5"
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TopRated