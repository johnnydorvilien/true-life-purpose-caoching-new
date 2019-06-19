import React from 'react';

class Value extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="value">
           <div class="value">
		<div class="container">
			<div class="row">					
					<div class="welcome-title-text">
						<h1>WELCOME</h1>
					</div>
				</div>
				<div class="row">
					<div class="row">
					<div class="col-lg-6">
						<div class="about_content">
							<div class="welcome-top-text">"Work Performance Optimization Coaching is What We Do!"</div>
							<div className="text-muted web-desc">
								<p>
								Here at True Life Purpose Coaching we define and reconnect you, the modern corporate  employee 
                                with your purpose in life, increase your personal growth, work performance, and, as a by product, 
                                lead you toward a path of greatness that is unique to you. 

								</p>

								<p>
                                We accomplish this goal by creating customized self-development coaching programs to help high-performance 
                                corporate employees gain clarity, prevent burnouts, and work through the very real, very sensitive problems 
                                that each of them are facing due to the high stress, fast paced work environment they find themselves in.
								</p>

								<p>
                                One thing we strongly believe at True Life Purpose Coaching is intelligent, purpose driven productivity and performance is the heartbeat 
                                of any organization. And yet so many of us find ourselves distracted and unhappy, working longer hours and getting less done. 
                                When employees experience problems, they don’t perform to their highest potential which lead to unecessary stress.
								</p>

                                <p>
                                We are here 
                                for you and well dedicated to helping guide you toward the life of your dreams, a better career, a healthy life balance and most importantly, 
                                living a life of purpose while staying focus on the path of your personal greatness.  								 								
								</p>
							</div>
							<div class="button"><a href="#">Our Area of Focus</a></div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="welcome-image hov-img-zoom"><img src="images/tile-image-1.jpg" alt="" height="350"></img>
                        </div>
					</div>
					<a href="ourstory.html" class="txt4">
						Learn More About Us
						<i class="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</div>
        </div>
</section>
  	);
  }
}
export default Value;