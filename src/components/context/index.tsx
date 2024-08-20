import { GeoProvider } from './geo';
import { StylesProvider } from './styles';
import { FilterProvider } from './filter';
import { MaskProvider } from './mask';
import { MapsProvider } from './maps';

export const MainProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <MapsProvider>
    <StylesProvider>
    <FilterProvider>
    <MaskProvider>
      {children}
    </MaskProvider>
    </FilterProvider>
    </StylesProvider>
    </MapsProvider>
    </GeoProvider>
  )
}

MainProvider.displayName="MainProvider";