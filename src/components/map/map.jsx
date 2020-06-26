import React, { Component } from 'react';
import './map.sass';
import { StaticGoogleMap, Marker } from 'react-static-google-map';

export class GSMap extends Component {
	render() {
		return (
			<div className="map">
				<a
					href="https://www.google.com/maps/place/Fitzgerald+Spine+%26+Sports+Care/@38.914381,-77.233863,15z/data=!4m5!3m4!1s0x0:0x92c7c89f6a356096!8m2!3d38.9143808!4d-77.233863?hl=en-TH"
					target="_blank"
					rel="noopener noreferrer"
				>
					<StaticGoogleMap
						className="google-map"
						zoom="15"
						size="300x300"
						scale="2"
						apiKey="AIzaSyB80v_A4xdjKUyJKrhoFGt3f-D5K47O050"
					>
						<Marker location="38.914381,-77.233863" color="red" />
					</StaticGoogleMap>
				</a>
			</div>
		);
	}
}

export default GSMap;
