import React from 'react';
import { Link } from 'react-router-dom';

class Process extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="process">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Work Process</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle text-muted text-center font-secondary padding-t-30">Our process is simple! Our coaches use number of tools, techniques, and processes designed to help the client 
                    find what drives them, where they want to go, and the best way to get there. The relationship builds on the foundation of trust and grows through various stages.</p>
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
            <div className="row margin-t-50">
                <div className="col-lg-4 plan-line">
                    <div className="text-center process-box">
                        <i className="pe-7s-pen text-custom"></i>
                        <h4 className="padding-t-15">Tell us what you need</h4>
                        <p className="text-muted">We listen and get understanding of the area of concern</p>
                    </div>
                </div>
                <div className="col-lg-4 plan-line">
                    <div className="text-center process-box">
                        <i className="pe-7s-id text-custom"></i>
                        <h4 className="padding-t-15">Get free quotes</h4>
                        <p className="text-muted">We provide package estimation that suits you best</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center process-box">
                        <i className="pe-7s-target text-custom"></i>
                        <h4 className="padding-t-15">Deliver high quality coaching services</h4>
                        <p className="text-muted">We stay we you every step pf the way until you feel satified</p>
                    </div>
                </div>
                <div className="text-center mx-auto">
                <Link to="JavaScript:Void(0);" className="btn btn-custom waves-light waves-effect margin-t-50">Get Started <i className="mdi mdi-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Process;