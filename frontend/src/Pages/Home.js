import React, { useEffect, useState } from 'react'
import Head from '../Components/Head/Head'
import Banner from '../Components/Banner/Banner'
import TopRated from '../Components/TopRated/TopRated'
import SearchBook from '../Components/SearchBook/SearchBook'
import axios from 'axios'

function Home() {
    const [user,setUser] = useState([])
    const [phone,setPhone] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/user/')
        .then(res => {
        setUser(res.data)
    })
    },[])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/phone/')
        .then(res => {
        setPhone(res.data)
    })
    },[])
    console.log(user);
    console.log(phone);
    
    
  return (
    <div>
        <Head></Head>
        <Banner/>
        <TopRated/>
        <SearchBook/>
        
        
       
    </div>
  )
}

export default Home