// App imports
import './styles.scss';

// Context imports
import { useGeo } from '../../../context/geo';

// Third party imports
import { NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl';

export const Ctrl = () => {
	const { navControlStyle } = useGeo();
	
	return (
		<>
			<NavigationControl style={navControlStyle}/>
			<GeolocateControl showAccuracyCircle={false} positionOptions= {{enableHighAccuracy: true}}/>
			<FullscreenControl style={{position: "absolute", top: "130px"}}/>
		</>
	)
}

Ctrl.displayName="Ctrl";