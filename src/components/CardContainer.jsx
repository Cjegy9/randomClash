import React from 'react';

import { Segment } from 'semantic-ui-react';

const CardContainer = ({card}) => {
	return(
		<div style={styles.cardContainer}>
			<Segment.Group>
				<Segment>
					<img width="100" src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`} />
				</Segment>
				<Segment>
					{card.name}
				</Segment>
				<Segment>
					{card.description}
				</Segment>
				<Segment>
					Elixir Cost: {card.elixirCost}
				</Segment>
				<Segment>
					Arena: {card.arena}
				</Segment>
			</Segment.Group>
		</div>
	);
};

const styles = {
	cardContainer: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		margin: '0px 2px'
	}
};

export default CardContainer;