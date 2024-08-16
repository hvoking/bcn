// Context imports
import { useStyle } from '../../../context/api/styles';
import { useGeo } from '../../../context/filters/geo';

// App imports
import { createCircle } from '../../utils/circle';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Tiles = () => {
	const { styleData, styleName } = useStyle();
	const { viewport } = useGeo();

	const circleGeometry: any = createCircle([viewport.longitude, viewport.latitude], 1, 64);
	
	const tempUrl = `
		${process.env.REACT_APP_API_URL}/
		tiles/
		${styleName}
		?z={z}
		&x={x}
		&y={y}
	`;
	const url = tempUrl.replace(/\s/g, '');

	return (
		<>
			<Source 
				id="raster-style" 
				type="vector" 
				tiles={[ url ]}
			>
				{
					styleData.map((style: any, index: number) => {
						const updatedFilters: any = ['all', style.filter, ['within', circleGeometry]];
						const newStyle: any = {...style, filter: updatedFilters}

						return (
							<Layer 
								key={index} 
								{...newStyle} 
							/>
						)
					})
				}
			</Source>
			{/*<Source id="mask-source" type="geojson" data={circleGeometry}>
			  <Layer
			    id="mask-layer"
			    type="fill"
			    paint={{
			      'fill-color': '#000000',
			      'fill-opacity': 0.5
			    }}
			  />
			</Source>*/}
		</>
	)
}

Tiles.displayName="Tiles"