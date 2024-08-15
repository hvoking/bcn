// App imports
import { StyleProvider } from './styles';

export const PlaceApiProvider = ({children}: any) => {
  return (
    <StyleProvider>
      {children}
    </StyleProvider>
  )
}

PlaceApiProvider.displayName="PlaceApiProvider";