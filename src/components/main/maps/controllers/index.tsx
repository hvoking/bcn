// App imports
import './styles.scss';

// Third party imports
import { NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl';

// Context imports
import { useGeo } from '../../../context/filters/geo';

export const Controllers = () => {
	const { navControlStyle } = useGeo();
	
	return (
		<>
			<NavigationControl style={navControlStyle}/>
			<GeolocateControl showAccuracyCircle={false} positionOptions= {{enableHighAccuracy: true}}/>
			<FullscreenControl style={{position: "absolute", top: "130px"}}/>
		</>
	)
}

Controllers.displayName="Controllers";