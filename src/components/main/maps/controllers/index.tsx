// Third party imports
import { NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl';

// Context imports
import { useMapboxProperties } from '../../../context/maps/mapbox';

export const MapControllers = () => {
	const { navControlStyle } = useMapboxProperties();
	
	return (
		<>
			<NavigationControl style={navControlStyle}/>
			<GeolocateControl showAccuracyCircle={false} positionOptions= {{enableHighAccuracy: true}}/>
			<FullscreenControl style={{position: "absolute", top: "130px"}}/>
		</>
	)
}

MapControllers.displayName="MapControllers";