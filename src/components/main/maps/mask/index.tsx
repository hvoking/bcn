// Context imports
import { useMask } from '../../../context/mask';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Mask = () => {
	const { maskProperties } = useMask();
	// console.log(maskProperties)	
	return (
		<></>
		// <Source 
		// 	id="mask" 
		// 	type="geojson" 
		// >
		// 	{layers}
		// </Source>
	)
}

Mask.displayName="Mask"