import { MapboxProvider } from './mapbox';
import { BaseMapsProvider } from './basemaps';

export const MapsProvider = ({children}: any) => {
  return (
    <MapboxProvider>
    <BaseMapsProvider>
      {children}
    </BaseMapsProvider>
    </MapboxProvider>
  )
}

MapsProvider.displayName="MapsProvider";