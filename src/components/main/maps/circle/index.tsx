// Context imports
import { useCircle } from '../../../context/circle';

// Third party imports
import { Source, Layer, LayerProps } from 'react-map-gl';

export const Circle = () => {
    const { circleGeometry } = useCircle();

    const circleLayer: LayerProps = {
        id: 'circle',
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
            <Layer {...circleLayer}/>
        </Source>
    );
};

Circle.displayName = "Circle";