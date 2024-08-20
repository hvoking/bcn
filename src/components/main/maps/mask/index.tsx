// Context imports
import { useMask } from '../../../context/mask';
import { useStyles } from '../../../context/styles';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Mask = () => {
	const { maskProperties } = useMask();
	const { styleData } = useStyles();
	
	if (!maskProperties) return <></>

	const features = maskProperties.map((item: any) => ({
		type: "Feature",
		geometry: item.geometry,
		properties: item.properties || {}  // Optionally include properties
	}));
	
	const geoJsonData: any = {
        "type": "FeatureCollection",
        "features": features
    };

	return (
		<Source id="polygon-data" type="geojson" data={geoJsonData}>
	        <Layer
	          id="extruded-polygons"
	          type="fill-extrusion"
	          paint={{
	            'fill-extrusion-color': '#007cbf',
	            'fill-extrusion-height': 30,
	            'fill-extrusion-base': 0,
	            'fill-extrusion-opacity': 0.8
	          }}
	        />
	      </Source>
	)
}

Mask.displayName="Mask"