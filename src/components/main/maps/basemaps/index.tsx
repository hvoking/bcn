// App imports
import './styles.scss';

// Context imports
import { useBaseMaps } from '../../../context/maps/basemaps';

export const Basemaps = () => {
	const { setActiveSatelite } = useBaseMaps();
	
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
					onClick={() => setActiveSatelite((prev: boolean) => !prev)}
				  />
				</label>
			</div>
		</div>
	)
}