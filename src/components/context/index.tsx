import { StylesProvider } from './styles';
import { CircleProvider } from './circle';
import { MaskProvider } from './mask';
import { MapboxProvider } from './mapbox';
import { EventsProvider } from './events';

export const MainProvider = ({children}: any) => {
  return (
    <MapboxProvider>
    <EventsProvider>
    <StylesProvider>
    <CircleProvider>
    <MaskProvider>
      {children}
    </MaskProvider>
    </CircleProvider>
    </StylesProvider>
    </EventsProvider>
    </MapboxProvider>
  )
}

MainProvider.displayName="MainProvider";