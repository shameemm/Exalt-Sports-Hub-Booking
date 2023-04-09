import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

import { ToastContainer, toast } from 'react-toastify';

import Button from '@mui/material/Button';
import axios from '../../axios'


function UserTable() {
    const [count,setCount] = useState(0)
    const [rows, setRows] = React.useState([]);
    useEffect(()=>{
        axios.get('admins/user-details/',).then((res)=>{
            console.log(res.data);
            setRows(res.data)
        })
    },[count])
    const handleBlockClick = (id) =>{
        console.log(id);
        axios.patch(`admins/user-block/${id}/`,).then((res)=>{
            toast("User is blocked")
            setCount(count+1)
            
            
            console.log(res.data);
        })
    }
    const handleUnBlockClick = (id) =>{
        console.log(id);
        axios.patch(`admins/user-unblock/${id}/`,).then((res)=>{
            toast("User is Unblocked")
            setCount(count-1)
            
            console.log(res.data);
        })
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: "User's name", width: 130 },
        { field: 'email', headerName: 'Email', width: 300 },
        {
          field: 'phone',
          headerName: 'Phone number',
          type: 'number',
          width: 300,
        },{
            field: 'is',
            headerName: 'Block',
            width: 120,
            renderCell: (params) => {
                const row = params.row
                if(row.is_active){
                    return(
                        <Button onClick={()=>handleBlockClick(row.id)}>Block</Button>
                    )
                } else {
                    return <Button onClick={()=>handleUnBlockClick(row.id)}>Unblock</Button>
                }
            }
          },
        
      ];
  return (
    <div style={{ height: 400, width: '100vw', margin:' auto 5rem' }}>
        <ToastContainer/>
        <h1>User Details</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default UserTable