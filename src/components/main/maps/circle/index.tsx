// App imports
import { createCircle } from '../../utils/circle';

// Context imports
import { useGeo } from '../../../context/filters/geo';

// Third party imports
import { Source, Layer, LayerProps } from 'react-map-gl';

// The CircleLayer component
export const CircleLayer = () => {
    const { viewport } = useGeo();

    const circleGeometry: any = createCircle([viewport.longitude, viewport.latitude], 1, 64);

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
        <Source id="polygon" type="geojson" data={circleGeometry}>
            <Layer {...circleLayer} />
        </Source>
    );
};

CircleLayer.displayName = "CircleLayer";