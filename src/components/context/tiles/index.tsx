// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useGeo } from '../geo';
import { useFilter } from '../filter';

const TilesContext: React.Context<any> = createContext(null)

export const useTiles = () => {
	return (
		useContext(TilesContext)
	)
}

export const TilesProvider = ({children}: any) => {
	const { mapRef, marker } = useGeo();
	const { filterGeometry } = useFilter();

	const [ maskProperties, setMaskProperties ] = useState<any>(null);

	useEffect(() => {
		const map = mapRef.current;
		if (!map) return;
		const mapFeatures = map.queryRenderedFeatures(filterGeometry);
		const filteredLayers = mapFeatures.filter((item: any) => item.source === "raster-style");
		setMaskProperties(filteredLayers);
	}, [ filterGeometry, marker, mapRef ]);

	return (
		<TilesContext.Provider value={{ 
			maskProperties
		}}>
			{children}
		</TilesContext.Provider>
	)
}

TilesContext.displayName = "TilesContext";