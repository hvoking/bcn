import { GeoProvider } from './geo';
import { DrawPolygonProvider } from './draw';

export const FiltersProvider = ({children}: any) => {
  return (
    <DrawPolygonProvider>
    <GeoProvider>
      {children}
    </GeoProvider>
    </DrawPolygonProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";