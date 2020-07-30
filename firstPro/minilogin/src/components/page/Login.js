import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import {setLogin} from "../../helpers/login";
import { useHistory } from 'react-router-dom';





const style = makeStyles(() => ({

    paper: {
        height: 440,
        width: 300,
        marginTop: 200,
        
    },
    username: {
        padding: 20,
    },
    userfield: {
        display: 'flex',
    },
    password: {
        padding: 20,
       
    },
    passfield: {
        display: 'flex',
    },

    button: {
        display: 'flex',
        justifyContent:'center',
        marginTop: 40,
    },
    registerbutton: {
        display: 'flex',
        justifyContent:'center',
        marginTop: 10,
    },
}));

export const Login = () => {
    const pathRegister = useHistory();
    const [user, setUser]=useState('')
    const [pass, setPass]=useState('')
    const classes = style();
    const submit =()=>{
       const res= setLogin(user, pass)
       res.then((val)=>{
           //token: Bearer tkn
            const token = "Bearer " + val.data.token;
            localStorage.setItem("token", token)
        }).catch((err)=>{
            console.log(err)
        })
        }

     const buttonRegister = ()=>{
         pathRegister.push("/register")
     } 
    

    return (
        <Grid container >
            <Grid item xs={12}>
                <Grid container justify="center" >
                    <Paper className={classes.paper} >
                        <Grid item className={classes.username}>
                            <TextField id="standard-basic" type ='text' className={classes.userfield} label="Username" onChange={(e)=> setUser(e.target.value)}/>
                        </Grid>
                        <Grid item className={classes.password}>
                            <TextField id="standard-basic" type ='password'className={classes.passfield} label="Password" onChange={(e)=> setPass(e.target.value)}/>
                        </Grid> 
                        <Grid item className={classes.button}>
                        <Button variant="contained" color="primary" onClick={submit}> LogIn </Button> 
                        </Grid>
                        <Grid item className={classes.registerbutton}>
                        <Button variant="contained" color="primary" onClick={buttonRegister}> Register </Button> 
                        </Grid>
                    </Paper>                  
                </Grid> 
            </Grid>
        </Grid>
    );
}


