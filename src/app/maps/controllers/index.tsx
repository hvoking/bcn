// App imports
import './styles.scss';

// Third party imports
import { NavigationControl, FullscreenControl } from 'react-map-gl';

export const Controllers = () => {
	return (
		<>
			<NavigationControl/>
			<FullscreenControl/>
		</>
	)
}

Controllers.displayName="Controllers";