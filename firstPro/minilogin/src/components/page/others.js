import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { FormHelperText } from '@material-ui/core';


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
    },
}));

export const Login = () => {
    const [user, setUser]=useState('')
    const [password, setPassword]=useState('')
    const classes = style();
    const submit =()=>{
        console.log(user, password)
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
                            <TextField id="standard-basic" type ='password'className={classes.passfield} label="Password" onChange={(e)=> setPassword(e.target.value)}/>
                        </Grid> 
                        <Grid item className={classes.button}>
                        <Button variant="contained" color="primary" onClick={submit}> Log In </Button> 
                        </Grid>
                    </Paper>                  
                </Grid>
            </Grid>
        </Grid>
    );
}

