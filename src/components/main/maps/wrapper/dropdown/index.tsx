// React imports
import { useState } from 'react';

// App imports
import { Arrow } from './arrow';
import { Suggestions } from './suggestions';
import './styles.scss';

// Context imports
import { useMapProperties } from '../../../../context/maps/properties';
import { useStyles } from '../../../../context/styles';

export const Dropdown = () => {
	const { cityName, setCityName, Locations, viewport, setViewport } = useMapProperties();
	const { setStyleName } = useStyles();

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