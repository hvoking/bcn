// App imports
import './styles.scss';

// Third party imports
import { NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl';

export const Handlers = () => {
	return (
		<>
			<NavigationControl/>
			<GeolocateControl showAccuracyCircle={false} positionOptions= {{enableHighAccuracy: true}}/>
			<FullscreenControl style={{position: "absolute", top: "130px"}}/>
		</>
	)
}

Handlers.displayName="Handlers";