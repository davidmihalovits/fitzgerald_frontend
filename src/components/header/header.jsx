import React, { Component } from 'react';
import './header.sass';
import Button from '@material-ui/core/button';

export class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header-wide">
					<h1>Fitzgerald Spine and Sports Care</h1>
					<p>
						The most current and evidence-based treatments for sports medicine, chiropractic and physical
						therapy available in the Northern Virginia/Washington DC region.
					</p>
					<a href="https://fitzgeraldspinesports.janeapp.com/" target="_blank" rel="noopener noreferrer">
						<Button>Book now</Button>
					</a>
				</div>
			</div>
		);
	}
}

export default Header;
