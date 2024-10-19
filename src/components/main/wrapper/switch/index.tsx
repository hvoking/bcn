// App imports
import './styles.scss';

// Context imports
import { useMapbox } from '../../../context/mapbox';

export const Switch = () => {
	const { setActiveBasemap } = useMapbox();
	
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