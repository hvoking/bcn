// React imports
import { useState, useContext, createContext } from 'react';

// Context imports
import { useGeo } from 'context/geo';

// Third-party libraries
import * as turf from '@turf/turf';

const CircleContext: React.Context<any> = createContext(null);

export const useCircle = () => {
	return (
		useContext(CircleContext)
	)
}

export const CircleProvider = ({children}: any) => {
	const { marker } = useGeo();
	const [ circleRadius, setCircleRadius ] = useState(1);

	const { latitude, longitude }  = marker;
	const circleGeometry: any = turf.circle([longitude, latitude], circleRadius);
	    
	return (
		<CircleContext.Provider value={{ 
			circleGeometry
		}}>
			{children}
		</CircleContext.Provider>
	)
}

CircleContext.displayName = "CircleContext";