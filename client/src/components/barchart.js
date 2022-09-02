import React from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'chart.js';
import test from './test_data.json';

import zoomPlugin from "chartjs-plugin-zoom";
Chart.register(zoomPlugin); // REGISTER PLUGIN

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:
            {
                labels: [],
                datasets: [
                    {
                        label: "Upvotes",
                        backgroundColor: 'rgba(75,256,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        data: [],
                        barPercentage: 1,
                        categoryPercentage: 1,
                    }
                ]
            },
            options: {
                plugins: {
                    zoom: {
                        limits: {
                            y: { min: 0 }
                        },
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true
                            },
                            mode: 'xy',
                        },

                        pan: { enabled: true }
                    }
                }
            },
        }
    }

    componentDidMount() {
        this.fetchData();

    }

    fetchData = () => {
        axios.get(`/data/${this.props.group}`).then((response) => {
            let labels = [];

            const data = response.data.Scores
            console.log(response.data)

            for (let i = 0; i <= data.length; i++) {
                labels.push(i)
            }

            const newData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Number of Posts',
                        backgroundColor: 'blue',
                        borderColor: 'rgba(0,0,0,1)',
                        data: data
                    }
                ]
            }
            this.setState({ data: newData });
        }).catch((error) => console.log(error));
    };

    render() {
        return <div>
            {this.props.group} <br />
            {this.state.test}
            <Bar data={this.state.data} options={this.state.options} />
        </div>;
    }

}

export default BarChart;