import React from 'react';


class Navbar extends React.Component {
  render() {
  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
                <a className="navbar-brand logo text-uppercase" href="/home-one">
                <img src="images/logo.png" width="200" height="70"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-center" id="mySidenav">
                        <li className="nav-item active">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#features" className="nav-link">About</a>
								<ul>
										<li><a href="#welcome">Who We Are</a></li>
										<li><a href="#vision">Our Vision</a></li>	
                                        <li><a href="#statement">Mission Statement</a></li>										
										<li><a href="#value">Our Core Values</a></li>
										<li><a href="#whycoaching">Why Coaching</a></li>
                                        <li><a href="#team">Meet Our Team</a></li>
									</ul>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link">Coaching</a>
                            <ul>
										<li><a href="#peformanceCoaching">Performance Coaching</a></li>
                                        <li><a href="ourstory.html">Skills Coaching</a></li>
										<li><a href="ourvision.html">Career Coaching</a></li>	
                                        <li><a href="ourvision.html">Personal or life coaching</a></li>										
										<li><a href="ourcorevalues.html">Executive Coaching</a></li>
									</ul>
                        </li>

                        <li className="nav-item">
                            <a href="#services" className="nav-link">Services</a>
                            <ul>
										<li><a href="#peformanceCoaching">Areas of Focus</a></li>
                                        <li><a href="#pricing">Pricing</a></li>
                                        <li><a href="#process">Our Process</a></li>										
									</ul>
                        </li>
                        
                        {/* <li className="nav-item">
                            <a href="login" className="nav-link">My Account</a>
                        </li>
                        <li className="nav-item">
                            <a href="#team" className="nav-link">Events</a>
                            <ul>
										<li><a href="#services">Seminars</a></li>
                                        <li><a href="ourstory.html">Workshops</a></li>
										<li><a href="ourvision.html">Public Speaking</a></li>	
									</ul>
                        </li>
                        <li className="nav-item">
                            <a href="#team" className="nav-link">Booking</a>
                            <ul>
										<li><a href="ourstory.html">Performance Coach</a></li>
                                        <li><a href="ourstory.html">Life Coach</a></li>
										<li><a href="ourvision.html">Speaker</a></li>	
									</ul>
                        </li>
                        <li className="nav-item">
                            <a href="#blog" className="nav-link">Blog</a>
                        </li> */}
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <div className="nav-button ml-auto">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Get Free Coaching Consultation</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;