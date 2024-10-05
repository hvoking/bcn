// App imports
import { Wrapper } from './wrapper';
import { Layers } from './layers';
import { Navigation } from './nav';
import { Avatar } from './avatar';

// Context imports
import { useMapProperties } from '../context/maps/properties';
import { useMouseEvents } from '../context/maps/events';

// Third-party imports
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';

export const Main = () => {
	const { viewport, mapRef, mapStyle } = useMapProperties();
    const { isDragging, onDragStart, onMouseMove, onDragEnd } = useMouseEvents();

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
                onTouchStart={onDragStart}
                onTouchMove={onMouseMove}
                onTouchEnd={onDragEnd}
                dragPan={!isDragging}
			>	
				<Avatar/>
				<Layers/>
				<Navigation/>
			</Map>
		</Wrapper>
	)
}

Main.displayName="Main";