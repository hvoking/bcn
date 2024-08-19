// App imports
import { Controllers } from './controllers';
import { Wrapper } from './wrapper';
import { CustomPopup } from './popup';
import { Tiles } from './tiles';
import { Circle } from './circle';
import { Mask } from './mask';
import { Pin } from './pin';

// Context imports
import { useTiles } from '../../context/tiles';
import { useGeo } from '../../context/geo';

// Third-party imports
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';

export const Maps = () => {
	const { onClick } = useTiles();
	const { viewport, mapRef, mapStyle } = useGeo();

	return (
		<Wrapper>
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={mapStyle}
				onClick={onClick}
			>
				<Tiles/>
				{/*<Circle/>*/}
				<Mask/>
				<CustomPopup/>
				<Controllers/>
				<Pin/>
			</Map>
		</Wrapper>
	)
}