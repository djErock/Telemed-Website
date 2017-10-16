import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var FontAwesome = require('font-awesome/css/font-awesome.css');

import './forms.css';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enrollment: {
                class: "form-style",
                fieldsets: [{
                    order: "1",
                    title: "New Company Protocols",
                    formElements: [{
                        label: "Company Type:",
                        tag: "select",
                        type: "populateDDL",
                        tbl: "tblCompanyType",
                        class: "",
                        name: "sltCompanyType",
                        placeholder: "",
                        required: true,
                        disabled: false
                    }, {
                        label: "Protocol Verification Date:	",
                        tag: "input",
                        type: "date",
                        tbl: "tblYesNo",
                        class: "",
                        name: "fldProtocolVerificationDate",
                        placeholder: "",
                        required: true,
                        disabled: false
                    }, {
                        label: "Is Authorization Required:	",
                        tag: "select",
                        type: "populateDDL",
                        tbl: "tblYesNo",
                        class: "",
                        name: "sltIsAuthorizationRequired",
                        placeholder: "",
                        required: true,
                        disabled: false
                    }, {
                        label: "OSHA Sensitive:",
                        tag: "select",
                        type: "populateDDL",
                        tbl: "tblYesNo",
                        class: "",
                        name: "sltOSHASensitive",
                        placeholder: "",
                        required: true,
                        disabled: false
                    }, {
                        label: "Can Dispense Meds:",
                        tag: "select",
                        type: "populateDDL",
                        tbl: "tblYesNo",
                        class: "",
                        name: "sltCanDispenseMeds",
                        placeholder: "",
                        required: true,
                        disabled: false
                    }]
                }, {
                    order: "2",
                    title: "New Company Demographics",
                    formElements: [{
                        label: "Company Name:",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldCompanyName",
                        placeholder: "Your Company's Name *",
                        required: true,
                        disabled: false
                    }, {
                        label: "Address:",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldAddress",
                        placeholder: "Your Company's Address *",
                        required: true,
                        disabled: false
                    }, {
                        label: "Address (Line 2):",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldAddressTwo",
                        placeholder: "Company Address (Line 2) *",
                        required: true,
                        disabled: false
                    }, {
                        label: "City:",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldAddressTwo",
                        placeholder: "HQ City",
                        required: true,
                        disabled: false
                    }, {
                        label: "State:",
                        tag: "select",
                        type: "populateDDL",
                        tbl: "tblState",
                        class: "",
                        name: "sltState",
                        placeholder: "",
                        required: true,
                        disabled: false
                    }, {
                        label: "Zip:",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldAddressTwo",
                        placeholder: "Zip Code",
                        required: true,
                        disabled: false
                    }, {
                        label: "Company Comments:",
                        tag: "textarea",
                        type: "text",
                        class: "",
                        name: "txtCompanyComments",
                        placeholder: "",
                        required: true,
                        disabled: false
                    }, {
                        label: "Workers Comp Check In Comments:",
                        tag: "textarea",
                        type: "text",
                        class: "",
                        name: "txtWorkersCompCheckInComments",
                        placeholder: "Company Address (Line 2) *",
                        required: true,
                        disabled: false
                    }, {
                        label: "Workers Comp MA Comments:	",
                        tag: "textarea",
                        type: "text",
                        class: "",
                        name: "txtWorkersCompMAComments",
                        placeholder: "Company Address (Line 2) *",
                        required: true,
                        disabled: false
                    }, {
                        label: "Workers Comp Provider Comments:",
                        tag: "textarea",
                        type: "text",
                        class: "",
                        name: "txtWorkersCompProviderComments",
                        placeholder: "Company Address (Line 2) *",
                        required: true,
                        disabled: false
                    }, {
                        label: "Workers Comp Check Out Comments:",
                        tag: "textarea",
                        type: "text",
                        class: "",
                        name: "txtWorkersCompCheckOutComments",
                        placeholder: "Company Address (Line 2) *",
                        required: true,
                        disabled: false
                    }]
                }, {
                    order: "3",
                    title: "PRIMARY AUTHORIZING PERSON",
                    formElements: [{
                        label: "Primary Authorizer Name:",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldPrimaryAuthorizerName",
                        placeholder: "",
                        required: true,
                        disabled: false
                    },{
                        label: "Primary Authorizer Email:",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldPrimaryAuthorizerEmail",
                        placeholder: "",
                        required: true,
                        disabled: false
                    },{
                        label: "Primary Authorizer Phone:",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldPrimaryAuthorizerPhone",
                        placeholder: "",
                        required: true,
                        disabled: false
                    },{
                        label: "Primary Authorizer Fax:	",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldPrimaryAuthorizerFax",
                        placeholder: "",
                        required: true,
                        disabled: false
                    }, {
                        label: "Primary Authorizer Comments:",
                        tag: "textarea",
                        type: "text",
                        class: "stretch",
                        name: "txtPrimaryAuthorizerComments",
                        placeholder: "Company Address (Line 2) *",
                        required: true,
                        disabled: false
                    }]
                }, {
                    order: "4",
                    title: "AFTER HOURS CONTACT",
                    formElements: [{
                        label: "After Hours Name:",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldAfterHoursName",
                        placeholder: "",
                        required: true,
                        disabled: false
                    },{
                        label: "After Hours Email:",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldAfterHoursEmail",
                        placeholder: "",
                        required: true,
                        disabled: false
                    },{
                        label: "After Hours Phone:",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldAfterHoursPhone",
                        placeholder: "",
                        required: true,
                        disabled: false
                    },{
                        label: "After Hours Fax:",
                        tag: "input",
                        type: "text",
                        class: "",
                        name: "fldAfterHoursFax",
                        placeholder: "",
                        required: true,
                        disabled: false
                    }, {
                        label: "After Hours Comments:",
                        tag: "textarea",
                        type: "text",
                        class: "stretch",
                        name: "txtAfterHoursComments",
                        placeholder: "Company Address (Line 2) *",
                        required: true,
                        disabled: false
                    }]
                }]
            },
            contact: {
                class: "form-style",
                fieldsets: [{
                    order: "1",
                    title: "Contact Us",
                    formElements: [{
                        label: "Name:",
                        tag: "input",
                        type: "text",
                        tbl: "",
                        class: "",
                        name: "sltCompanyType",
                        placeholder: "",
                        required: true,
                        disabled: false
                    },{
                        label: "Phone Number:",
                        tag: "input",
                        type: "text",
                        tbl: "",
                        class: "",
                        name: "sltCompanyType",
                        placeholder: "",
                        required: true,
                        disabled: false
                    },{
                        label: "Email Address:",
                        tag: "input",
                        type: "text",
                        tbl: "",
                        class: "",
                        name: "sltCompanyType",
                        placeholder: "",
                        required: true,
                        disabled: false
                    },{
                        label: "Comments and/or Questions:",
                        tag: "textarea",
                        type: "text",
                        tbl: "",
                        class: "stretch",
                        name: "comments",
                        placeholder: "",
                        required: false,
                        disabled: false
                    }]
                }]
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
            Content = <ContactUsForm state={this.state.contact} />
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