// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useGeo } from '../geo';
import { useCircle } from '../circle';

const TilesContext: React.Context<any> = createContext(null)

export const useTiles = () => {
	return (
		useContext(TilesContext)
	)
}

export const TilesProvider = ({children}: any) => {
	const { mapRef, marker } = useGeo();
	const { circleGeometry } = useCircle();

	const [ tilesProperties, setTilesProperties ] = useState<any>(null);
	const [ withinProperties, setWithinProperties ] = useState<any>(null);

	// useEffect(() => {
	// 	const withinLayers = mapRef.current && mapRef.current.queryRenderedFeatures(circleGeometry);
	// 	const filteredWithinLayers = mapRef.current && withinLayers.filter((item: any) => item.source === "raster-style");
	// 	const featuresArray = mapRef.current && filteredWithinLayers.reduce((total: any, item: any) => {
	// 		total.push(item.geometry);
	// 		return total
	// 	}, [])
	// 	mapRef.current && setWithinProperties(featuresArray);
	// }, [ marker ])

	const onClick = (e: any) => {
		const popupCoordinates = e.lngLat;
		const activeLayers = mapRef.current.queryRenderedFeatures(e.point);
		const filteredLayers = activeLayers.filter((item: any) => item.source === "raster-style");

		if (filteredLayers.length > 0) {
			const currentItem = filteredLayers[0];
			const properties = currentItem.properties;
			setTilesProperties({...properties, coordinates: popupCoordinates});	
		}
		else {
			setTilesProperties(null);	
		}
	}

	return (
		<TilesContext.Provider value={{ 
			tilesProperties, onClick, withinProperties
		}}>
			{children}
		</TilesContext.Provider>
	)
}

TilesContext.displayName = "TilesContext";