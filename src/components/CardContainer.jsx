import React from 'react';

import { Segment } from 'semantic-ui-react';

const CardContainer = ({card}) => {
	return(
		<div style={styles.cardContainer}>
			<Segment.Group>
				<Segment>
					<img alt="" style={{width: '100%', maxHeight: 200, maxWidth: 166}} src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`} />
				</Segment>
				<Segment>
					<div>
						<div style={{marginRight: 8}}>
							{card.name}
						</div>
						<div>
							{card.elixirCost} Elixir
						</div>
					</div>
				</Segment>
			</Segment.Group>
		</div>
	);
};

const styles = {
	cardContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		margin: '0px 2px'
	}
};

export default CardContainer;