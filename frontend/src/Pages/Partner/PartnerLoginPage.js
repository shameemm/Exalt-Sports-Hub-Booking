import React from 'react'
import Grid from '@mui/material/Grid';
import PartnerLogin from '../../Components/PartnerLogin/PartnerLogin'
import PartnerLoginBanner from '../../Components/PartnerLoginBanner/PartnerLoginBanner'
import Head from '../../Components/Head/Head'
function PartnerLoginpage() {
  return (
    <div>
        <Head/>
        <Grid container spacing = {0}>
          <Grid md={6} sm ={12}>
            <PartnerLogin/>
          </Grid>
          <Grid md={6} sm ={12}>
            <PartnerLoginBanner/>
          </Grid>
        </Grid>
    </div>
  )
}

export default PartnerLoginpage