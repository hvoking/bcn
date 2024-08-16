// App imports
import { createCircle } from '../../utils/circle';

// Context imports
import { useStyle } from '../../../context/api/styles';
import { useMapboxProperties } from '../../../context/maps/mapbox';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Tiles = () => {
	const { styleData, styleName } = useStyle();
	const { viewport } = useMapboxProperties();
	
	const tempUrl = `
		${process.env.REACT_APP_API_URL}/
		tiles/
		${styleName}
		?z={z}
		&x={x}
		&y={y}
	`;
	const url = tempUrl.replace(/\s/g, '');

	const circle = createCircle([viewport.latitude, viewport.longitude], 0.5, 64);

	return (
		<Source 
			id="raster-style" 
			type="vector" 
			tiles={[ url ]}
		>
			{
				styleData.map((style: any, index: number) => {
					return (
						<Layer key={index} {...style} interactive={true}/>
					)
				})
			}
		</Source>
	)
}

Tiles.displayName="Tiles"