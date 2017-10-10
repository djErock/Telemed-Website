import React, { Component } from 'react';

import './chart.css';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
        
    };

    componentWillUnmount() {

    };

    render() {
        if (this.props.type === "table") {
            
        }else {

        }

        return (
            <article className="container chart">
            </article>
        );
    }
};

export default Chart;