// App imports
import { Controllers } from './controllers';
import { Wrapper } from './wrapper';
import { CustomPopup } from './popup';
import { Tiles } from './tiles';
import { CircleLayer } from './circle';

// Context imports
import { useGeo } from '../../context/filters/geo';

// Third-party imports
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';

export const Maps = () => {
	const { mapStyle, mapRef, viewport, tilesProperties, setTilesProperties } = useGeo();

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
				<CircleLayer/>
				<Controllers/>
				<Tiles/>
				<CustomPopup tilesProperties={tilesProperties}/>
			</Map>
		</Wrapper>
	)
}