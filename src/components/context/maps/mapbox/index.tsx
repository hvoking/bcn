// React imports
import { useState, useEffect, useRef, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';

const MapboxContext: React.Context<any> = createContext(null);

export const useMapboxProperties = () => {
  return (
    useContext(MapboxContext)
  )
}

export const MapboxProvider = ({children}: any) => {
  const mapRef = useRef<any>();
  const [ viewport, setViewport ] = useState(Locations.barcelona);
  const [ tilesProperties, setTilesProperties ] = useState<any>(null);

  useEffect(() => {
    mapRef.current?.flyTo({
      center: [viewport.longitude, viewport.latitude],
      zoom: viewport.zoom,
      pitch: viewport.pitch,
      bearing: viewport.bearing,
      duration: 4000, 
      essential: true,
    });
  }, [viewport])
  
  return (
    <MapboxContext.Provider value={{ 
      mapRef, viewport, setViewport, Locations, tilesProperties, setTilesProperties
    }}>
      {children}
    </MapboxContext.Provider>
  )
}

MapboxContext.displayName="MapboxContext";