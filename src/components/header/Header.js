import React, { Component } from 'react';
import { CSSTransitionGroup } from "react-transition-group";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import Logo from '../../img/Telemed-Logo.png';

import './header.css';
import { getCompanies } from "../../actions/actions"
@connect((store) => {
    return {
        companies: store.companies.data
    }
})

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
        this.props.dispatch(getCompanies());
    }
    
    componentWillReceiveProps(nextProps) {
        //console.log(nextProps.companies);
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
                            <Link to="/"><img id="logo" src={Logo} /></Link>
                        </div>
                        <div className="cell"></div>
                    </div>
                </div>
            </header>
        )
    };
};

export default Header;