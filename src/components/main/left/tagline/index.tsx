// App imports
import './styles.scss';

export const Tagline = () => {
	return (
		<div className="tagline-wrapper">
			<img 
				src={process.env.PUBLIC_URL + "/static/watermark/data.svg"} 
				alt="watermark-data"
				width="80%"
			/>
		</div>
	)
}

Tagline.displayName="Tagline";