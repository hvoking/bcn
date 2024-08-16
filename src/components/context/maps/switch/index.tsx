import { useState, useContext, createContext } from 'react';

const SwitchContext: React.Context<any> = createContext(null)

export const useSwitch = () => {
	return (
		useContext(SwitchContext)
	)
}

export const SwitchProvider = ({children}: any) => {
	const [ activeSwitch, setActiveSwitch ] =  useState(false);
	const [ currentBaseMap, setCurrentBaseMap ] = useState("https://basemaps.cartocdn.com/gl/positron-gl-style/style.json");

	return (
		<SwitchContext.Provider value={{ 
			activeSwitch, setActiveSwitch,
			currentBaseMap, setCurrentBaseMap,
		}}>
			{children}
		</SwitchContext.Provider>
	)
}

SwitchContext.displayName = "SwitchContext";
