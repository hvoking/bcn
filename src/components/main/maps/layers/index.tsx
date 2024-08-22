// App imports
import { Circle } from './circle';
import { Mask } from './mask';
import { Tiles } from './tiles';

export const Layers = () => {
	return (
		<>
			<Tiles/>
			<Circle/>
			<Mask/>
		</>
	)
}

Layers.displayName="Layers";