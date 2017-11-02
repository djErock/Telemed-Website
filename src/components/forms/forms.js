import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

var FontAwesome = require('font-awesome/css/font-awesome.css');

import './forms.css';

import { getFormData } from "../../actions/actions"
@connect((store) => {
    return {
        formData: store.forms.data
    }
})

class Forms extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getFormData());
    }

    componentWillUnmount() {
    };

    render() {
        console.log(this.props);
        let Content = null;
        if (this.props.type === "enrollment") {
            Content = <EnrollmentForm state={this.props.formData.enrollment} />
        } else if (this.props.type === "contact") {
            Content = <ContactUsForm state={this.props.formData.contact} />
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

function renderFieldsets(fieldsets) {
    if (fieldsets.length > 0) {
        return fieldsets.map((fieldset, index) => (
            <Fieldset key={index} set={fieldset} />
        ));
    }
    else return [];
}
function renderFormElements(formElements) {
    if (formElements.length > 0) {
        return formElements.map((formElement, i) => (
            <FormElement key={i} set={formElement} />
        ));
    }
    else return [];
}
const FormElement = (props, index) => {
    if (props.set.tag === "input") {
        return (
            <div key={index} className={props.set.class}>
                <label>{props.set.label}</label>
                <input
                    type={props.set.type}
                    name={props.set.name}
                    placeholder={props.set.placeholder}
                    required={props.set.required}
                    disabled={props.set.disabled}
                />
            </div>
        );
    } else if (props.set.tag === "select") {
        return (
            <div key={index} className={props.set.class}>
                <label>{props.set.label}</label>
                <select
                    key={index}
                    name={props.set.name}
                    required={props.set.required}
                    disabled={props.set.disabled}
                />
            </div>
        );
    }else if (props.set.tag === "textarea") {
        return (
            <div key={index} className={props.set.class}>
                <label>{props.set.label}</label>
                <textarea
                    key={index}
                    name={props.set.name}
                    required={props.set.required}
                    disabled={props.set.disabled}
                />
            </div>
        );
    }
    return <div>Something which is not a form element</div>;
};
const Fieldset = (props, index) => {
    const elements = renderFormElements(props.set.formElements);
    return (
        <fieldset key={index}>
            <legend>
                <span className="number fa fa-address-card"></span>
                {props.set.title}
            </legend>
            <div className="formElementsContainer">{elements}</div>
        </fieldset>
    );
};

function EnrollmentForm(form) {
    const fieldsets = renderFieldsets(form.state.fieldsets);
    return (
        <form className={form.state.class}>
            <div>
                {fieldsets}
            </div>
            <input type="submit" />
        </form>
    );
}

function ContactUsForm(form) {
    const fieldsets = renderFieldsets(form.state.fieldsets);
    return (
        <form className={form.state.class}>
            <div>
                {fieldsets}
            </div>
            <input type="submit" />
        </form>
    );
}

export default Forms;