// React imports
import { useCallback } from 'react';

// Context imports
import { useGeo } from '../../../context/geo';

// Third-party imports
import { Marker } from 'react-map-gl';

export const Pin = () => {
	const { marker, setMarker } = useGeo();

	const onMarkerDrag = useCallback((event: any) => {
		setMarker({
			longitude: event.lngLat.lng,
			latitude: event.lngLat.lat
		});
	}, []);

	return (
			<Marker
		      longitude={marker.longitude}
		      latitude={marker.latitude}
		      anchor="bottom"
		      draggable
		      onDrag={onMarkerDrag}
		    >
		      <img 
			      style={{width: "25px"}} 
			      src={`${process.env.PUBLIC_URL}/static/components/maps/marker.svg`} 
			      alt="marker"
		     />
		    </Marker>
	)
}

Pin.displayName="Pin";