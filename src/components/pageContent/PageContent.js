import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var FontAwesome = require('font-awesome/css/font-awesome.css');

import './pageContent.css';

class PageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [{
                classes: "service",
                icon: "fa fa-check",
                shout: "EVALUATE",
                desc: "- instant work status -",
                paragraph: "With Caduceus Telemed, your employees will enjoy 24/7/365 access to the Caduceus provider network via an app that works similar \“Face Time\” or \"Hang Outs\". The app is available on Apple, Android and desktop devices. Some of our exams also Include drug testing, prescriptions, labs, x-rays and physical therapy; All available if needed.",
                destination: "/enroll/",
                linkText: "Nationwide Provider Network"
            }, {
                classes: "service walls",
                icon: "fa fa-user-md",
                shout: "DIAGNOSE",
                desc: "- remote diagnosis -",
                paragraph: "Our Providers are specifically trained in workplace injuries and exposures. They are intimately familiar with job demands, physical abilities and workplace requirements as well as understand the subtleties of workers compensation. Caduceus Telemed are best at distinguishing work injuries from non-work-related conditions.",
                destination: "/enroll/",
                linkText: "Customizable Exams"
            }, {
                classes: "service",
                icon: "fa fa-medkit",
                shout: "TREAT",
                desc: "- on the spot care -",
                paragraph: "You will be provided with an immediate email with the visit results. The visit results include ICD-10 diagnosis, office visit notes, work restrictions, and follow up (if required). Complicated visits get referred to a Caduceus Exams medical facility, or a local Clinic of your choosing. It’s up to you but always remember that Telemed is for Treatment; not triage.",
                destination: "/enroll/",
                linkText: "Nationwide Clinic Network"
            }],
            features: [{
                type: "article",
                imgSrc: "Hurricane_Harvey_Telemed.jpg",
                altText: "The Texas Army National Guard moves through flooded Houston streets from Hurricane Harvey. U.S. Army photo",
                headline: "Hurricanes Harvey and Irma spotlight value of telehealth as new House bill gains ground",
                lead: "Telemed services were made available to regions of Texas and Florida for a limited time, as did LiveHealth Online, which offers video-based consultations physicians and psychologists. Delaware-based Nemours, which operates pediatric specialty clinics in Florida, offered free remote consults to children affected by Irma.",
                destination: "http://www.healthcareitnews.com/news/hurricanes-harvey-and-irma-spotlight-value-telehealth-new-house-bill-gains-ground",
                linkText: "Read More..."
            }],
            featurettes: [{
                type: "cost",
                headline: "How Do I Pay For It?",
                lead: "It's just like Uber. Once your company enrolls, a user or administrator account is set up. The account is linked to a company credit card entered on the first visit, the workers compensation payer, or another select payment mechanism. When the user or administrator completes the call, the charge is automatic. At the end of the call, all parties to the claim receive an email with the details of the visit once the card has successfully been charged.",
                destination: "/enroll/",
                linkText: "Enroll Today..."
            }, {
                type: "drug screens",
                headline: "Can I Do a Drug Screen?",
                lead: "Saliva testing can be administered anywhere using TeleMed while having our providers give oversight. Urine drug testing and hair collection is done via Caduceus Exams",
                destination: "/contact/",
                linkText: "Contact Us..."
            }]
        }
    }

    render() {
        let Content = null;
        if (this.props.type === "about") {
            Content = <AboutUsPageContent state={this.state} />
        } else if (this.props.type === "contact") {
            Content = <ContactUsPageContent />
        } else if (this.props.type === "enroll") {
            Content = <EnrollCompanyPageContent />
        } else {
            Content = <fourOhFour />
        }
        return (
            <div className="container pageContent">
                {Content}
            </div>
        );
    }
};

function AboutUsPageContent(page) {
    console.log(page.state);
    const services = page.state.services.map((service, index) =>
        <div key={index} className={service.classes}>
            <div className="serviceContent">
                <div className="circleBase circle">
                    <div className="copy">
                        <h3>
                            <span className={service.icon} /><br />
                            <strong>{service.shout}</strong><br />
                            {service.desc}<br />
                        </h3>
                    </div>
                </div>
                <div className="paragraph">
                    <p>{service.paragraph}</p>
                    <Link className="action" to={service.destination}>{service.linkText}</Link>
                </div>
            </div>
        </div>
    );
    const feature = page.state.features.map((feature, index) =>

        <div key={index} className="feature">
            <h2><strong>FEATURED: </strong><i>{feature.type}</i></h2>
            <hr />
            <div className="spotLight">
                <img src={require('../../img/features/' + feature.imgSrc)} alt={feature.altText} />
                <h3>{feature.headline}</h3>
                <p>{feature.lead}...</p>
                <a href={feature.destination} target="_blank" className="outgoing">{feature.linkText}</a>
                <div className="clr"></div>
            </div>

        </div>
    );
    const featurettes = page.state.featurettes.map((featurette, index) =>

        <div key={index} className="feature">
            <h2><strong>TOPIC: </strong><i>{featurette.type}</i></h2>
            <hr />
            <div className="spotLight">
                <h3>{featurette.headline}</h3>
                <p>{featurette.lead}...</p>
                <Link to={featurette.destination} target="_blank" className="outgoing">{featurette.linkText}</Link>
                <div className="clr"></div>
            </div>
        </div>

    );
    return (
        <div>
            <div className="container services">
                {services}
            </div>
            <div className="container features">
                <div className="halfTable">
                    {feature}
                </div>
                <div className="halfTable">
                    {featurettes}
                </div>
            </div>
        </div>
    );
}
function ContactUsPageContent(props) {
    return (
        <div>ContactUsPageContent</div>
    );
}
function EnrollCompanyPageContent(props) {
    return (
        <div>EnrollCompanyPageContent</div>
    );
}
function fourOhFour(props) {
    return (
        <div>fourOhFour</div>
    );
}

export default PageContent;