// React imports
import { useState, useEffect } from 'react';

// Context imports
import { useStyles } from 'context/styles';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Tiles = () => {
	const { fetchData, getTilesUrl } = useStyles();
	const [ styleData, setStyleData ] = useState<any[]>([]);

	const tableName = "barcelona";
	
  	useEffect(() => {
    	const loadData = async () => {
			const data = await fetchData('', tableName);
			setStyleData(data);
		}
		loadData();
	}, []);

	const url = getTilesUrl("layers", tableName)

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