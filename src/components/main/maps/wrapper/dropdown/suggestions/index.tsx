export const Suggestions = ({ suggestions, suggestionIndex, handleClick }: any) => {
	return (
		<ul className="suggestions">
			{
				suggestions.map((suggestion: any, index: number) => {
					return (
						<li key={index} onClick={handleClick}>{suggestion}</li>
					)
				})
			}
		</ul>
	)
};

Suggestions.displayName="Suggestions";