// React imports
import { useCallback } from 'react';

// Context imports
import { useCircle } from '../../../context/circle'

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Mask = () => {
	const { circleGeometry } = useCircle();
	
	return (
		<Source 
			id="mask-source" 
			type="geojson" 
			data={circleGeometry}
		>
		  <Layer
		    id="mask-layer"
		    type="fill"
		    paint={{
		      'fill-color': '#000000',
		      'fill-opacity': 0.5
		    }}
		  />
		</Source>
	)
}

Mask.displayName="Mask";