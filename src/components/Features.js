import React from 'react';
import { Link } from 'react-router-dom';

class Features extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="features">
        <div className="container">
            <div className="row vertical-content">
                <div className="col-lg-5">
                    <div className="features-box">
                        <h3>Work Performance Optimization Coaching is What We Do!</h3>
                        <p className="text-muted web-desc">We customize self-development coaching for high-performance corporate employees who want to gain clarity on their purpose, prevent burnouts and build a life of their dreams while preparing for a better future..</p>
                        <p className="text-muted web-desc">Our primary business focus is working and train corporate professional workers on how to optimize their work performance for best results. We understand high employee productivity is the heartbeat of any successful business. When employees are distracted and unhappy, their work suffers, and ultimately so does the organization. When employees experience problems, they don’t perform to their highest potential.</p>
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className="">Lack of job security</li>
                            <li className="">Missed deadlines.</li>
                            <li className="">Burnouts.</li>
                            <li className="">Mental health issues such as ADHD, Anxiety, and Depression
                            <ol>Includes not being able to share these issues with colleagues</ol></li>
                            <li className="">Lack of work life balance due to poor time management and working harder, not smarter.</li>
                            <li className="">Personal issues with relationships, family, friends due to problems at work.</li>
                            <li className="">Inability to strategic goals for further promotions and accomplishments.</li>
                            <li className="">Lack of vision and direction for one’s career.</li>
                            <li className="">Conflict resolution.</li>
                            <li className="">Lack of soft skills needed for effective, empathetic communication with direct reports, co-workers and managers .</li>
                        </ul>
                        <Link to="JavaScript:Void(0);" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="features-img features-right text-right">
                        <img src="images/tile-image-1.jpg" alt="macbook image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Features;