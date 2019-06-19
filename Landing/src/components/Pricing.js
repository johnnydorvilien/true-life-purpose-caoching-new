import React from 'react';
import { Link } from 'react-router-dom';

class Pricing extends React.Component {
  render() {
  	return (
        <section class="price-area section-gap services" id="price">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="menu-content pb-60 col-lg-8">
                    <div class="title text-center">								
                        <h1 class="mb-10">Hourly Rate & Monthly Pricing</h1>
                    </div>
                
                </div>
            </div>					
            <div class="row">
                <div class="col-lg-4">
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
                <div class="col-lg-4">
                    <div class="single-price">
                        <div class="top-sec d-flex justify-content-between">
                            <div class="top-left">
                                <h4>Hourly</h4>
                                <p>Rate</p> 
                                <p>Per Session</p>
                                <div class="row">
                                        <div class="col">
                                            <div class="button services_button ml-auto mr-auto"><a href="#"><span>View Details</span><span>View Details</span></a></div>
                                        </div>
                                    </div>
                            </div>
                            <div class="top-right">
                                <h1>$125</h1>
                            </div>
                        </div>
                        
                        <div class="end-sec">
                            <ul>
                                <li>1 - 1 on 1 Coaching Session</li>
                                <li>Second Example</li>
                                <li>Third Example</li>
                                <li>Fourth Example</li>
                                <li>Unlimited Follow-Ups</li>
                            </ul>
                            <button class="primary-btn price-btn mt-20">Purchase Plan<span class="lnr lnr-arrow-right"></span></button>
                        </div>								
                    </div> 
                </div>	
                <div class="col-lg-4">
                    <div class="single-price">
                        <div class="top-sec d-flex justify-content-between">
                            <div class="top-left">
                                <h4>1 Month</h4>
                                <p>For</p> 
                                <p>3 Sessions/Follow-Ups</p>
                                <div class="row">
                                        <div class="col">
                                            <div class="button services_button ml-auto mr-auto"><a href="#"><span>View Details</span><span>View Details</span></a></div>
                                        </div>
                                    </div>
                            </div>
                            <div class="top-right">
                                <h1>$499</h1>
                            </div>
                        </div>
                        
                        <div class="end-sec">
                            <ul>
                                <li>3 1x1 Coaching Sessions</li>
                                <li>Second Example</li>
                                <li>Third Example</li>
                                <li>Fourth Example</li>
                                <li>Unlimited Follow-Ups</li>
                            </ul>
                            <button class="primary-btn price-btn mt-20">Purchase Plan<span class="lnr lnr-arrow-right"></span></button>
                        </div>								
                    </div> 
                </div>							
                                                                                
            </div>
        </div>	
    </section>
  	);
  }
}
export default Pricing;