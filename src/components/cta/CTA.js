import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { ImportAll } from '../../util/helpers'

const ctaImages = ImportAll(require.context('../../img/cta', false, /\.(png|jpe?g|svg)$/));
import './cta.css';

class CTA extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            presets: [{
                type: "about",
                title: "What is Telemed?",
                copy: "Caduceus USA provides your employees with a remote diagnosis and treatment by means of video and telecommunications technology. Our Telemed providers to evaluate, diagnose and treat patients without the need for an in-person visit.",
                img: "employee_to_provider.jpg",
                altText: "connect employee to provider",
                linkText: "Learn More"
            },{
                type: "contact",
                title: "Any Questions?",
                copy: "Do you have questions about how Telemed relates to worker's comp, work status or as well as provider certification updates and Caduceus USA network coverage. Give us a call if you have any questions or concerns by clicking the link below.",
                img: "questions_about_telemed.jpg", 
                altText: "questions about telemed",
                linkText: "Call Us Today!"
            },{
                type: "enroll",
                title: "Providers are available now",
                copy: "We have a large network of certified providers waiting to handle your employees injuries at a moment's notice. All you have to do is click the link below and enroll your company's protocol into our world class Electronic Medical Records system.",
                img: "doctors_available_today.jpg",
                altText: "doctors available today",
                linkText: "Enroll Today"
            }],
            actionState: {}
        }
    }

    componentDidMount() {
        for (var i = 0; i < this.state.presets.length; i++) {
            if (this.props.type === this.state.presets[i].type) {
                this.setState({actionState: this.state.presets[i]});
            }
        }
    };

    componentWillUnmount() {
        this.setState({ actionState: {} });
    };

    render() {
        return (
            <aside>
                <div className={this.state.actionState.type}>
                    <h2>{this.state.actionState.title}</h2>
                    <hr />
                    <img src={ctaImages[this.state.actionState.img]} alt={this.state.actionState.altText} />
                    <div className="CTAContent">
                        <p>{this.state.actionState.copy}</p>
                        <Link to={this.props.destination}>{this.state.actionState.linkText}</Link>
                    </div>
                </div>
            </aside>
        );
    }
};

export default CTA;