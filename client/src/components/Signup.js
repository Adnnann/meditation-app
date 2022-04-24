import React, {useEffect, useState} from "react"
import Card from '@material-ui/core/Card'
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Icon from "@material-ui/core/Icon"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { useSelector, useDispatch } from 'react-redux';
// import { getUser, 
//         createUser, 
//         cleanRegisteredUserData,
//         getCloseAccountData,
//         cleanStore} from "../features/usersSlice"
import { useNavigate } from "react-router"

const useStyles = makeStyles(theme=>({
    container: {
        backgroundColor:'#a2c3c8',
        bottom:'0',
        top:'0',
        left:'0',
        right:'0',
        overflow:'none'
    },
    card: {
        borderStyle:'none',
        maxWidth: 620,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2),
        backgroundColor:'#a2c3c8',
        marginBottom:'25%',
        [theme.breakpoints.only('md')]:{
            marginBottom:'12%',
        },
        [theme.breakpoints.only('xs')]:{
            marginBottom:'48%',
        }
    },
    error:{
        verticalAlign:'middle',
        fontSize:"18px"
    },
    tittle:{
        marginTop:theme.spacing(2),
        color: theme.palette.openTitle
    },
    textField:{
        marginLeft: theme.spacing(1),
        marginRight:theme.spacing(1),
        width:300
    },
    submit:{
        margin: 'auto',
        textTransform:'none',
        backgroundColor:'lightblue',
        color:'black'
    },
    hasAccount:{
        margin: '0 auto',
        marginBottom: theme.spacing(1)
    },
    signin:{
        margin: 'auto',
        marginBottom: theme.spacing(1),
    },


}))
const Signup = () =>{
    const classes = useStyles()
    const dispatch = useDispatch()
    //const userData = useSelector(getUser)
    const navigate = useNavigate()
    //const closeAccountData = useSelector(getCloseAccountData)
    const [values, setValues] = useState({
        firstName:'',
        lastName:'',
        nickname:'',
        password:'',
        email:'',
        confirmationPassword: '',
        open:false,
        error:''
    })

    // useEffect(()=>{
    //     if(closeAccountData.hasOwnProperty('message') || closeAccountData.hasOwnProperty('error') ){
    //         dispatch(cleanStore())
    //     }
    // },[closeAccountData.message, closeAccountData.error])
  
    const handleChange = name => event =>{
        setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = () => {
        const user = {
            firstName: values.firstName || undefined,
            lastName: values.lastName || undefined,
            nickname: values.nickname || undefined,
            email: values.email || undefined,
            password: values.password || undefined,
            confirmationPassword: values.confirmationPassword || undefined  
        }

        
        if(!values.confirmationPassword || values.confirmationPassword === ''){
            setValues({...values, error: 'Please repeat your password'})
            return
        }else if(values.password !== values.confirmationPassword){
            setValues({...values, error: 'Password do not match'})
            return
        }else{
            setValues({...values, error: ''})
        }

        //dispatch(createUser(user))
       
        // if(userData.hasOwnProperty('message')){
        //     setValues({...values, error: '', open:true})
        // }
    }
    const redirectTosignin = () =>{
        navigate('/')
        //dispatch(cleanRegisteredUserData())
    }
    return(
        <Grid container className={classes.container}>
            <Box className={classes.card}>
                <CardContent>
                    <Typography variant='h6' className={classes.tittle}>Sign Up</Typography>

                    <TextField id="usernamName" placeholder="First Name" className={classes.textField}
                    value={values.firstName} onChange={handleChange('username')} margin="normal" />
                    <br />


                    <TextField id="email" type='email' placeholder="Email" className={classes.textField}
                    value={values.email} onChange={handleChange('email')} margin="normal" />
                    <br />

                    <TextField id="password" type='password' placeholder="Password" className={classes.textField}
                    value={values.password} onChange={handleChange('password')} margin="normal" />

                    <br />

                    {/* {
                    values.error ? (
                        <Typography component='p' color='error'>
                            <Icon color='error' className={classes.error}></Icon>
                            {values.error}
                        </Typography> 
                    ) 
                : userData.hasOwnProperty('error') && (
                        <Typography component='p' color='error'>
                            <Icon color='error' className={classes.error}></Icon>
                            {userData.error.split(':')[2] ? userData.error.split(':')[2] : userData.error}
                        </Typography> 
                    ) 
                } */}

                </CardContent>

            <CardActions>
                <Button variant="contained" onClick={clickSubmit}
                className={classes.submit}>Sign up</Button>
            </CardActions>

            <CardActions>

            <Typography component='p' className={classes.hasAccount}>
                    or
                </Typography>
            </CardActions>

            <CardActions>
                

            <Button className={classes.submit} color='primary' variant="contained" onClick={clickSubmit}>
                    Sign in with Facebook
                </Button>
            </CardActions>

            </Box>

            {/* <Dialog open={userData.hasOwnProperty('message') ? true : false}>
                <DialogTitle>New Account</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        New account successfuly created.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                        <Button color="primary" autoFocus="autoFocus" onClick={redirectTosignin}>Sign In</Button>
                </DialogActions>
            </Dialog> */}
        </Grid>
    )
}

export default Signup