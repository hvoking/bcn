// React imports
import { useState, useEffect, useMemo, useContext, createContext } from 'react';

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
	const [activeFeatures, setActiveFeatures] = useState(false);

	useEffect(() => {
		const map = mapRef.current;
		if (!map) return;

		map.on('data', (e: any) => {
			if (e.sourceId && e.source.type === 'vector' && e.tile) {
				setActiveFeatures((prev) => !prev);
			}
		});
	}, [mapRef.current]);

	const mapFeatures = useMemo(() => {
		const map = mapRef.current;
		if (!map) return [];
		return map.queryRenderedFeatures();
	}, [activeFeatures, mapRef.current]);

	useEffect(() => {
		if (!mapFeatures) return;
		const filteredLayers = mapFeatures.filter((item: any) => {
			if (item.source === 'raster-style') {
				const featureGeometry = item.geometry;
				const featureCentroid = turf.centroid(featureGeometry);
				return turf.booleanPointInPolygon(featureCentroid, circleGeometry);
			}	
			return false;
		});

		setMaskProperties(filteredLayers);
	}, [circleGeometry, mapFeatures]);

	return (
		<MaskContext.Provider value={{ maskProperties }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";