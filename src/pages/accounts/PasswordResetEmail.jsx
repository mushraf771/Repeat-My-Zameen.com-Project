import React from 'react'
import { Box, Grid,Typography,Stack,TextField,Button } from '@mui/material'
import axios from 'axios'
const PasswordResetEmail = () => {
    const SendMail = (e) => {
        // axios.post(``)
}

    return (
        <>
            <Box sx={{flexGrow:'1',marginTop:'100px',padding:'10px'}}>
            <Grid container   sx={{textAlign:'center'}}>
                <Grid item xs={12} sx={{  padding:'20px' }}>
                        <Grid item xs={4} sx={{margin:'auto',paddingTop:'10px'}}>
                        <Stack spacing={2} xs={4}>
                        <Typography variant='h4' sx={{paddingBottom:'10px' }}>Password Reset Email</Typography>
                            <TextField id="outlined-basic" label="Email" variant="outlined" type='email'/>
                                <Button variant="contained" color="success">
                                    Send Link
                                </Button>
                            </Stack>    
                        </Grid>
                    
            </Grid>
                </Grid>
            </Box>
    </>
  )
}

export default PasswordResetEmail