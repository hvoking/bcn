import { useState, useContext, createContext } from 'react';

const BasemapContext: React.Context<any> = createContext(null)

export const useBasemap = () => {
	return (
		useContext(BasemapContext)
	)
}

export const BasemapProvider = ({children}: any) => {
	const [ currentBasemap, setCurrentBasemap ] = useState("https://basemaps.cartocdn.com/gl/positron-gl-style/style.json");
	const [ activeBasemap, setActiveBasemap ] =  useState(false);

	const mapStyle = !activeBasemap ? "mapbox://styles/mapbox/satellite-v9" : currentBasemap;

	return (
		<BasemapContext.Provider value={{ 
			activeBasemap, setActiveBasemap,
			currentBasemap, setCurrentBasemap,
			mapStyle
		}}>
			{children}
		</BasemapContext.Provider>
	)
}

BasemapContext.displayName = "BasemapContext";
