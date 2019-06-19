import React from 'react';
import { Link } from 'react-router-dom';

class Value extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="value">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="tit3 text-center">Our Core Values</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle text-muted text-center font-secondary padding-t-30">Our core value is to bring transformation to people’s lives around the globe by enabling them to find a clear purpose in their life while optimizing the performance in the workplace. We want to see people fulfil their life long dreams by reaching their goals and release the power within them. 
					Working smarter and not harder, having a balanced life while enjoying what they do.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 text-center process-left-icon-1">
                    <i className="pe-7s-angle-right"></i>
                </div>
                <div className="col-lg-6 text-center process-left-icon-2">
                    <i className="pe-7s-angle-right"></i>
                </div>
            </div>
			<div className="row margin-t-30">
                    <div className="col-lg-4">
                        <div className="blog-box margin-t-30 hover-effect">
                            <img src="images/partners3.png" className="img-fluid" alt="" />
                            <div>
                                <h5 className="mt-4 text-muted">We Coach by Examples</h5>
                                <h4 className="mt-3"><Link to="JavaScript:Void(0);" className="blog-title">SET YOUR PATH TO PERSONAL GREATNESS</Link></h4>
                                <p className="text-muted">Learn how you can achieve extraordinary results in your life and consistently sustain this level of perfomance over an extended period of time...</p>
                                <div className="mt-3">
                                    <Link to="JavaScript:Void(0);" className="read-btn">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="blog-box margin-t-30 hover-effect">
						<div class="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30 hov-img-zoom"></div>
                            <img src="images/oneononecoaching.jpeg" className="img-fluid" alt="" width="400" height="40"/>
                            <div>
                                <h5 className="mt-4 text-muted">We Optimize Work Performance</h5>
                                <h4 className="mt-3"><Link to="JavaScript:Void(0);" className="blog-title">WE ARE WITH YOU EVERY STEP OF THE WAY</Link></h4>
                                <p className="text-muted">Learn how you can achieve extraordinary results in your life and consistently sustain this level of perfomance over an extended period of time.</p>
                                <div className="mt-3">
                                    <Link to="JavaScript:Void(0);" className="read-btn">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="blog-box margin-t-30 hover-effect">
                            <img src="images/coachingbanner2.jpeg" className="img-fluid" alt="" />
                            <div>
                                <h5 className="mt-4 text-muted">Travelling</h5>
                                <h4 className="mt-3"><Link to="JavaScript:Void(0);"className="blog-title">WE STRATEGICALLY LEAD YOU TO REAL SUCCESS</Link></h4>
                                <p className="text-muted">Wether you are looking to start your small business, becoming financially stable or live a well balanced life; a life coach can assist you...</p>
                                <div className="mt-3">
                                    <Link to="JavaScript:Void(0);" className="read-btn">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  	);
  }
}
export default Value;