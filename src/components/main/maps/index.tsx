// React imports
import { useState, useCallback } from 'react';

// App imports
import { Controllers } from './controllers';
import { Wrapper } from './wrapper';
import { Tiles } from './tiles';
import { Mask } from './mask';
import { Pin } from './pin';

// Context imports
import { useTiles } from '../../context/tiles';
import { useGeo } from '../../context/geo';
import { useCircle } from '../../context/circle';

// Third-party imports
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';

export const Maps = () => {
	const { viewport, mapRef, mapStyle, marker, setMarker } = useGeo();
	const { circleGeometry } = useCircle();
	const [ isDragging, setIsDragging ] = useState(false);
	const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

	const isClickInsideCircle = useCallback(
        (point: { x: number, y: number }) => {
            const features = mapRef.current?.queryRenderedFeatures(point, {
                layers: ['layer-mask']
            });
            return features && features.length > 0;
        },
        [mapRef]
    );

    const onDragStart = useCallback(
        (event: any) => {
            if (isClickInsideCircle(event.point)) {
                setIsDragging(true);
                const offsetX = event.point.x - mapRef.current.project([marker.longitude, marker.latitude]).x;
                const offsetY = event.point.y - mapRef.current.project([marker.longitude, marker.latitude]).y;
                setDragOffset({ x: offsetX, y: offsetY });
            }
        },
        [isClickInsideCircle, marker, mapRef]
    );

    const onMouseMove = useCallback(
        (event: any) => {
            if (isDragging) {
                const newCenter = mapRef.current.unproject({
                    x: event.point.x - dragOffset.x,
                    y: event.point.y - dragOffset.y
                });
                setMarker({
                    longitude: newCenter.lng,
                    latitude: newCenter.lat
                });
            }
        },
        [isDragging, dragOffset, mapRef, setMarker]
    );

    const onDragEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

	return (
		<Wrapper>
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={mapStyle}
				onMouseDown={onDragStart}
                onMouseMove={onMouseMove}
                onMouseUp={onDragEnd}
                dragPan={!isDragging}
			>
				<Tiles/>
				<Mask/>
				<Controllers/>
				<Pin/>
			</Map>
		</Wrapper>
	)
}