import { MapboxProvider } from './mapbox';
import { BasemapProvider } from './basemap';

export const MapsProvider = ({children}: any) => {
  return (
    <MapboxProvider>
    <BasemapProvider>
      {children}
    </BasemapProvider>
    </MapboxProvider>
  )
}

MapsProvider.displayName="MapsProvider";