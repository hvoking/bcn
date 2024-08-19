// App imports
import { Controllers } from './controllers';
import { Wrapper } from './wrapper';
import { Tiles } from './tiles';
import { Filter } from './filter';
import { Pin } from './pin';

// Context imports
import { useGeo } from '../../context/geo';
import { useMaps } from '../../context/maps';

// Third-party imports
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';

export const Maps = () => {
	const { viewport, mapRef, mapStyle, marker, setMarker } = useGeo();
    const { isDragging, onDragStart, onMouseMove, onDragEnd } = useMaps();

	return (
		<Wrapper>
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={mapStyle}
				onMouseDown={onDragStart}
                onMouseMove={onMouseMove}
                onMouseUp={onDragEnd}
                dragPan={!isDragging}
			>
				<Tiles/>
				<Filter/>
				<Controllers/>
				<Pin/>
			</Map>
		</Wrapper>
	)
}