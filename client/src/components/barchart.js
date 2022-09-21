import React from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'chart.js';
import colors from './colors.json';

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
                        label: "Number of Posts",
                        data: [],
                        barPercentage: 1,
                        categoryPercentage: 1,
                    }
                ]
            },
            options: {

                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Number of Posts'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Number of Comments'
                        }
                    }
                },
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
        console.log(this.props.stat);
        this.fetchData(this.props.stat);

    }

    componentDidUpdate(prevProps) {
        console.log(this.props.stat);
        if (this.props.stat !== prevProps.stat) {
            this.fetchData(this.props.stat);
        }
    }

    fetchData = (stat) => {
        axios.get(`/data/${this.props.group}/${stat}`).then((response) => {
            let labels = [];

            const data = response.data
            console.log(response.data)

            for (let i = 0; i <= data.length; i++) {
                labels.push(i)
            }
            const color = colors[Math.floor(Math.random() * colors.length)];

            const newData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Number of Posts',
                        backgroundColor: color,
                        borderColor: 'rgba(0,0,0,1)',
                        data: data
                    }
                ]
            }

            const title = this.props.stat === 'Scores' ? 'Upvotes' : 'Comments';

            const newOptions = {
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Number of Posts'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Number of ' + title
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: title,
                        font: {
                            size: 20
                        }
                    },
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
            }

            this.setState({ data: newData, options: newOptions });
        }).catch((error) => console.log(error));
    };

    render() {
        return <div>
            {this.state.test}
            <Bar data={this.state.data} options={this.state.options} />
        </div>;
    }

}

export default BarChart;