import { GeoProvider } from './geo';
import { StylesProvider } from './styles';
import { CircleProvider } from './circle';
import { MaskProvider } from './mask';
import { MapsProvider } from './maps';

export const MainProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <MapsProvider>
    <StylesProvider>
    <CircleProvider>
    <MaskProvider>
      {children}
    </MaskProvider>
    </CircleProvider>
    </StylesProvider>
    </MapsProvider>
    </GeoProvider>
  )
}

MainProvider.displayName="MainProvider";