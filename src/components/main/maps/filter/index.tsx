// Context imports
import { useFilter } from '../../../context/filter';

// Third party imports
import { Source, Layer, LayerProps } from 'react-map-gl';

export const Filter = () => {
    const { circleGeometry } = useFilter();

    const circleLayer: LayerProps = {
        id: 'layer-mask',
        type: 'fill',
        source: 'polygon',
        paint: {
            "fill-color": "blue",
            "fill-opacity": 0.2
        }
    };

    return (
        <Source 
            id="polygon" 
            type="geojson" 
            data={circleGeometry}
        >
            <Layer 
                {...circleLayer}
            />
        </Source>
    );
};

Filter.displayName = "Filter";