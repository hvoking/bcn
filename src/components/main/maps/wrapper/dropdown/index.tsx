// React imports
import { useState } from 'react';

// App imports
import { Arrow } from '../../../utils/arrow';
import { Suggestions } from './suggestions';
import './styles.scss';

// Context imports
import { useMapboxProperties } from '../../../../context/maps/mapbox';
import { useGeo } from '../../../../context/filters/geo';
import { useStyle } from '../../../../context/api/styles';

export const Dropdown = () => {
	const { Locations, viewport, setViewport } = useMapboxProperties();
	const { cityName, setCityName } = useGeo();
	const { setStyleName } = useStyle();

	const [ suggestions, setSuggestions ] = useState(['Barcelona', 'Madrid', 'Mallorca']);
	const [ suggestionIndex, setSuggestionIndex ] = useState(0);
	const [ suggestionsActive, setSuggestionsActive ]= useState(false);

	const handleClick = (e: any) => {
		const cityValue = e.target.innerText.toLowerCase();
		setCityName(cityValue);
		setStyleName(cityValue);
		setViewport({...viewport, ...Locations[cityValue]});
		setSuggestionsActive((false))
	};

	const capitalizeFirstLetter = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<div 
			className="autocomplete" 
			onClick={() => setSuggestionsActive((prev: boolean) => !prev)}
		>
			<div className="maps-input">{capitalizeFirstLetter(cityName)}</div>
			<Arrow/>
			{suggestionsActive && 
				<Suggestions 
					suggestions={suggestions} 
					suggestionIndex={suggestionIndex} 
					handleClick={handleClick}
				/>
			}
		</div>
	)
}

Dropdown.displayName="Dropdown";