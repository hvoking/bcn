import { MapsProvider } from './maps';
import { FiltersProvider } from './filters';
import { PlaceApiProvider } from './api';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <PlaceApiProvider>
    <MapsProvider>
      {children}
    </MapsProvider>
    </PlaceApiProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";