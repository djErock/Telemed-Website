import React, { Component } from 'react';

import './chart.css';

import { ImportAll } from '../../util/helpers' 

const ChartImages = ImportAll(require.context('../../img/charts', false, /\.(png|jpe?g|svg)$/));

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wcVisit: {
                title: "Traditional Worker's Comp Visit",
                img: "traditional_work_comp_visit.jpg",
                altText: "traditional work comp visit",
                cols: 2,
                data: [
                    { title: "Cost", content: "$563 avg" },
                    { title: "Lost Supervisor Time", content: "2-3 hours" },
                    { title: "Lost Time to/from Clinic", content: "2-3 hours" },
                    { title: "Lost Work Productivity", content: "4-6 hours" },
                    { title: "Lost Time Filing Claim", content: "1 hour" },
                    { title: "Potential Indemnity Cost", content: "varies" }
                ]
            },
            tmVisit: {
                title: "Caduceus TeleMed Visit",
                img: "caduceus_usa_telemed_visit.jpg",
                altText: "caduceus usa telemed visit",
                cols: 2,
                data: [
                    { title: "Cost", content: "$250" },
                    { title: "Lost Supervisor Time", content: "0.3 hours" },
                    { title: "Lost Time to/from Clinic", content: "0 hours" },
                    { title: "Lost Work Productivity", content: "0.5 hours" },
                    { title: "Lost Time Filing Claim", content: "0 hours" },
                    { title: "Potential Indemnity Cost", content: "less likely" }
                ]
            }
        }
    }

    render() {
        let chart = null;
        if (this.props.type === "roi") {
            chart = <div className="roiTables">
                <div className="halfTable">
                    <Table data={this.state.wcVisit} />
                </div>
                <div className="halfTable">
                <Table data={this.state.tmVisit} />
                </div>
            </div>;
        } else if (this.props.type === "graph") {
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
    console.log(props.data.cols);
    var table;
    if (props.data.cols === 2) {
        table = props.data.data.map((data, index) =>
            <div key={index} className="row tableBody">
                <div className="cell">{data.title}</div>
                <div className="cell">{data.content}</div>
            </div>
        );
    }
    return (
        <div className="tableContainer">
            <div className="imgTray">
                <img src={ChartImages[props.data.img]} alt={props.data.altText} />
            </div>
            <div className="table">
                <div className="cell tableHeader">{props.data.title}</div>
            </div>
            <div className="table">
                {table}
            </div>
        </div>
    );
}

function Graph(props) {
    return (
        <h1>I'm a Graph chart!</h1>
    );
}

export default Chart;