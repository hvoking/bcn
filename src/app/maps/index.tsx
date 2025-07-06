// App imports
import { Layers } from './layers';
import { Controllers } from './controllers';
import { Avatar } from './avatar';

// Context imports
import { useGeo } from 'context/geo';
import { useEvents } from 'context/events';

// Third-party imports
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';

export const Maps = () => {
	const { viewport, mapRef, mapStyle } = useGeo();
    const { isDragging, onDragStart, onMouseMove, onDragEnd } = useEvents();

	return (
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
			<Controllers/>
		</Map>
	)
}

Maps.displayName="Maps";