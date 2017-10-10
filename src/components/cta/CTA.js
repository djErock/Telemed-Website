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
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis tincidunt consectetur. Maecenas a tellus tempor, vehicula risus ut, porta nisi. Sed suscipit, magna et volutpat ultrices, risus risus sollicitudin metus, in ultricies magna erat at eros. Morbi aliquet pulvinar ante non consequat. Donec ut fringilla magna. Aliquam lobortis eros in ante ornare, eget malesuada tellus volutpat. Duis bibendum lectus in pharetra sollicitudin. In dignissim ante vel odio mattis, quis cursus augue placerat. Cras bibendum diam vel orci tincidunt interdum. Phasellus at mi mauris. Etiam dignissim scelerisque lorem, eget viverra velit viverra in. In porta luctus urna et bibendum. Vestibulum id maximus elit. Morbi non laoreet leo.",
                img: "employee_to_provider.jpg",
                altText: "connect employee to provider",
                linkText: "Learn More"
            },{
                type: "contact",
                title: "Any Questions?",
                copy: "Etiam vitae enim a nisl cursus lobortis. Pellentesque et ipsum sit amet diam commodo aliquam ut vel neque. Mauris ultrices fringilla arcu. Praesent placerat id nisl ut maximus. Ut metus lectus, feugiat et rhoncus ut, bibendum id risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu purus sollicitudin, feugiat lacus a, facilisis libero. Suspendisse at sodales tortor, et suscipit purus. Morbi sodales odio in diam ultrices scelerisque ut vitae tellus. Vivamus nec varius elit. Fusce fermentum nibh nisl, eu mollis augue bibendum ac. Aenean scelerisque quis orci in placerat.",
                img: "questions_about_telemed.jpg", 
                altText: "questions about telemed",
                linkText: "Call Us Today!"
            },{
                type: "enroll",
                title: "Providers are available now",
                copy: "Aenean tincidunt sapien lacus. Curabitur sit amet pretium nisl. In hac habitasse platea dictumst. Fusce vestibulum convallis ligula, vitae ultrices libero fringilla nec. Vivamus nisi quam, cursus nec nisi vel, ultrices imperdiet sem. Donec iaculis erat vitae ipsum accumsan, ut tempus lectus consectetur. Nullam in ipsum orci. Curabitur semper dolor tempor, facilisis elit id, consequat dui. Nulla sem magna, venenatis eget ultricies eget, pulvinar eu est. Proin euismod nunc id diam accumsan, in posuere metus feugiat.",
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