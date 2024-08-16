// App imports
import './styles.scss';

// Context imports
import { useBasemap } from '../../../../context/maps/basemap';

export const Switch = () => {
	const { setActiveBasemap } = useBasemap();
	
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
					onClick={() => setActiveBasemap((prev: boolean) => !prev)}
				  />
				</label>
			</div>
		</div>
	)
}

Switch.displayName="Switch";