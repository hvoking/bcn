// React imports
import { useState } from 'react';

// App imports
import { MapControllers } from './controllers';
import { CityDropdown } from './dropdown';
import { Basemaps } from './basemaps';
import { CustomPopup } from './popup';
// import { DrawPolygon } from './draw';
import { Styles } from './styles';
import './styles.scss';

// Context imports
import { useMapboxProperties } from '../../context/maps/mapbox';
import { useBaseMaps } from '../../context/maps/basemaps';

// Third-party imports
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';

export const Maps = () => {
	const { mapRef, viewport, tilesProperties, setTilesProperties } = useMapboxProperties();
	const { activeSatelite, currentBaseMap } = useBaseMaps();

	const mapStyle = !activeSatelite ? "mapbox://styles/mapbox/satellite-v9" : currentBaseMap;

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
		<div className="map-container">
			<CityDropdown/>
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={mapStyle}
				onClick={onClick}
			>
				<MapControllers/>
				<Styles/>
				<CustomPopup tilesProperties={tilesProperties}/>
				{/*<DrawPolygon/>*/}
			</Map>
			<Basemaps/>
		</div>
	)
}