import { useState, useContext, createContext } from 'react';

const BaseMapsContext: React.Context<any> = createContext(null)

export const useBaseMaps = () => {
	return (
		useContext(BaseMapsContext)
	)
}

export const BaseMapsProvider = ({children}: any) => {
	const [ activeSatelite, setActiveSatelite ] =  useState(false);
	const [ currentBaseMap, setCurrentBaseMap ] = useState("https://basemaps.cartocdn.com/gl/positron-gl-style/style.json");

	return (
		<BaseMapsContext.Provider value={{ 
			activeSatelite, setActiveSatelite,
			currentBaseMap, setCurrentBaseMap,
		}}>
			{children}
		</BaseMapsContext.Provider>
	)
}

BaseMapsContext.displayName = "BaseMapsContext";
