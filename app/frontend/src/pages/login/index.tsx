import React, { ReactNode } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link, Box } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import BlankLayout from 'src/@core/layouts/BlankLayout';

const Login=()=>{

    const paperStyle={padding :20,height:'60vh',width:350, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
   
    return(
        <Grid container justifyContent="center" alignItems="center" >
            <Paper elevation={10} style={paperStyle}>
                <Grid container alignItems='center' justifyContent='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                <Typography href='/' component={Link} >
                 Forgot Password?
                </Typography>
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography >New on our platform?</Typography>
                <Typography href='/register' component={Link}>
                  Create an account
                </Typography>
              </Box>
            </Paper>
        </Grid>
    )
}


Login.guestGuard = true;
Login.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Login;