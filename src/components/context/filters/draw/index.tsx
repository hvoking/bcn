import { useState, useContext, createContext } from 'react';

const DrawPolygonContext: React.Context<any> = createContext(null);

export const useDrawPolygon = () => {
	return (
		useContext(DrawPolygonContext)
	)
}

export const DrawPolygonProvider = ({children}: any) => {
	const [ drawPolygon, setDrawPolygon ] = useState<any>(null);
	
	return (
		<DrawPolygonContext.Provider value={{ drawPolygon, setDrawPolygon }}>
			{children}
		</DrawPolygonContext.Provider>
	)
}

DrawPolygonContext.displayName = "DrawPolygonContext";