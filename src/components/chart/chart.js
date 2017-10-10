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
        let chart = null;
        if (this.props.type === "table") {
            chart = <Table />;
        }else if (this.props.type === "graph") {
            chart = <Graph />;
        }

        return (
            <article className="container chart">
                {chart}
            </article>
        );
    }
};


function Table(props) {
    return (
        <h1>I'm a Table chart!</h1>
    );
}

function Graph(props) {
    return (
        <h1>I'm a Graph chart!</h1>
    );
}

export default Chart;