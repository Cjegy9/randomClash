import React from 'react';
import { Segment } from 'semantic-ui-react';

const DeckStats = ({cardArray}) => {
	let elixirCost = 0;
	cardArray.forEach(card => {
		elixirCost += card.elixirCost;
	});
	return (
		<Segment>
			<div style={{display: 'flex', flexDirection: 'column'}}>
				<div>
					Total Elixir: {elixirCost}
				</div>
				<div>
					Average Elixir cost: {elixirCost / 8}
				</div>
			</div>
		</Segment>
	);
};

export default DeckStats;
