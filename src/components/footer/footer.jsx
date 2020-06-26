import React, { Component } from 'react';
import './footer.sass';
import logo from '../../assets/logo-fitzgerald.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';

export class Footer extends Component {
	render() {
		return (
			<div className="footer-container">
				<div className="footer">
					<div className="footer-logo-social">
						<img className="footer-logo" src={logo} alt="logo" />
						<a href="https://www.facebook.com/GroveSpineSports" target="_blank" rel="noopener noreferrer">
							<img className="footer-facebook1" src={facebook} alt="facebook" />
						</a>
						<a href="https://www.instagram.com/grovespinesports" target="_blank" rel="noopener noreferrer">
							<img className="footer-instagram1" src={instagram} alt="instagram" />
						</a>
					</div>
					<div className="footer-flexbox">
						<div className="contact-us">
							<h2>Contact us</h2>
							<p>
								<a href="tel:7037608110">(703) 760 8110</a>
								<br />
								<a href="mailto:info@fitzgeraldspinesports.com">info@fitzgeraldspinesports.com</a>
								<br />
								8381 Old Courthouse Road., Suite 150,
								<br />
								Tysons Corner, VA 22182
							</p>
						</div>
						<div className="appointment-hours">
							<h2>Appointment Hours</h2>
							<div className="when">
								<div className="days">
									<p>Monday</p>
									<p>Tuesday</p>
									<p>Wednesday</p>
									<p>Thursday</p>
									<p>Friday</p>
								</div>
								<div className="hours">
									<p>7:30 am - 6:30 pm</p>
									<p>7:30 am - 6:30 pm</p>
									<p>7:30 am - 6:30 pm</p>
									<p>8:00 am - 6:30 pm</p>
									<p>7:30 am - 12:00 pm</p>
								</div>
							</div>
						</div>
						<div className="footer-logo-social2">
							<a
								href="https://www.facebook.com/GroveSpineSports"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img className="footer-facebook2" src={facebook} alt="facebook" />
							</a>
							<a
								href="https://www.instagram.com/grovespinesports"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img className="footer-instagram2" src={instagram} alt="instagram" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
