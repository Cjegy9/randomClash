import React, { Component } from 'react';

class display extends Component {

	render() {
		const {cardArray} = this.props;
		return (
			<div style={{display: 'flex'}}>
				{this.props.cardArray.length > 0 &&
					<div>
						<img src={`http://www.clashapi.xyz/images/cards/${cardArray[0].idName}.png`} />
						<img src={`http://www.clashapi.xyz/images/cards/${cardArray[1].idName}.png`} />
						<img src={`http://www.clashapi.xyz/images/cards/${cardArray[2].idName}.png`} />
						<img src={`http://www.clashapi.xyz/images/cards/${cardArray[3].idName}.png`} />
						<img src={`http://www.clashapi.xyz/images/cards/${cardArray[4].idName}.png`} />
						<img src={`http://www.clashapi.xyz/images/cards/${cardArray[5].idName}.png`} />
						<img src={`http://www.clashapi.xyz/images/cards/${cardArray[6].idName}.png`} />
						<img src={`http://www.clashapi.xyz/images/cards/${cardArray[7].idName}.png`} />
					</div>
				}
			</div>
		);
	}
}

export default display;