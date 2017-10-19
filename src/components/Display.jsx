import React, { Component } from 'react';

import CardContainer from './CardContainer';

class display extends Component {

	render() {
		const {cardArray} = this.props;
		return (
			<div>
				{this.props.cardArray.length > 0 &&
					<div style={{display: 'flex'}}>
						{cardArray.map(card => {
							return(
								<CardContainer card={card}/>
							)
						})}
					</div>
				}
			</div>
		);
	}
}

export default display;