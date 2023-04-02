import axios from 'axios'
import {baseUrl} from './Constant/Constant'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

let authTokens = localStorage.getItem('token')?JSON.parse(localStorage.getItem('token')):null

const instance = axios.create({
    baseURL : baseUrl,
    headers : {Authorization: `Bearer ${authTokens}`}
})

instance.interceptors.request.use(async req =>{

    if(!authTokens){
        authTokens = localStorage.getItem('token')?JSON.parse(localStorage.getItem('token')):null
        req.headers.Authorization = `Bearer ${authTokens.access}`
    }
    console.log("auth",authTokens);
    const user = jwt_decode(authTokens.access)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
    console.log('isExpired : ',isExpired);
    console.log(req)
    if(!isExpired) return req

    const response = await axios.post(`${baseUrl}accounts/api/login/refresh/`,{
        refresh:authTokens.refresh
    })

    localStorage.setItem('token',JSON.stringify(response.data))

    return req
})

export default instance

