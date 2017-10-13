import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var FontAwesome = require('font-awesome/css/font-awesome.css');

import './forms.css';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enrollment: {
                title: "Company Enrollment Form"
            },
            contact: {
                title: "Request for Information"
            }
        }
    }

    componentDidMount() {
    };

    componentWillUnmount() {
    };

    render() {
        let Content = null;
        if (this.props.type === "enrollment") {
            Content = <EnrollmentForm state={this.state.enrollment} />
        } else if (this.props.type === "contact") {
            Content = <ContactUsForm />
        } else {
            Content = <fourOhFour />
        }
        return (
            <div className="container formContent">
                {Content}
            </div>
        );
    }
};

function EnrollmentForm(form) {
    console.log(form.state);
    return (
        <form className="form-style">
            <fieldset>
                <legend>
                    <span className="number fa fa-address-card"></span>
                    {form.state.title}
                </legend>
                <input type="text" name="field1" placeholder="Your Name *" />
            </fieldset>
        </form>
    );
}
function ContactUsForm(props) {
    return (
        <div>EnrollCompanyPageContent</div>
    );
}

export default Forms;