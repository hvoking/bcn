// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Farmacies = () => {
	const tempUrl = `
    	${process.env.REACT_APP_API_URL}
    	/tiles
    	?table_schema=barcelona
    	&table_name=sanitary_equipments
    	&x={x}
    	&y={y}
    	&z={z}
    `
  	const url = tempUrl.replace(/\s/g, '');

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