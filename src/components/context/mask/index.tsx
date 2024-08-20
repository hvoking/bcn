// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useGeo } from '../geo';
import { useFilter } from '../filter';

// Third-party imports
import * as turf from '@turf/turf';

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
		
		const mapFeatures = map.queryRenderedFeatures();

        const filteredLayers = mapFeatures.filter((item: any) => {
            if (item.source === "raster-style") {
                const featureGeometry = item.geometry;
                const featurePolygon = turf.polygon(featureGeometry.coordinates);
                return turf.booleanIntersects(circleGeometry, featurePolygon);
            }
            return false;
        });

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