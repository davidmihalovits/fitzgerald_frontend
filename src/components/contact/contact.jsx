import React from 'react';
import axios, { post } from 'axios';
import SignatureCanvas from 'react-signature-canvas';
import { saveAs } from 'file-saver';
import './contact.sass';
import Reaptcha from 'reaptcha';
import Button from '@material-ui/core/button';
import GSMap from '../map/map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import https from 'https';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			trimmedDataURL: null,
			trimmedDataURLTry: null,
			file: null,
			verified: false,
			recaptchaRes: '',
			loading: false,
			showSentMessage: false,
			showNotSentMessage: false,
			showEmailError: false,
			showMessageError: false,
			showNameError: false,
			messageSent: false,
		};
	}

	onVerify = (recaptchaResponse) => {
		this.setState({
			verified: true,
			recaptchaRes: recaptchaResponse,
		});
	};

	onExpire = (recaptchaResponse) => {
		this.setState({ verified: false, recaptchaRes: '' });
	};

	/*sigPad = {};
	clear = () => {
		this.sigPad.clear();
		this.setState({ trimmedDataURLTry: null });
	};
	trimTry = () => {
		this.setState({ trimmedDataURLTry: this.sigPad.getTrimmedCanvas().toDataURL('image/png') });
	};

	fileUpload(file) {
		const url = 'http://localhost:3000/create-pdf';
		const formData = new FormData();
		formData.append('file', file);
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};
		return post(url, formData, config);
	}*/

	handleSubmit = async (e) => {
		e.preventDefault();

		/*this.setState({ trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png') });*/

		/*await this.fileUpload(this.state.file).then((response) => {
			this.setState({ file: response });
			console.log(this.state.file);
		});*/

		/*await axios
			.post('/create-pdf', this.state)
			.then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
			.then((res) => {
				const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

				saveAs(pdfBlob, 'newpdf.pdf');
			});*/

		// eslint-disable-next-line no-useless-escape
		const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!this.state.email.match(regEx)) {
			this.setState({ showEmailError: true }, () => {
				setTimeout(() => this.setState({ showEmailError: false }), 4000);
			});
		}

		if (!this.state.email.match(regEx)) {
			return null;
		}

		this.setState({ loading: true });

		await axios({
			method: 'POST',
			url: 'https://fitzgeraldspinesports.herokuapp.com/api/contact',
			data: this.state,
		}).then((response) => {
			if (response.data.status === 'success') {
				this.setState({
					verified: false,
					recaptchaRes: '',
					showSentMessage: true,
					name: '',
					email: '',
					message: '',
					loading: false,
					messageSent: true,
				});
			} else if (response.data.status === 'fail') {
				this.setState({ verified: false, recaptchaRes: '', showNotSentMessage: true, loading: false });
			}
		});
	};

	render() {
		// eslint-disable-next-line no-useless-escape
		const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const enabled = this.state.email.length > 0 && this.state.name.length > 0 && this.state.message.length > 0;

		const showtickEmail = this.state.email.match(regEx);
		const showtickMessage = this.state.message.trim().length > 0;
		const showtickName = this.state.name.trim().length > 0;

		const showcrossEmail = !this.state.email.match(regEx) && !this.state.email.trim().length < 1;

		return (
			<div className="contact">
				<h1>CONTACT US</h1>
				<p>
					At Fitzgerald Spine & Sports Care, our primary focus is to provide excellent treatment for
					neuromusculoskeletal injuries, while achieving individualized health and performance goals that
					exceed our patient's expectations. Our highly skilled professionals blend traditional methods with
					innovative techniques to speed healing time and return patients back to their active lifestyles.
				</p>
				<div className="contact-flexbox">
					<form onSubmit={this.handleSubmit.bind(this)} method="POST">
						<label htmlFor="name">Name</label>
						<br />
						<input
							onChange={this.onNameChange.bind(this)}
							value={this.state.name}
							type="text"
							name="name"
							placeholder="Your name"
						/>
						{showtickName && (
							<div className="showtick-container">
								<FontAwesomeIcon className="showtick-tick" color={'#4DB8B8'} icon={faCheck} />
							</div>
						)}
						<br />
						<label htmlFor="email">Email</label>
						<br />
						<input
							onChange={this.onEmailChange.bind(this)}
							type="text"
							name="email"
							placeholder="Your email address"
							value={this.state.email}
							className={this.state.showEmailError ? 'error-input' : ''}
						/>
						{showtickEmail && (
							<div className="showtick-container">
								<FontAwesomeIcon className="showtick-tick" color={'#4DB8B8'} icon={faCheck} />
							</div>
						)}
						{showcrossEmail && (
							<div className="showtick-container">
								<FontAwesomeIcon className="showtick-tick" color={'#4DB8B8'} icon={faTimes} />
							</div>
						)}
						<br />
						{this.state.showEmailError && <span className="error-message">Invalid email address.</span>}
						<label htmlFor="message">Message</label>
						<br />
						<textarea
							onChange={this.onMessageChange.bind(this)}
							type="text"
							name="message"
							placeholder="Your message"
							value={this.state.message}
							rows="6"
						/>
						{showtickMessage && (
							<div className="showtick-container">
								<FontAwesomeIcon className="showtick-tick" color={'#4DB8B8'} icon={faCheck} />
							</div>
						)}
						<br />
						<Reaptcha
							ref={(e) => (this.captcha = e)}
							sitekey="6LfWuKIZAAAAAOOV-1P-8KAebweubmrMxd5hhVnU"
							onVerify={this.onVerify}
							onExpire={this.onExpire}
							className="recaptcha"
						/>
						{this.state.messageSent ? (
							<div className="message-sent-no-button">
								<FontAwesomeIcon color={'#4DB8B8'} size="3x" icon={faCheck} />
							</div>
						) : (
							<div className="contact-send">
								<Button type="submit" disabled={this.state.loading || !enabled || !this.state.verified}>
									Send
									{this.state.loading && (
										<span className="spinner">
											<FontAwesomeIcon spin icon={faSpinner} />
										</span>
									)}
								</Button>
							</div>
						)}
						{/*{this.state.showSentMessage ? (
							<p className="sent-message">Thank you for your message!</p>
						) : null}*/}
						{this.state.showNotSentMessage ? (
							<p className="sent-message">Message couldn't be sent. Please call us.</p>
						) : null}
						{/*<div className="sigContainer">
						<SignatureCanvas
							ref={(ref) => {
								this.sigPad = ref;
							}}
							backgroundColor="white"
							canvasProps={{ className: 'sigPad' }}
						/>
						{this.state.trimmedDataURLTry ? (
							<img className="trimmed" alt="" src={this.state.trimmedDataURLTry} />
						) : null}
					</div>*/}
					</form>
					{/*<button onClick={this.clear}>Clear</button>
				<button onClick={this.trimTry}>Trim</button>*/}
					<GSMap />
				</div>
			</div>
		);
	}
	onNameChange(event) {
		this.setState({ name: event.target.value });
	}

	onEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	onMessageChange(event) {
		this.setState({ message: event.target.value });
	}
}

export default Contact;
