import { StylesProvider } from './styles';
import { CircleProvider } from './circle';
import { MaskProvider } from './mask';
import { GeoProvider } from './geo';
import { EventsProvider } from './events';

export const ContextProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <EventsProvider>
    <StylesProvider>
    <CircleProvider>
    <MaskProvider>
      {children}
    </MaskProvider>
    </CircleProvider>
    </StylesProvider>
    </EventsProvider>
    </GeoProvider>
  )
}

ContextProvider.displayName="ContextProvider";