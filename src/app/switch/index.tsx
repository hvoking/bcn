// App imports
import './styles.scss';

// Context imports
import { useGeo } from 'context/geo';

export const Switch = () => {
	const { setMapStyle } = useGeo();
	
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
					onClick={() => setMapStyle((prev: boolean) => !prev)}
				  />
				</label>
			</div>
		</div>
	)
}

Switch.displayName="Switch";