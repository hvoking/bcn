// App imports
import { Dropdown } from './dropdown';
import { Switch } from './switch';
import './styles.scss';

export const Wrapper = ({ children }: any) => {
	return (
		<div className="map-container">
			{children}
			<Dropdown/>
			<Switch/>
		</div>
	)
}

Wrapper.displayName="Wrapper";