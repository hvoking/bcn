// React imports
import { useState, useEffect, useRef, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';

const GeoContext: React.Context<any> = createContext(null);

export const useGeo = () => {
	return (
		useContext(GeoContext)
	)
}

export const GeoProvider = ({children}: any) => {
	const mapRef = useRef<any>();

	const [ cityName, setCityName ] = useState<any>("barcelona");
	const [ viewport, setViewport ] = useState(Locations.barcelona);
	
	const [ mapStyle, setMapStyle ] = useState("mapbox://styles/mapbox/light-v11");
	const [ activeBasemap, setActiveBasemap ] =  useState(false);

	const [ marker, setMarker ] = useState({ 
		latitude: viewport.latitude, 
		longitude: viewport.longitude 
	});

	useEffect(() => {
		mapRef.current?.flyTo({
			center: [viewport.longitude, viewport.latitude],
			zoom: viewport.zoom,
			pitch: viewport.pitch,
			bearing: viewport.bearing,
			duration: 4000, 
			essential: true,
		});
	}, [viewport]);
	
	return (
		<GeoContext.Provider value={{
			cityName, setCityName, 
			mapRef, Locations, 
			viewport, setViewport, 
			activeBasemap, setActiveBasemap,
			mapStyle, setMapStyle,
			marker, setMarker
		}}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";