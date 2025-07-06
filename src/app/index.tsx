// App imports
import { Dropdown } from './dropdown';
import { Switch } from './switch';
import { Maps } from './maps';
import './styles.scss';

// Context imports
import { ContextProvider } from 'context';

export const App = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
	return (
		<ContextProvider>
			<div className="App">
				<Maps/>
				<Dropdown/>
				<Switch/>
			</div>
		</ContextProvider>
	)
}

App.displayName="App";