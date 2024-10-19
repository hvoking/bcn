// React imports
import { useEffect } from 'react';

// Context imports
import { useMask } from '../../../context/mask';
import { useMapbox } from '../../../context/mapbox';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Icons = () => {
	const { sanitaryEquipments } = useMask();
	const { mapRef } = useMapbox();
	const imagePath = `${process.env.PUBLIC_URL}/static/symbols/pokemon_centre.png`;

	useEffect(() => {
      mapRef?.current.loadImage(
        imagePath,
        (error: any, image: any) => {
          if (error) throw error;
          if (!mapRef.current.hasImage('sanitary-icon')) {
            mapRef.current.addImage('sanitary-icon', image);
          }
        }
      );
	  }, [mapRef]);

	if (!sanitaryEquipments) return <></>

	const geoJsonData: any = {
        "type": "FeatureCollection",
        "features": sanitaryEquipments
    };

	return (
		<Source id="sanitary-equipments-data" type="geojson" data={geoJsonData}>
	        <Layer
                id="sanitary-equipments-icons"
                type="symbol"
                layout={{
                  'icon-image': 'sanitary-icon',
                  'icon-size': 0.1,
                  'icon-anchor': 'bottom',
                }}
              />
	      </Source>
	)
}

Icons.displayName="Icons"