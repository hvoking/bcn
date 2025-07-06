// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useGeo } from 'context/geo';
import { useCircle } from 'context/circle';

// Third-party imports
import * as turf from '@turf/turf';
import { signal } from '@preact/signals-react';

const MaskContext: React.Context<any> = createContext(null)

export const useMask = () => {
	return (
		useContext(MaskContext)
	)
}

export const MaskProvider = ({children}: any) => {
	const { mapRef } = useGeo();
	const { circleGeometry } = useCircle();

	const mapFeatures = signal<any>(null);
	const map = mapRef.current;

	mapFeatures.value = map ? map.queryRenderedFeatures() : [];

	const maskProperties = mapFeatures.value.filter((item: any) => 
		item.source === 'raster-style' &&
		turf.booleanPointInPolygon(turf.centroid(item.geometry), circleGeometry)
	)

	const sanitaryEquipments = mapFeatures.value.filter((item: any) => 
		item.source === 'sanitary-equipments' &&
		turf.booleanPointInPolygon(item.geometry, circleGeometry)
	)

	return (
		<MaskContext.Provider value={{ maskProperties, sanitaryEquipments }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";