// App  imports
import { Header } from './header';
import { Tagline } from './tagline';
import './styles.scss';

export const Left = () => {
	return (
		<div className="left-wrapper">
			<Header/>
			<Tagline/>
		</div>
	)
}

Left.displayName="Left";