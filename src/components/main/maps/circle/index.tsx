// App imports
import { createCircle } from '../../utils/circle';

// Context imports
import { useMapboxProperties } from '../../../context/maps/mapbox';

// Third party imports
import { Source, Layer, LayerProps } from 'react-map-gl';

// The CircleLayer component
export const CircleLayer = () => {
    const { viewport } = useMapboxProperties();

    const circleGeometry: any = createCircle([viewport.longitude, viewport.latitude], 0.5, 64);

    const circleLayer: LayerProps = {
        id: 'circle',
        type: 'fill',
        source: 'polygon',
        paint: {
            "fill-color": "blue",
            "fill-opacity": 0.6
        }
    };

    return (
        <Source id="polygon" type="geojson" data={circleGeometry}>
            <Layer {...circleLayer} />
        </Source>
    );
};

CircleLayer.displayName = "CircleLayer";