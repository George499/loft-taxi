import React, {useEffect, useRef} from 'react'
import './Map.scss'
import mapboxgl from 'mapbox-gl';
import {Paper, Grid, FormControl, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Map = () => {

    let mapRef = useRef(null)

    useEffect(() => {
        const map = new mapboxgl.Map({
            accessToken: 'pk.eyJ1IjoiZ2VvcmdlaXNhZXYiLCJhIjoiY2s1ejZtM2ppMDZ2NTNncWpjcmgyMnR5NSJ9.fxa6wtBm8oLF6UNVsQeJMQ',            
            container: mapRef.current,
            center: [37.6174943, 55.7504461],
            zoom: 10,
            style: 'mapbox://styles/georgeisaev/ck5z7ctu17adp1inwpu37v147',
            dragRotate: false
        }) 
        return () => {
            map.remove()
        };
    })

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

    const classes = useStyles();

    return (
        <div style={{position: 'relative', zIndex: '-10'}}>
            <div ref={mapRef} className="map-wrapper" ></div>
            <Paper className={classes.mapModal} elevation={1}>
                <Grid container>
                <Grid item xs={12} style={{marginBottom: '30px'}}>
                    <FormControl fullWidth >                       
                        <TextField
                            className={classes.modalInput}   
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
                                                       
                            style={{ margin: 8 }}
                            placeholder="Куда"                            
                            fullWidth       
                            margin="normal"
                            
                        />
                    </FormControl>
                    
                </Grid>
                <Grid item xs={12}>
                    <Button fullWidth variant="contained" color="primary">Вызвать такси</Button>
                </Grid>
                </Grid>
            </Paper> 

        </div>
    )
}

export default Map