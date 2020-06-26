import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/button';
import './servicesModal.sass';
import taping1 from '../../../assets/taping1.png';
import taping2 from '../../../assets/taping2.png';
import taping3 from '../../../assets/taping3.png';
import taping4 from '../../../assets/taping4.png';

export class Sport extends Component {
	constructor(props) {
		super(props);
		this.state = {
			KT: true,
			ST: false,
			RT: false,
		};
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
				<h1>Taping Techniques</h1>
				<Button
					className={`button-change-text ${this.state.KT ? `selected` : `not-selected`}`}
					onClick={() => this.setState({ KT: true, ST: false, RT: false })}
				>
					KT
				</Button>
				<Button
					className={`button-change-text ${this.state.ST ? `selected` : `not-selected`}`}
					onClick={() => this.setState({ KT: false, ST: true, RT: false })}
				>
					ST
				</Button>
				<Button
					className={`button-change-text ${this.state.RT ? `selected` : `not-selected`}`}
					onClick={() => this.setState({ KT: false, ST: false, RT: true })}
				>
					RT
				</Button>
				<div className="modal-description">
					{this.state.KT && (
						<div>
							<h2>Kinesio Taping:</h2>
							<p>
								Kinesio Taping Method involves taping over and around muscles in order to improve
								muscular function, decrease pain or abnormal skin sensations, improve lymphatic flow to
								decrease swelling and bruising, and assist in proper alignment of joints. Due to the
								specific type of tape used, Kinesio Taping allows for full range of motion of the
								injured tissues while maintaining support.
							</p>
							<br />
							<p>Kinesio taping can be applied to injuries including:</p>
							<br />
							<p>- Any sprain/strain in the body</p>
							<p>- Postural Disorders</p>
							<p>- Rotator Cuff/Shoulder Injuries</p>
							<p>- Tennis/Golfer's Elbow</p>
							<p>- Carpal Tunnel Syndrome</p>
							<p>- Iliotibial Band Syndrome (ITB Syndrome)</p>
							<p>- Knee Tracking or Tendon Disorders</p>
							<p>- Ankles Sprains</p>
							<p>- Reduction of Traumatic or Post-Surgical Swelling or Bruising</p>
							<br />
							<p>Contact us for more information on the Kinesio Taping Method.</p>
						</div>
					)}
					{this.state.ST && (
						<div>
							<h2>SpiderTech Taping:</h2>
							<p>
								SpiderTech tape is a non-medicated cotton kinesiology tape that you apply to your body
								wherever it hurts.
							</p>
							<br />
							<p>
								Each Spider is made of one continuous piece of Kinesiology tape so that it integrates
								with the body in a super-functional manner. The tape has a very specific elasticity
								built into the weave pattern of the cotton fabric, which mimics the elasticity and
								thickness of human skin, allowing it to integrate, support and stabilize without
								adversely affecting healthy ranges of motion.
							</p>
							<img src={taping1} alt="" />
							<h2>What are the Spiders made of?</h2>
							<p>
								All SpiderTech products are made from the industry trusted kinesiology tape manufacturer
								from Japan.
							</p>
							<br />
							<p>
								Kinesiology taping products are engineered to mimic the thickness, weight and elasticity
								of human skin.
							</p>
							<br />
							<p>
								The material is made of high-grade 100% cotton with a 100% poly-acrylic adhesive. There
								is no latex in the product.
							</p>
							<img src={taping2} alt="" />
							<p>
								SpiderTech is water-resistant and breathable, and can be worn for many days. SpiderTech
								products are designed to be worn during strenuous exercise. The non-latex adhesive holds
								when you need it to and does not leave residue when removed.
							</p>
						</div>
					)}
					{this.state.RT && (
						<div>
							<h2>Rocktape:</h2>
							<p>
								RockTape is a special kind of tape known as kinesiology tape. First used by
								acupuncturists and chiropractors in Japan, today kinesiology tape is used by
								practitioners throughout the world to treat injuries and improve sports performance.
							</p>
							<img src={taping3} alt="" />
							<p>
								While the use of kinesiology is often associated with athletes such as Serena Williams,
								Kerri Walsh and Lance Armstrong, the reality is that RockTape is effective for the
								treatment of a wide variety of problems, not just sports injuries.
							</p>
							<h2>What is Rocktape used for?</h2>
							<p>Achilles tendonitis</p>
							<p>Plantar fasciitis</p>
							<p>Jumpers knee (PFS)</p>
							<p>ACL/MCL issues</p>
							<p>Rotator cuff</p>
							<p>Groin and hamstring pulls</p>
							<p>Lower back issues</p>
							<p>Shin splints</p>
							<p>Tennis and golf elbow</p>
							<p>Pain associated with pregnancy</p>
							<p>Postural correction</p>
							<img src={taping4} alt="" />
							<h2>Improving Sports Performance</h2>
							<p>
								While we can’t turn a 5 hour marathoner into a 3 hour runner, we do have methods to help
								you break the 3 hour barrier if you’re already close. When applied properly, Rocktape
								can help athletes improve form and decrease fatigue through better blood flow. These are
								the two most critical aspects of increasing performance in almost any sport.
							</p>
							<h2>How does Rocktape work?</h2>
							<p>
								RockTape's manufacturing process introduces a bias into the weave of the fabric so it
								stretches in one direction and not the other. This creates a bio-mechanical lifting
								mechanism that lifts the skin away from the soft tissue underneath, which allows more
								blood to move into an injured area to accelerate healing and recovery.
							</p>
							<h2>What is Rocktape made of?</h2>
							<p>
								Rocktape is a natural-hybrid product and consists of 97% cotton, 3% nylon and uses no
								drugs. The adhesive is a hypo-allergenic acrylic based adhesive and contains no latex.
							</p>
							<br />
							<p>
								Contact Us with your questions or for more information about what RockTape can do for
								you.
							</p>
						</div>
					)}
				</div>
				<a href="https://fitzgeraldspinesports.janeapp.com" target="_blank" rel="noopener noreferrer">
					<Button>Book now</Button>
				</a>
				<div className="overlay">&nbsp;</div>
			</div>
		);
	}
}

export default Sport;
