import { FiltersProvider } from './filters';
import { PlaceApiProvider } from './api';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <PlaceApiProvider>
      {children}
    </PlaceApiProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";