// App imports
import './styles.scss';

// Context imports
import { useSwitch } from '../../../../context/maps/switch';

export const Switch = () => {
	const { setActiveSwitch } = useSwitch();
	
	return (
		<div className="basemaps-wrapper">
			<div className="basemaps-checkbox">
				Satellite
			</div>
			<div className="switch-wrapper">
				<label className="switch">
				  <input type="checkbox"/>
				  <span className="slider round"/>
				  <span 
				  	className="labels" 
					onClick={() => setActiveSwitch((prev: boolean) => !prev)}
				  />
				</label>
			</div>
		</div>
	)
}

Switch.displayName="Switch";