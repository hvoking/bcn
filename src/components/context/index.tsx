import { GeoProvider } from './geo';
import { StylesProvider } from './styles';
import { CircleProvider } from './circle';
import { TilesProvider } from './tiles';

export const MainProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <StylesProvider>
    <CircleProvider>
    <TilesProvider>
      {children}
    </TilesProvider>
    </CircleProvider>
    </StylesProvider>
    </GeoProvider>
  )
}

MainProvider.displayName="MainProvider";