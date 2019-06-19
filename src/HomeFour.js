import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Features from './components/Features';
import Descriptions from './components/Descriptions';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Process from './components/Process';
import Testi from './components/Testi';
import Started from './components/Started';
import Blog from './components/Blog';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Switcher from './components/Switcher';
import { Link } from 'react-router-dom';
import Aux from './hoc/Aux_';

class HomeFour extends React.Component {
  render() {

 
  	return (
        <Aux>
                {/* Navbar Component*/}
                <Navbar />

                <section className="section bg-home home-half" id="home">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row vertical-content">
                                    <div className="col-lg-7 text-white text-left margin-t-30">
                                        <h1 className="home-title">We help startups launch their products</h1>
                                        <p className="padding-t-15 home-desc home-subtitle-width-100">Etiam sed.Interdum consequat proin vestibulum className at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                                        <Link to="JavaScript:Void(0);" className="btn btn-custom margin-t-30 waves-effect waves-light">Get Started <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                    <div className="col-lg-4 offset-lg-1 margin-t-30">
                                        <div className="home-registration-form bg-white">
                                        <div class="single-price">
                        <div class="top-sec d-flex justify-content-between">
                            <div class="top-left">
                                <h4>Standard</h4>
                                <p>30 minutes</p> 
                                <p>Intake Session</p>
                                <div class="row">
                                        <div class="col">
                                            <div class="button services_button ml-auto mr-auto"><a href="#"><span>View Details</span><span>View Details</span></a></div>
                                        </div>
                                    </div>
                            </div>
                            <div class="top-right">
                                <h1>FREE</h1>
                            </div>
                        </div>
                        
                    
                        <div class="end-sec">
                            <ul>
                                <li>- Introduction</li>
                                <li>- Setting Expection</li>
                                <li>- Session Discussion</li>
                                <li>- Payment tems & Agreement</li>
                                <li>- Q & A</li>
                            </ul>
                            <button class="primary-btn price-btn mt-20">Request Info<span class="lnr lnr-arrow-right"></span></button>
                        </div>								
                    </div> 
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                                 
                </section>

                {/* Services Component*/}
                <Services />

                {/* Features Component*/}
                <Features />
                
                {/* Descriptions Component*/}
                <Descriptions />

                {/* Pricing Component*/}
                <Pricing />

                {/* Team Component*/}
                <Team />

                {/* Process Component*/}
                <Process />

                {/* Testi Component*/}
                <Testi />

                {/* Started Component*/}
                <Started />

                {/* Blog Component*/}
                <Blog />

                {/* Contact Component*/}
                <Contact />

                {/* SocialMedia Component*/}
                <SocialMedia />
                
                {/* Footer Component*/}
                <Footer />

                {/* FooterLinks Component*/}
                <FooterLinks />

                {/* Switcher Component*/}
               <Switcher /> 
        </Aux>
  	);
  }
}

export default HomeFour;