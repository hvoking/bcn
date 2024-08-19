// Context imports
import { useStyles } from '../../../context/styles';
import { useCircle } from '../../../context/circle';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Tiles = () => {
	const { styleData, styleName } = useStyles();
	const { circleGeometry }  = useCircle();
	
	const url = `${process.env.REACT_APP_API_URL}/tiles/${styleName}?z={z}&x={x}&y={y}`;

	const layers = styleData.map((style: any, index: number) => {
		return (
			<Layer key={index} {...style}/>
		)
	});

	return (
		<Source 
			id="raster-style" 
			type="vector" 
			tiles={[ url ]}
		>
			{layers}
		</Source>
	)
}

Tiles.displayName="Tiles"