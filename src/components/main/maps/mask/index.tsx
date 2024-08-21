// Context imports
import { useMask } from '../../../context/mask';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Mask = () => {
	const { maskProperties } = useMask();

	if (!maskProperties) return <></>

	const features = maskProperties.filter((item: any) => {
        const stringList = Object.keys(item.layer.paint);
        return stringList.includes("fill-color");
    })
		
	const updatedFeatures = features.map((item: any) => {
		const { r, g, b, a } = item.layer.paint["fill-color"];
		const fillColor = `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${a})`;
	
		return ({
			type: "Feature",
			geometry: item.geometry,
			properties: {
				...item.properties, 
				'fill-color': fillColor
			}
		})
	});
		
	const geoJsonData: any = {
        "type": "FeatureCollection",
        "features": updatedFeatures
    };

	return (
		<Source id="polygon-data" type="geojson" data={geoJsonData}>
	        <Layer
	          id="extruded-polygons"
	          type="fill-extrusion"
	          paint={{
	            'fill-extrusion-color': ['get', 'fill-color'],
	            'fill-extrusion-height': ['*', ['get', 'indice_fin'], 1000],
	            'fill-extrusion-base': 0,
	            'fill-extrusion-opacity': 0.8
	          }}
	        />
	      </Source>
	)
}

Mask.displayName="Mask"