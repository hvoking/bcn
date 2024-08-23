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
	const { mapRef } = useMapProperties();
	const { circleGeometry } = useCircle();

	const [ maskProperties, setMaskProperties ] = useState<any>(null);
	const [ mapFeatures, setMapFeatures ] = useState<any>(null);

	const updateMapFeatures = () => {
		if (!mapRef.current) return;
		const features = mapRef.current.queryRenderedFeatures();
		setMapFeatures(features);
	};

	useEffect(() => {
		if (!mapRef.current) return;

		updateMapFeatures();

		mapRef.current.on('data', (e: any) => {
			if (e.sourceId && e.source.type === 'vector' && e.tile) {
				updateMapFeatures();
			}
		});
	}, [ mapRef.current ]);

	useEffect(() => {
        const filteredLayers = mapFeatures?.filter((item: any) => {
            if (item.source === "raster-style") {
                const featureGeometry = item.geometry;
                const featureCentroid = turf.centroid(featureGeometry);
                return turf.booleanPointInPolygon(featureCentroid, circleGeometry);
            }
            return false;
        });
        mapFeatures && setMaskProperties(filteredLayers);
	}, [ circleGeometry, mapFeatures ]);

	return (
		<MaskContext.Provider value={{ maskProperties }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";