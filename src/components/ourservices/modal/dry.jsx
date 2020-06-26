import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/button';
import './servicesModal.sass';
import dry1 from '../../../assets/dry1.jpg';

export class Dry extends Component {
	constructor(props) {
		super(props);
		this.closeModal = this.closeModal.bind(this);
	}

	closeModal() {
		this.props.closeModal();
	}

	render() {
		return (
			<div data-aos="fade-up" className="modal-services">
				<FontAwesomeIcon
					onClick={this.props.closeModal}
					size="3x"
					className="modal-x"
					color={'#4DB8B8'}
					icon={faTimes}
				/>
				<h1>Dry Needling</h1>
				<div className="modal-description">
					<h2>What is the difference between dry needling and acupuncture?</h2>
					<p>
						Dry needling and acupuncture are similar in the sense that the same equipment is used- sterile
						monofilament acupuncture needles. They way that dry needling is taught and used is what makes it
						different from acupuncture. Dry needling is used to diagnose and treat musculoskeletal issues,
						where acupuncture is used for a holistic reason following traditional Chinese Medicine beliefs.
						Acupuncture follows meridians that are associated with certain points that correspond to the
						issue the patient presents with. Dry needling is sometimes described as an "intramuscular manual
						therapy" which means doing manual therapy on the inside of the muscle.
					</p>
					<br />
					<p>
						When an exam is performed on the musculoskeletal system, soft tissue problems are typically
						found. What this means is that there is a muscle that is not working properly; it is either
						activating too much or not activating enough. Dry needling is a way to address these soft tissue
						problems, deeper. It is used in conjunction with other treatments offered such as myofascial
						release, SASTM, ultrasound, deep muscle stimulation and joint manipulation or mobilization.
					</p>
					<img style={{ height: '400px' }} src={dry1} alt="" />
					<h2>What conditions can it help?</h2>
					<p>
						Dry needling can can help with any condition where there is soft tissue disturbances. Some
						common examples include:
					</p>
					<br />
					<p>- Repetitive strain/sprain injuries</p>
					<p>- Golfer's elbow</p>
					<p>- Tennis elbow</p>
					<p>- Frozen shoulder</p>
					<p>- Sciatic pain</p>
					<p>- Muscle spasms</p>
					<p>- Lower back and hip pain</p>
					<p>- Shin spints</p>
					<p>- Knee pain</p>
					<p>- Achilles tendonitis</p>
					<p>- Plantar fasciitis</p>
					<p>- Headaches</p>
					<br />
					<p>
						People often ask what it will feel like when the needles are inserted. It is common to not feel
						when the needle penetrates the skin. At some locations, a local twitch response can create a
						brief pain response that is often described as an electric shock or cramping sensation.
					</p>
					<br />
					<p>
						After your treatment you could feel a number of different ways and have a variety of reactions
						that are typical and that should not alarm you.
					</p>
					<h2>What can I expect after treatment?</h2>
					<p>
						Below you will find the more common effects associated with Dry Needling treatment. You may feel
						very tired for a few hours, you should always drink water after treatment to help flush
						metabolic "junk" that occurs with manual therapies out of your system. Some people report
						feeling very energized and euphoric. Give some time to recover before returning to normal levels
						of activity, as your body may need some time to fully recover. If you are sore in the area of
						treatment for 24-48 hours, take a hot shower and then apply ice. Feeling sore or a dull ache is
						very typical and is often described as feeling like you just had a hard workout. You could
						develop a bruise, while not always pretty, do not be alarmed, but do report it to the doctor.
						-You may see reddened areas or feels a raised or lumpy reaction, this will typically pass within
						a few hours or by the end of the next day, and these are typical tissue reactions that are of no
						concern. -You may feel a temporary increase in your symptoms but will often improve the next
						day. Remember to report any and all of your reactions to the doctor whether good or bad.
					</p>
					<br />
					<p>Contact us for more information about Dry Needling.</p>
				</div>
				<a href="https://fitzgeraldspinesports.janeapp.com" target="_blank" rel="noopener noreferrer">
					<Button>Book now</Button>
				</a>
				<div className="overlay">&nbsp;</div>
			</div>
		);
	}
}

export default Dry;
