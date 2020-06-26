import React, { Component } from 'react';
import './ourservices.sass';
import services1 from '../../assets/services1.png';
import services2 from '../../assets/services2.png';
import services3 from '../../assets/services3.png';
import services4 from '../../assets/services4.png';
import services5 from '../../assets/services5.png';
import services6 from '../../assets/services6.png';
import services7 from '../../assets/services7.png';
import Button from '@material-ui/core/button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Active from './modal/active';
import Soft from './modal/soft';
import Chiro from './modal/chiro';
import Dry from './modal/dry';
import Rehab from './modal/rehab';
import Sport from './modal/sport';
import Taping from './modal/taping';

export class Ourservices extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openModal: false,
			showModalActive: false,
			showModalSoft: false,
			showModalChiro: false,
			showModalDry: false,
			showModalRehab: false,
			showModalSport: false,
			showModalTaping: false,
		};
		this.closeModal = this.closeModal.bind(this);
	}

	openModalActive = () => {
		this.setState({
			showModalActive: true,
			openModal: true,
		});
	};
	openModalSoft = () => {
		this.setState({
			showModalSoft: true,
			openModal: true,
		});
	};
	openModalChiro = () => {
		this.setState({
			showModalChiro: true,
			openModal: true,
		});
	};
	openModalDry = () => {
		this.setState({
			showModalDry: true,
			openModal: true,
		});
	};
	openModalRehab = () => {
		this.setState({
			showModalRehab: true,
			openModal: true,
		});
	};
	openModalSport = () => {
		this.setState({
			showModalSport: true,
			openModal: true,
		});
	};
	openModalTaping = () => {
		this.setState({
			showModalTaping: true,
			openModal: true,
		});
	};

	closeModal = () => {
		this.setState({
			openModal: false,
			showModalActive: false,
			showModalSoft: false,
			showModalChiro: false,
			showModalDry: false,
			showModalRehab: false,
			showModalSport: false,
			showModalTaping: false,
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
			<div className="ourservices">
				<h1>OUR SERVICES</h1>
				<div className="our-services-flex">
					<div className="ourservices-image-container">
						<img className="img-services1" src={services1} alt="" />
					</div>
					<div className="our-services-flex-text">
						<h2>Active Release Technique</h2>
						<p>
							The goal of ART® is to break up the adhesions or scar tissue commonly found in acute and
							chronic soft tissue injuries. Soft tissue most commonly refers to muscle, tendon, ligament
							and nerve. This scar tissue forms as a result of acute injury or repetitive overuse
							conditions. ART® works to eliminate the pain and dysfunction associated with these
							adhesions. It accomplishes this by manually treating the affected tissue with precisely
							directed tension while combining specific patient movements.
						</p>
						<div className="information-button-container">
							<Button onClick={this.openModalActive}>More information</Button>
						</div>
					</div>
				</div>
				<div className="our-services-flex">
					<div className="ourservices-image-container">
						<img className="img-services2" src={services2} alt="" />
					</div>
					<div className="our-services-flex-text">
						<h2>Soft Tissue & Muscle Therapy</h2>
						<p>
							Instrument Assisted Soft Tissue Mobilization is another treatment mode to resolve pain and
							tightness in the body. This approach to fascia work reduces friction which allows a
							preciseness, sensitivity and depth that cannot be accomplished by the practitioner directly.
						</p>
						<div className="information-button-container">
							<Button onClick={this.openModalSoft}>More information</Button>
						</div>
					</div>
				</div>
				<div className="our-services-flex">
					<div className="ourservices-image-container">
						<img className="img-services3" src={services3} alt="" />
					</div>
					<div className="our-services-flex-text">
						<h2>Chiropractic</h2>
						<p>
							Chiropractic is a manual approach to health care which includes patient assessment,
							diagnosis and treatment. In particular, chiropractors assess patients for disorders related
							to the spine, pelvis, and extremity joints, as well as their effect on the nervous system.
							As a result of taking a patient history and performing a physical assessment, chiropractors
							are able to provide a differential diagnosis for the patient's presenting condition(s) and
							develop a comprehensive treatment plan.
						</p>
						<div className="information-button-container">
							<Button onClick={this.openModalChiro}>More information</Button>
						</div>
					</div>
				</div>
				<div className="our-services-flex">
					<div className="ourservices-image-container">
						<img className="img-services4" src={services4} alt="" />
					</div>
					<div className="our-services-flex-text">
						<h2>Dry Needling</h2>
						<p>
							Dry needling and acupuncture are similar in the sense that the same equipment is used-
							sterile monofilament acupuncture needles. They way that dry needling is taught and used is
							what makes it different from acupuncture. Dry needling is used to diagnose and treat
							musculoskeletal issues, where acupuncture is used for a holistic reason following
							traditional Chinese Medicine beliefs. Acupuncture follows meridians that are associated with
							certain points that correspond to the issue the patient presents with. Dry needling is
							sometimes described as an "intramuscular manual therapy" which means doing manual therapy on
							the inside of the muscle.
						</p>
						<div className="information-button-container">
							<Button onClick={this.openModalDry}>More information</Button>
						</div>
					</div>
				</div>
				<div className="our-services-flex">
					<div className="ourservices-image-container">
						<img className="img-services5" src={services5} alt="" />
					</div>
					<div className="our-services-flex-text">
						<h2>Rehab Exercises</h2>
						<p>
							Exercise is an essential factor in injury prevention, sports conditioning, and injury
							rehabilitation. We can help you with muscular imbalances, faulty neuromuscular coordination,
							inadequate ligament or tendon strength, inadequate muscle or cardiovascular endurance,
							inadequate muscle bulk, problems with flexibility and problems related to body composition.
						</p>
						<div className="information-button-container">
							<Button onClick={this.openModalRehab}>More information</Button>
						</div>
					</div>
				</div>
				<div className="our-services-flex">
					<div className="ourservices-image-container">
						<img className="img-services6" src={services6} alt="" />
					</div>
					<div className="our-services-flex-text">
						<h2>Sport Performances</h2>
						<p>
							Performance Care is a suite of services provided at FSSC individually crafted to improve an
							athlete’s performance in his or her chosen sport. We know that subtle or dramatic changes in
							the physiology of an athlete’s body can have a tremendous impact upon the time and effort
							required to perform an activity. A difference of just a few seconds improvement in a
							runner’s performance can mean the difference between a win or loss. However, difficult
							training regimes, repetitive motions (swimming, running, cycling), and overworked muscles
							all place a great deal of stress on an athlete’s body.
						</p>
						<div className="information-button-container">
							<Button onClick={this.openModalSport}>More information</Button>
						</div>
					</div>
				</div>
				<div className="our-services-flex">
					<div className="ourservices-image-container">
						<img className="img-services7" src={services7} alt="" />
					</div>
					<div className="our-services-flex-text">
						<h2>Taping</h2>
						<p>
							Kinesio Taping Method involves taping over and around muscles in order to improve muscular
							function, decrease pain or abnormal skin sensations, improve lymphatic flow to decrease
							swelling and bruising, and assist in proper alignment of joints. Due to the specific type of
							tape used, Kinesio Taping allows for full range of motion of the injured tissues while
							maintaining support.
						</p>
						<div className="information-button-container">
							<Button onClick={this.openModalTaping}>More information</Button>
						</div>
					</div>
				</div>
				<a href="https://fitzgeraldspinesports.janeapp.com" target="_blank" rel="noopener noreferrer">
					<Button className="book-now">Book now</Button>
				</a>
				{this.state.showModalActive && <Active closeModal={this.closeModal} />}
				{this.state.showModalSoft && <Soft closeModal={this.closeModal} />}
				{this.state.showModalChiro && <Chiro closeModal={this.closeModal} />}
				{this.state.showModalDry && <Dry closeModal={this.closeModal} />}
				{this.state.showModalRehab && <Rehab closeModal={this.closeModal} />}
				{this.state.showModalSport && <Sport closeModal={this.closeModal} />}
				{this.state.showModalTaping && <Taping closeModal={this.closeModal} />}
			</div>
		);
	}
}

export default Ourservices;
