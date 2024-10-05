// App imports
import { Circle } from './circle';
import { Mask } from './mask';
import { Tiles } from './tiles';
import { Farmacies } from './farmacies';
import { Icons } from './icons';

export const Layers = () => {
	return (
		<>
			<Tiles/>
			<Circle/>
			<Mask/>
			<Farmacies/>
			<Icons/>
		</>
	)
}

Layers.displayName="Layers";