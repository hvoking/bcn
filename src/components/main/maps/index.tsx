// React imports
import { useState } from 'react';

// App imports
import { Controllers } from './controllers';
import { Wrapper } from './wrapper';
import { CustomPopup } from './popup';
import { Styles } from './styles';

// Context imports
import { useMapboxProperties } from '../../context/maps/mapbox';
import { useSwitch } from '../../context/maps/switch';

// Third-party imports
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';

export const Maps = () => {
	const { mapRef, viewport, tilesProperties, setTilesProperties } = useMapboxProperties();
	const { activeSwitch, currentBaseMap } = useSwitch();

	const mapStyle = !activeSwitch ? "mapbox://styles/mapbox/satellite-v9" : currentBaseMap;

	const onClick = (e: any) => {
		const popupCoordinates = e.lngLat;
		const activeLayers = mapRef.current.queryRenderedFeatures(e.point);
		const filteredLayers = activeLayers.filter((item: any) => item.source === "raster-style");

		if (filteredLayers.length > 0) {
			const currentItem = filteredLayers[0];
			const properties = currentItem.properties;
			setTilesProperties({...properties, coordinates: popupCoordinates});	
		}
		else {
			setTilesProperties(null);	
		}
	}

	return (
		<Wrapper>
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={mapStyle}
				onClick={onClick}
			>
				<Controllers/>
				<Styles/>
				<CustomPopup tilesProperties={tilesProperties}/>
			</Map>
		</Wrapper>
	)
}