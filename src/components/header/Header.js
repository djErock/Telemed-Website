import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6


import Logo from '../../img/Telemed-Logo.png';

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = { 
            visible: true,
            lastPosition: 0
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(event) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > this.state.lastPosition) {
            this.setState(prev => ({ visible: false, lastPosition: scrollTop }));
        }else {
            this.setState(prev => ({ visible: true, lastPosition: scrollTop }));
        }
    }

    render() {
        return (
            <header className={this.state.visible ? 'slideIn' : 'slideOut'}>
                <div className="container table">
                    <div className="row">
                        <div className="cell"></div>
                        <div className="cell">
                            <img id="logo" src={Logo} />
                        </div>
                        <div className="cell"></div>
                    </div>
                </div>
            </header>
        )
    };
};

export default Header;