import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';

export default class Header extends Component {
	state= {};

	render() {
		return (
			<div style={{borderRadius: '0px !important'}}>
				<Menu inverted>
					<Menu.Item>
						Random Clash Deck
					</Menu.Item>
				</Menu>
			</div>
		);
	}
}