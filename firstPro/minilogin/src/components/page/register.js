import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import {register} from '../../helpers/register';
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
    email: {
        padding: 20,
    },
    emailfield: {
        display: 'flex',
    },

    button: {
        display: 'flex',
        justifyContent:'center',
        marginTop: 40,
    },
    backButton: {
        display: 'flex',
        justifyContent:'center',
        marginTop: 20,
    },
}));

export const Register = () => {
    const pathLogin = useHistory();
    const [user, setUser]=useState('')
    const [email, setEmail]=useState('')
    const [pass, setPass]=useState('')
    const classes = style();
    const submit =()=>{
       const res= register(user, email, pass)
       res.then((val)=>{
           console.log(val)  
        }).catch((err)=>{
            console.log(err)
        })
        }
    const buttonLogin =()=>{
        pathLogin.push("/")
    }

    return (
        <Grid container >
            <Grid item xs={12}>
                <Grid container justify="center" >
                    <Paper className={classes.paper} >
                        <Grid item className={classes.username}>
                            <TextField id="standard-basic" type ='text' className={classes.userfield} label="Username" onChange={(e)=> setUser(e.target.value)}/>
                        </Grid>
                        <Grid item className={classes.email}>
                            <TextField id="standard-basic" type ='email' className={classes.emailfield} label="Email" onChange={(e)=> setEmail(e.target.value)}/>
                        </Grid>
                        <Grid item className={classes.password}>
                            <TextField id="standard-basic" type ='password'className={classes.passfield} label="Password" onChange={(e)=> setPass(e.target.value)}/>
                        </Grid> 
                        <Grid item className={classes.button}>
                        <Button variant="contained" color="primary" onClick={submit}> Register </Button> 
                        </Grid>
                        <Grid item className={classes.backButton}>
                        <Button variant="contained" color="primary" onClick={buttonLogin}> Back </Button> 
                        </Grid>
                    </Paper>                  
                </Grid>
            </Grid>
        </Grid>
    );
}


