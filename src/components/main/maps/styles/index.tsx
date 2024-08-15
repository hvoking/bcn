// Context imports
import { useStyle } from '../../../context/api/styles';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Styles = () => {
	const { styleData, styleName } = useStyle();
	
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

Styles.displayName="Styles"