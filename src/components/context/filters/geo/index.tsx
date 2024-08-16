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
	const [ cityName, setCityName ] = useState<any>("barcelona");
	const mapRef = useRef<any>();
	const [ viewport, setViewport ] = useState(Locations.barcelona);
	const [ tilesProperties, setTilesProperties ] = useState<any>(null);
	const [ currentBasemap, setCurrentBasemap ] = useState("https://basemaps.cartocdn.com/gl/positron-gl-style/style.json");
	const [ activeBasemap, setActiveBasemap ] =  useState(false);

	const mapStyle = !activeBasemap ? "mapbox://styles/mapbox/satellite-v9" : currentBasemap;

	useEffect(() => {
	mapRef.current?.flyTo({
		center: [viewport.longitude, viewport.latitude],
		zoom: viewport.zoom,
		pitch: viewport.pitch,
		bearing: viewport.bearing,
		duration: 4000, 
		essential: true,
	});
	}, [viewport])
	
	return (
		<GeoContext.Provider value={{
			mapRef, viewport, setViewport, Locations, tilesProperties, setTilesProperties,
			cityName, setCityName, 
			activeBasemap, setActiveBasemap,
			currentBasemap, setCurrentBasemap,
			mapStyle
		}}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";