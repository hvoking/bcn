import { MapboxProvider } from './mapbox';
import { SwitchProvider } from './switch';

export const MapsProvider = ({children}: any) => {
  return (
    <MapboxProvider>
    <SwitchProvider>
      {children}
    </SwitchProvider>
    </MapboxProvider>
  )
}

MapsProvider.displayName="MapsProvider";