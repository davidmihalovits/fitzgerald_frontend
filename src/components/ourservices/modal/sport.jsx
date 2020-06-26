import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/button';
import './servicesModal.sass';
import sport1 from '../../../assets/sport1.png';
import sport2 from '../../../assets/sport2.png';
import sport3 from '../../../assets/sport3.png';
import sport4 from '../../../assets/sport4.png';

export class Sport extends Component {
	constructor(props) {
		super(props);
		this.state = {
			PC: true,
			GB: false,
			OG: true,
			FMS: false,
			YA: false,
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
				<h1>Performance Care</h1>
				<Button
					className={`button-change-text ${this.state.PC ? `selected` : `not-selected`}`}
					onClick={() => this.setState({ PC: true, GB: false, YA: false })}
				>
					PC
				</Button>
				{/*<Button
					className={`button-change-text ${this.state.GB ? `selected` : `not-selected`}`}
					onClick={() => this.setState({ PC: false, GB: true, YA: false })}
				>
					GB
				</Button>*/}
				<Button
					className={`button-change-text ${this.state.YA ? `selected` : `not-selected`}`}
					onClick={() => this.setState({ PC: false, GB: false, YA: true })}
				>
					YA
				</Button>
				<div className="modal-description">
					{this.state.PC && (
						<div>
							<h2>What is Performance Care?</h2>
							<p>
								Performance Care is a suite of services provided at FSSC individually crafted to improve
								an athlete’s performance in his or her chosen sport. We know that subtle or dramatic
								changes in the physiology of an athlete’s body can have a tremendous impact upon the
								time and effort required to perform an activity. A difference of just a few seconds
								improvement in a runner’s performance can mean the difference between a win or loss.
								However, difficult training regimes, repetitive motions (swimming, running, cycling),
								and overworked muscles all place a great deal of stress on an athlete’s body. These
								stresses cause physiological changes that cannot be counter-acted by simple exercise
								regimes. They require physical manipulation of the tissues to remove the problem and
								return the athlete to optimal performance in any sport, from triathlon, weight lifting,
								skiing and tennis to running, cycling, golf, and swimming.
							</p>
							<h2>How does Performance Care Differ from the Cumulative Injury Care</h2>
							<p>
								Performance Care is used to increase the performance of an athlete (speed, endurance,
								strength) by working with soft tissues, joints, and body awareness to enhance their
								performance. In contrast, Injury Care deals with known, existing, identifiable injuries
								to soft tissue. Its goal is to address the cause of these injuries, and return the soft
								tissues to normal condition. Performance Care identifies unnoticed or hidden
								restrictions in the motion of the body, and removes these restrictions to restore full
								function. Performance Care requires a good understanding of the biomechanics of the
								human body.
							</p>
							<h2>When to use Performance Care</h2>
							<p>
								Performance Care treatment methods are used after treating existing pain, dysfunction,
								or trauma. That is, after Injury Care has been applied. Subsequently, Performance Care
								methods are employed to address the most significant dysfunction affecting performance.
								Often, these may be the same areas as the existing pain or dysfunction.
							</p>
							<br />
							<p>Contact us for more information about Performance Care.</p>
						</div>
					)}
					{this.state.GB && (
						<div>
							<div>
								<Button
									style={{ margin: '0px' }}
									className={`button-change-text ${this.state.OG ? `selected` : `not-selected`}`}
									onClick={() => this.setState({ OG: true, FMS: false })}
								>
									OG
								</Button>
								<Button
									style={{ margin: '0px' }}
									className={`button-change-text ${this.state.FMS ? `selected` : `not-selected`}`}
									onClick={() => this.setState({ OG: false, FMS: true })}
								>
									FMS
								</Button>
							</div>
							{this.state.OG && (
								<div>
									<h2>Optogait – #1 Functional Assessment System.</h2>
									<p>
										OptoGait is a superior tool of gait analysis which we believe will become the
										standard method for objectively measuring and reporting the efficacy and
										progress of your Chiropractic care.
									</p>
									<br />
									<p>
										OptoGait acquires numerical parameters in real-time for gait, running, jumping
										and march-in-place tests that can be viewed immediately. The easy to read report
										contains all data, and asymmetries between the two legs are highlighted
										instantly.
									</p>
									<img src={sport1} alt="" />
									<p>
										OptoGait does not only detect the numerical data, but, via small cameras, which
										can be freely positioned, it allows the user to acquire images of carried out
										tests, synchronizing them perfectly with detected events. Without the need for
										any further synchronization between hardware and cameras, the numerous benefits
										of cross verification of data and images can be fully used. A more detailed
										video analysis can be had by further utilizing the dedicated utility (angle,
										distance calculus, graphic tools, etc.).
									</p>
									<br />
									<p>
										This technology is being used in the top Olympic training camps, International
										Professional Sports Clubs, by top Chiropractors in the NFL for post-concussion,
										return-to-play assessment and by the top sports and rehab DC’s in the world.
									</p>
									<img src={sport2} alt="" />
									<p>Contact us for more information about OptoGait.</p>
								</div>
							)}
							{this.state.FMS && (
								<div>
									<h2>Functional Movement Systems</h2>
									<p>
										The Functional Movement Screen (FMS) is the product of an exercise philosophy
										known as Functional Movement Systems. This exercise philosophy and corresponding
										set of resources is based on sound science, years of innovation, and current
										research.
									</p>
									<img src={sport3} alt="" />
									<h2>How it Works - Simplifying Movement</h2>
									<p>
										Put simply, the FMS is a ranking and grading system that documents movement
										patterns that are key to normal function. By screening these patterns, the FMS
										readily identifies functional limitations and asymmetries. These are issues that
										can reduce the effects of functional training and physical conditioning and
										distort body awareness.
									</p>
									<br />
									<p>
										The FMS generates the Functional Movement Screen Score, which is used to target
										problems and track progress. This scoring system is directly linked to the most
										beneficial corrective exercises to restore mechanically sound movement patterns.
									</p>
									<br />
									<p>
										Exercise professionals monitor the FMS score to track progress and to identify
										those exercises that will be most effective to restore proper movement and build
										strength in each individual.
									</p>
									<h2>What it Does - Widespread Benefits</h2>
									<p>
										The FMS simplifies the concept of movement and its impact on the body. Its
										streamlined system has benefits for everyone involved - individuals, exercise
										professionals, and physicians.
									</p>
									<br />
									<p>
										<span style={{ color: '#4DB8B8' }}>Communication</span> - The FMS utilizes
										simple language, making it easy for individuals, exercise professionals, and
										physicians to communicate clearly about progress and treatment.
									</p>
									<br />
									<p>
										<span style={{ color: '#4DB8B8' }}>Evaluation</span> - The screen effortlessly
										identifies asymmetries and limitations, diminishing the need for extensive
										testing and analysis.
									</p>
									<br />
									<p>
										<span style={{ color: '#4DB8B8' }}>Standardization</span> - The FMS creates a
										functional baseline to mark progress and provides a means to measure
										performance.
									</p>
									<br />
									<p>
										<span style={{ color: '#4DB8B8' }}>Safety</span> - The FMS quickly identifies
										dangerous movement patterns so that they can be addressed. It also indicates an
										individual’s readiness to perform exercise so that realistic goals can be set
										and achieved.
									</p>
									<br />
									<p>
										<span style={{ color: '#4DB8B8' }}>Corrective Strategies</span> - The FMS can be
										applied at any fitness level, simplifying corrective strategies of a wide array
										of movement issues. It identifies specific exercises based on individual FMS
										scores to instantly create customized treatment plans.
									</p>
									<br />
									<p>
										Contact Us with your questions or for more information about treatment with
										Functional Movement Screening.
									</p>
								</div>
							)}
						</div>
					)}
					{this.state.YA && (
						<div>
							<h2>Keep Young Athletes Healthy and Fit</h2>
							<p>
								In today’s age of health and fitness, more and more kids are involved in sporting
								activities. Although being part of a football, soccer or Little League team is an
								important rite of passage for many children, parents and their children could be
								overlooking the importance of proper nutrition and body-conditioning needed for
								preventing injuries on and off the playing field.
							</p>
							<br />
							<p>
								The majority, if not all, sports are good, provided that the child prepares
								appropriately. Without proper preparation, playing any sport can turn into a bad
								experience. There are structural and physical developmental issues that need to be taken
								into consideration before children undertake certain sports.
							</p>
							<br />
							<p>
								Highly competitive sports such as football, gymnastics and wrestling follow rigorous
								training schedules that can be potentially dangerous to an adolescent or teenager. The
								best advice for parents who have young athletes in the family is to help them prepare
								their bodies and to learn to protect themselves from sports related injuries before they
								happen.
							</p>
							<br />
							<p>
								Proper warm up, stretching and strength-training exercises are essential for kids
								involved in sports.
							</p>
							<br />
							<p>
								Fitzgerald Spine & Sports Care providers work with teens and children who are involved
								in sports, assessing their structure and physical capabilities to help current injuries
								heal and prevent future injuries.
							</p>
							<img style={{ height: '600px' }} src={sport4} alt="" />
							<p>Contact Us for more information about care for Young Athletes.</p>
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
