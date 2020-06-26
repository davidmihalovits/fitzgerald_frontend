import React, { Component } from 'react';
import './about.sass';
import Button from '@material-ui/core/button';
import brian from '../../assets/brian.jpg';
import reilly from '../../assets/reilly.png';
import speares from '../../assets/speares.png';
import kristen from '../../assets/kristen.png';
import suz from '../../assets/suz.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Suz from './modal/suz';
import Kristen from './modal/kristen';
import Speares from './modal/speares';
import Reilly from './modal/reilly';
import Brian from './modal/brian';

export class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openModal: false,
			showModalSuz: false,
			showModalKristen: false,
			showModalSpeares: false,
			showModalReilly: false,
			showModalBrian: false,
		};
		this.closeModal = this.closeModal.bind(this);
	}

	openModalSuz = () => {
		this.setState({
			showModalSuz: true,
			openModal: true,
		});
	};
	openModalKristen = () => {
		this.setState({
			showModalKristen: true,
			openModal: true,
		});
	};
	openModalSpeares = () => {
		this.setState({
			showModalSpeares: true,
			openModal: true,
		});
	};
	openModalReilly = () => {
		this.setState({
			showModalReilly: true,
			openModal: true,
		});
	};
	openModalBrian = () => {
		this.setState({
			showModalBrian: true,
			openModal: true,
		});
	};

	closeModal = () => {
		this.setState({
			showModalSuz: false,
			showModalKristen: false,
			showModalSpeares: false,
			showModalReilly: false,
			showModalBrian: false,
			openModal: false,
		});
	};

	render() {
		if (this.state.openModal) {
			document.body.classList.add('modal-open');
		}
		if (!this.state.openModal) {
			document.body.classList.remove('modal-open');
		}

		AOS.init({
			duration: 400,
		});

		return (
			<div className="about">
				<h1>ABOUT US</h1>
				<p>
					At Fitzgerald Spine & Sports Care, our primary focus is to provide excellent treatment for
					neuromusculoskeletal injuries, while achieving individualized health and performance goals that
					exceed our patient's expectations. Our highly skilled professionals blend traditional methods with
					innovative techniques to speed healing time and return patients back to their active lifestyles.
				</p>
				<div className="members">
					<div className="brian-reilly-speares">
						<div className="member">
							<img src={brian} alt="brian" style={{ borderRadius: '50%', width: '92px' }} />
							<h2>Dr. Fitzgerald</h2>
							<p>Sports Medicine, Shoulders, Neck, Back / Spinal Conditions, Knee, Ankle & Foot</p>
							<Button onClick={this.openModalBrian}>Read more</Button>
						</div>
						<div className="member">
							<img src={reilly} alt="reilly" />
							<h2>Dr. Reilly</h2>
							<p>
								Sports Medicine, Shoulders, Neck, Back / Spinal Conditions, Knee, Pediatrics and
								Pregnancy
							</p>
							<Button onClick={this.openModalReilly}>Read more</Button>
						</div>
						<div className="member">
							<img src={speares} alt="speares" />
							<h2>Dr. Speares</h2>
							<p>
								Sports Medicine, Shoulders, Neck, Back / Spinal Conditions, Dry Needling, Rehabilitation
							</p>
							<Button onClick={this.openModalSpeares}>Read more</Button>
						</div>
					</div>
					<div className="kristen-suz">
						<div className="member">
							<img src={kristen} alt="kristen" />
							<h2>Kristen Magee PT, MSPT</h2>
							<p>
								Rehabilitation and Therapeutic Exercise, Active Release Technique, Yoga and Dance
								Injuries
							</p>
							<Button onClick={this.openModalKristen}>Read more</Button>
						</div>
						<div className="member">
							<img src={suz} alt="suz" />
							<h2>Suzanne - Office Manager</h2>
							<Button onClick={this.openModalSuz}>Read more</Button>
						</div>
					</div>
				</div>
				{this.state.showModalSuz && <Suz closeModal={this.closeModal} />}
				{this.state.showModalKristen && <Kristen closeModal={this.closeModal} />}
				{this.state.showModalSpeares && <Speares closeModal={this.closeModal} />}
				{this.state.showModalReilly && <Reilly closeModal={this.closeModal} />}
				{this.state.showModalBrian && <Brian closeModal={this.closeModal} />}
			</div>
		);
	}
}

export default About;
