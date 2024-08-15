// App imports
import './styles.scss';

export const Description = ({ tilesProperties }: any) => {
	return (
		<div className="card-thumbnail-description">
			<strong>{tilesProperties.indice.slice(0, 5)}</strong>
		</div>
	)
}

Description.displayName="Description";