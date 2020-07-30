import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {setGtoken} from "../../helpers/helpers";
//import { useHistory } from 'react-router-dom';







const useStyles = makeStyles((theme) => ({



    paper: {
        height: 400,
        width: 300,
    },

    containerArea: {
        marginTop: 270,
    },

    gArea: {
        marginTop:55,
        padding: 20,
    },

    gfield: {
        display: "flex",
    },

    buttonArea: {
        marginTop:60,
        display: "flex",
        justifyContent:"center",
    },

}));

export const GenerateToken = () => {
    const [ gtoken, setgtoken ] = useState("");
    
    const classes = useStyles();
    const generatetoken =()=>{
        const res = setGtoken(gtoken);
        res.then((val)=>{
            console.log(val)
        })
    };



    return (

        <Grid container className={classes.containerArea}>
            <Grid item xs={12} >
                <Grid container justify="center" >
                    <Grid item>
                        <Paper className={classes.paper} >
                            <Grid item className={classes.gArea}>
                                <TextField id="standard-basic" label="Collect your token" className={classes.gfield} onChange={(e)=> setgtoken(e.target.value)} />
                            </Grid>
                            <Grid item className={classes.buttonArea}>
                                <Button variant="contained" color="primary"onClick={generatetoken}>Genarate</Button>
                            </Grid>

                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
            );
}
