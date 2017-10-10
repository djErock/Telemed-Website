import React, { Component } from 'react';

import './footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        var year = (new Date()).getFullYear();
        this.state = {
            copyright: year
        };
    }

    render() {
        return (
            <footer>
                <div className="container table">
                    <div className="row">
                        <div className="cell"></div>
                        <div className="cell">
                            <span>Caduceus USA ©{this.state.copyright} All Rights Reserved.</span>
                        </div>
                        <div className="cell"></div>
                    </div>
                </div>
            </footer>
        )
    }
};

export default Footer;