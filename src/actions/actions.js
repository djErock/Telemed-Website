import Axios from "axios";
import Constants from '../util/const.js';

export function getCompanies() {
    return function (dispatch) {
        Axios.get(Constants.WS_PREFIX + 'companies')
            .then((response) => {
                dispatch({
                    type: "GET_COMPANIES_FULFILLED",
                    payload: response.data.recordset
                });
            }).catch((err) => {
                dispatch({
                    type: "GET_COMPANIES_REJECTED",
                    payload: err
                });
            })
    }
}

export function getSlideshow() {
    return (dispatch) => {
        dispatch({
            type: "GET_SLIDESHOW_FULFILLED",
            payload: {
                slideTimer: 6000,
                slides: [{
                    active: true,
                    visible: false,
                    caption: "Access to medical providers anywhere",
                    src: "doctor_on_demand.jpg",
                    altText: "Caduceus Telemedicine Slide 1"
                }, {
                    active: false,
                    visible: false,
                    caption: "Provider access on the go",
                    src: "doctor_on_tablet.jpg",
                    altText: "Caduceus Telemedicine Slide 2"
                }, {
                    active: false,
                    visible: false,
                    caption: "Bringing Technology to Medicine",
                    src: "applied_medicine.jpg",
                    altText: "Caduceus Telemedicine Slide 3"
                }]
            }
        });
    }
}

export function getFormData() {
    return (dispatch) => {
        dispatch({
            type: "GET_FORM_DATA_FULFILLED",
            payload: {
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
        });
    }
}