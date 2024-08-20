// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useGeo } from '../geo';
import { useFilter } from '../filter';

const MaskContext: React.Context<any> = createContext(null)

export const useMask = () => {
	return (
		useContext(MaskContext)
	)
}

export const MaskProvider = ({children}: any) => {
	const { mapRef, marker } = useGeo();
	const { circleGeometry } = useFilter();

	const [ maskProperties, setMaskProperties ] = useState<any>(null);

	useEffect(() => {
		const map = mapRef.current;

		if (!map) return;

		const mapFeatures = map.queryRenderedFeatures(circleGeometry);
		const filteredLayers = mapFeatures.filter((item: any) => item.source === "raster-style");

		setMaskProperties(filteredLayers);
	}, [ circleGeometry, marker, mapRef ]);

	return (
		<MaskContext.Provider value={{ 
			maskProperties
		}}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";