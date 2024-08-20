// App imports
import { Ctrl } from './ctrl';
import { Circle } from './circle';
import { Mask } from './mask';
import { Pin } from './pin';
import { Tiles } from './tiles';
import { Wrapper } from './wrapper';

// Context imports
import { useGeo } from '../../context/geo';
import { useMaps } from '../../context/maps';

// Third-party imports
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';

export const Maps = () => {
	const { viewport, mapRef, mapStyle } = useGeo();
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
				<Circle/>
				<Ctrl/>
				<Mask/>
				<Pin/>
			</Map>
		</Wrapper>
	)
}