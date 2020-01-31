import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl';
import {Paper, Grid, FormControl, Input, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Map = () => {

    const useStyles = makeStyles({
        mapModal: {
            maxWidth: '30%',
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
            minWidth: '384px'
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
            {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/georgeisaev/ck5z7ctu17adp1inwpu37v147"
             onViewportChange={viewport => {
                 setViewport(viewport)
                }}   
            >   
            </ReactMapGL>
            <Paper className={classes.mapModal} elevation={1} rounded={true}>
                <Grid container="true">
                <Grid item xs={12}>
                    <FormControl fullWidth="true">
                        <Input type="text" className={classes.modalInput}>
                            <Typography variant='body1' component="p" align="left">Откуда</Typography>
                        </Input>
                        
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Input></Input>
                </Grid>
                <Grid item xs={12}></Grid>
                </Grid>
            </Paper> 

        </div>
    )
}

export default Map