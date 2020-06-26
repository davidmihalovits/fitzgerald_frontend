import React from 'react';
import './App.sass';
import NavBar from './components/navbar/navbar';
import Header from './components/header/header';
import Who from './components/who/who';
import Ourservices from './components/ourservices/ourservices';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import ScrollToTop from 'react-scroll-up';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Header />
			<Who />
			<Ourservices />
			<About />
			<Contact />
			<hr />
			<Footer />
			<ScrollToTop easing={'easeInOutQuad'} duration={1300} showUnder={360}>
				<FontAwesomeIcon icon={faCaretUp} size="4x" className="caret-fa" />
			</ScrollToTop>
		</div>
	);
};

export default App;
