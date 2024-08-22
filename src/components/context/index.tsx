import { StylesProvider } from './styles';
import { CircleProvider } from './circle';
import { MaskProvider } from './mask';
import { MapsProvider } from './maps';

export const MainProvider = ({children}: any) => {
  return (
    <MapsProvider>
    <StylesProvider>
    <CircleProvider>
    <MaskProvider>
      {children}
    </MaskProvider>
    </CircleProvider>
    </StylesProvider>
    </MapsProvider>
  )
}

MainProvider.displayName="MainProvider";