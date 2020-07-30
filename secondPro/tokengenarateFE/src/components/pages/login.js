import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { setGtoken } from "../../helpers/helpers";







const useStyles = makeStyles((theme) => ({



    paper: {
        height: 400,
        width: 300,
    },

    containerArea: {
        marginTop: 270,
    },

    userArea: {
        padding: 20,
    },

    userfield: {
        display: "flex",
    },

    passwordArea: {
        padding: 20,
    },

    passwordfield: {
        display: "flex",
    },

    buttonArea: {
        marginTop: 35,
        display: "flex",
        justifyContent: "center",
    },
    registerbutton: {
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
    },
}));

export const Login = () => {
    const history = useHistory();
  //  const historyg = useHistory();
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const classes = useStyles();
    const login = () => {
       const res = setGtoken(username, password);
       res.then((val) => {
           console.log(val)
       })
    }
    
    const goregister =() =>{
        history.push("/register")

    };
    const goGtoken =() =>{
      history.push("/gtoken")

   };
   

    return (

        <Grid container className={classes.containerArea}>
            <Grid item xs={12} >
                <Grid container justify="center" >
                    <Grid item>
                        <Paper className={classes.paper} >
                            <Grid item className={classes.userArea}>
                                <TextField id="standard-basic" label="Username" className={classes.userfield} onChange={(e) => setUsername(e.target.value)} />
                            </Grid>
                            <Grid item className={classes.passwordArea}>
                                <TextField id="standard-basic" type="password" label="Password" className={classes.passwordfield} onChange={(e) => setpassword(e.target.value)} />
                            </Grid>
                            <Grid item className={classes.buttonArea}>
                                <Button variant="contained" color="primary" onClick={goGtoken}>Log In</Button>
                            </Grid>
                            <Grid item className={classes.registerbutton}>
                                <Button variant="contained" color="primary"onClick={goregister} > Register </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}
