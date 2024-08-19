import { GeoProvider } from './geo';
import { StylesProvider } from './styles';
import { FilterProvider } from './filter';
import { TilesProvider } from './tiles';
import { MapsProvider } from './maps';

export const MainProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <MapsProvider>
    <StylesProvider>
    <FilterProvider>
    <TilesProvider>
      {children}
    </TilesProvider>
    </FilterProvider>
    </StylesProvider>
    </MapsProvider>
    </GeoProvider>
  )
}

MainProvider.displayName="MainProvider";