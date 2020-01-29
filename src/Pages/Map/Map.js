import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl';

const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 55.7504461,
        longitude: 37.6174943,
        zoom: 10,
        width: '100vw',
        height: '100vh'
    })

    return (
        <>
            <ReactMapGL             
            {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/georgeisaev/ck5z7ctu17adp1inwpu37v147"
             onViewportChange={viewport => {
                 setViewport(viewport)
                }}   
            >   
            </ReactMapGL>
        </>
    )
}

export default Map