// App imports
import { MouseEventsProvider } from './events';
import { MapPropertiesProvider } from './properties';

export const MapsProvider = ({ children }: any) => {
	return (
		<MapPropertiesProvider>
		<MouseEventsProvider>
			{children}
		</MouseEventsProvider>
		</MapPropertiesProvider>
	)
}