// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Farmacies = () => {
	const url = `${process.env.REACT_APP_API_URL}/tiles?schema_name=barcelona&style_name=sanitary_equipments&z={z}&x={x}&y={y}`;

	const layerStyle: any = {
	    id: "point-layer",
	    type: "circle",
	    source: "sanitary-equipments",
	    'source-layer': "default",
	    paint: {
	      'circle-radius': 3,
	      'circle-color': 'rgba(255, 255, 0, 1)'
	    }
	  };

	return (
		<Source 
			id="sanitary-equipments" 
			type="vector" 
			tiles={[ url ]}
		>
			<Layer {...layerStyle} />
		</Source>
	)
}

Farmacies.displayName="Farmacies"