// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const StyleContext: React.Context<any> = createContext(null)

export const useStyle = () => {
	return (
		useContext(StyleContext)
	)
}

export const StyleProvider = ({children}: any) => {
	const [ styleData, setStyleData ] = useState<any[]>([]);
	const [ styleName, setStyleName ] = useState("barcelona");

	useEffect(() => {
		const fetchData = async () => {
			const tempUrl = `
		    	${process.env.REACT_APP_API_URL}/
		    	style/
		    	${styleName}
		    `
		  	const url = tempUrl.replace(/\s/g, '');
		  	const res = await fetch(url);
		    const receivedData = await res.json();
		    setStyleData(receivedData);
		}
		fetchData();
	}, [ styleName ])

	return (
		<StyleContext.Provider value={{ styleData, styleName, setStyleName }}>
			{children}
		</StyleContext.Provider>
	)
}

StyleContext.displayName = "StyleContext";