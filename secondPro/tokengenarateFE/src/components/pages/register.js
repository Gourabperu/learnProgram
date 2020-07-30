import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { setRegister } from "../../helpers/helpers";
import { useHistory } from 'react-router-dom';







const useStyles = makeStyles((theme) => ({



    paper: {
        height: 600,
        width: 450,
    },

    containerArea: {
        marginTop: 270,
    },

    userArea: {
        padding: 30,
    },

    userfield: {
        display: "flex",
    },

    passwordArea: {
        padding: 30,
    },

    passwordfield: {
        display: "flex",
    },

    buttonArea: {

        display: "flex",
        justifyContent: "center",
    },

    nameArea: {
        padding: 30,
    },

    namefield: {
        display: "flex",
    },

    emailArea: {
        padding: 30,
    },

    emailfield: {
        display: "flex",
    },
    backButton: {
        display: 'flex',
        justifyContent:'center',
        marginTop: 30,
    },
}));

export const Register = () => {
    const history = useHistory();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const classes = useStyles();
    const register = () => {
        const res = setRegister(name, email, username, password);
        res.then((val) => {
            console.log(val)
        })
    };

    const goback =() =>{
        history.push("/")

    };

    return (

        <Grid container className={classes.containerArea}>
            <Grid item xs={12} >
                <Grid container justify="center" >
                    <Grid item>
                        <Paper className={classes.paper} >
                            <Grid item className={classes.nameArea}>
                                <TextField id="standard-basic" type="text" label="Name" className={classes.namefield} onChange={(e) => setname(e.target.value)} />
                            </Grid>
                            <Grid item className={classes.emailArea}>
                                <TextField id="standard-basic" type="text" label="Email" className={classes.emailfield} onChange={(e) => setemail(e.target.value)} />
                            </Grid>
                            <Grid item className={classes.userArea}>
                                <TextField id="standard-basic" label="Username" className={classes.userfield} onChange={(e) => setusername(e.target.value)} />
                            </Grid>
                            <Grid item className={classes.passwordArea}>
                                <TextField id="standard-basic" type="password" label="Password" className={classes.passwordfield} onChange={(e) => setpassword(e.target.value)} />
                            </Grid>
                            <Grid item className={classes.buttonArea}>
                                <Button variant="contained" color="primary" onClick={register}> Register</Button>
                            </Grid>
                            <Grid item className={classes.backButton}>
                                <Button variant="contained" color="primary"onClick={goback} > Back </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}
