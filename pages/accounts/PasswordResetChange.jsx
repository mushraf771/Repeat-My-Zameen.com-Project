import React from 'react'
import { Box, Grid,Typography,Stack,TextField,Button } from '@mui/material'
const PasswordResetChange = () => {
    return (
        <>
            <Box sx={{flexGrow:'1',marginTop:'100px',padding:'10px'}}>
            <Grid container   sx={{textAlign:'center'}}>
                <Grid item xs={12} sx={{  padding:'20px' }}>
                        <Grid item xs={4} sx={{margin:'auto',paddingTop:'10px'}}>
                        <Stack spacing={2} xs={4}>
                        <Typography variant='h4' sx={{paddingBottom:'10px' }}>Change Password</Typography>
                            <TextField id="outlined-basic" label="Password" variant="outlined" type='password'/>
                            <TextField id="outlined-basic" label="Re-Type Password" variant="outlined" type='password'/>
                                <Button variant="contained" color="success">
                                    Change Password
                                </Button>
                            </Stack>    
                        </Grid>
                    
            </Grid>
                </Grid>
            </Box>
    </>
  )
}

export default PasswordResetChange