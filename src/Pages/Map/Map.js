import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl';
import {Paper, Grid, FormControl, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Map = React.forwardRef((props, ref) => {

    const useStyles = makeStyles({
        mapModal: {
            maxWidth: '20%',
            padding: '44px 60px',
            marginTop: '48px',
            marginBottom: '48px',
            left: '20px',
            position: 'absolute',
            top: '0'
            },
        modalInput: {
            height: 'auto',
            display: 'flex',
            padding: '0',
            
        }
      });

    const [viewport, setViewport] = useState({
        latitude: 55.7504461,
        longitude: 37.6174943,
        zoom: 10,
        width: '100vw',
        height: '100vh'
    })

    const classes = useStyles();

    return (
        <div style={{position: 'relative', zIndex: '-10'}}>
            <ReactMapGL               
            style={{position: 'absolute', top: '0px', bottom: '0px', left: '0px', right: '0px', width: '100%', height: '880px'}}    
            {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/georgeisaev/ck5z7ctu17adp1inwpu37v147"
             onViewportChange={viewport => {
                 setViewport(viewport)
                }}   
            >   
            </ReactMapGL>
            <Paper className={classes.mapModal} elevation={1}>
                <Grid container>
                <Grid item xs={12} style={{marginBottom: '30px'}}>
                    <FormControl fullWidth >                       
                        <TextField
                            className={classes.modalInput}                            
                            id="standard-full-width"  
                            fullWidth                          
                            style={{ margin: 8 }}
                            placeholder="Откуда"  
                            margin="normal"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} style={{marginBottom: '30px'}}>
                <FormControl fullWidth>                       
                        <TextField
                            className={classes.modalInput}                            
                            id="standard-full-width"                            
                            style={{ margin: 8 }}
                            placeholder="Куда"                            
                            fullWidth       
                            margin="normal"
                            
                        />
                    </FormControl>
                    
                </Grid>
                <Grid item xs={12}>
                    <Button ref={ref} fullWidth variant="contained" color="primary">Вызвать такси</Button>
                </Grid>
                </Grid>
            </Paper> 

        </div>
    )
})

export default Map