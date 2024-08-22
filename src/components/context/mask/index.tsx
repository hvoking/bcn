// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useMapProperties } from '../maps/properties';
import { useCircle } from '../circle';

// Third-party imports
import * as turf from '@turf/turf';

const MaskContext: React.Context<any> = createContext(null)

export const useMask = () => {
	return (
		useContext(MaskContext)
	)
}

export const MaskProvider = ({children}: any) => {
	const { mapRef, marker } = useMapProperties();
	const { circleGeometry } = useCircle();

	const [ maskProperties, setMaskProperties ] = useState<any>(null);

	useEffect(() => {
		const map = mapRef.current;

		if (!map) return;
		
		const mapFeatures = map.queryRenderedFeatures();

        const filteredLayers = mapFeatures.filter((item: any) => {
            if (item.source === "raster-style") {
                const featureGeometry = item.geometry;
                const featureCentroid = turf.centroid(featureGeometry);
                return turf.booleanPointInPolygon(featureCentroid, circleGeometry);
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