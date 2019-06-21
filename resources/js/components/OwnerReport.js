import React, { Component } from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
// import { Line } from 'react-chartjs-2';
import Chartkick, { LineChart, PieChart, AreaChart, BarChart } from 'react-chartkick';
import  'chart.js';
import axios from 'axios';


export default class OwnerReport extends Component {
    constructor(){
        super();
        this.state = {
            order: [],
            datasets: [],
            orderTraffic: {},
            data: {
                labels: ["1", "2", "3", "4", "5"],
                dataset: [
                    {
                        name: "Income",
                        // backgroundColor: "rgba(255, 0, 255, 0.75)",
                        data: {"2017-01-01": 7, "2017-01-02": 4,"2017-01-03": 3, "2017-01-04": 4,"2017-01-05": 9, "2017-01-06": 8,}
                    },
                    // {
                    //     label: "Transaction",
                    //     // backgroundColor: "rgba(255, 0, 255, 0.75)",
                    //     data: {"2017-01-01": 5, "2017-01-02": 6,"2017-01-05": 1, "2017-01-06": 3,}
                    // },
                ]
            },
            homestays: [],
            errors: [],
            id_user: 1,
        }
    } 
    componentDidMount() {
        axios.get(`/api/orderList/1`)
        .then((response) => {
            this.setState({order: response.data})
            console.log(this.state);
            var elements = {};
            var count = 0;
            this.state.order.forEach(element => {
                elements[element.created_at] = (count = count + 1); 
            });
            this.setState({orderTraffic : elements})
            console.log(elements);
        })
    }

    render() {
        return (
            <Container style={{paddingTop: 36}}>
                <Container>
                <Paper style={{marginBottom: 24}}>
                <Typography style={{padding: 16}} variant="h5" display="block">
                    Profit
                </Typography>
                <Container style={{paddingTop: 36, paddingBottom: 36}}>
                <BarChart 
                    // message={{ empty: "No data"}}
                    // label={this.state.data.label}
                    data={this.state.data.dataset}
                />
                </Container>
                </Paper>
                </Container>
                <Container>
                <Paper style={{marginBottom: 24}}>
                <Typography style={{padding: 16}} variant="h5" display="block">
                    Order Traffic
                </Typography>
                <Container style={{paddingTop: 36, paddingBottom: 36}}>
                <AreaChart 
                    data={this.state.orderTraffic}
                />
                </Container>
                </Paper>
                </Container>
                {/* <Container>
                <Paper style={{padding: 36}}>
                <AreaChart
                    data={this.state.orderTraffic}
                />
                </Paper>
                </Container> */}
            </Container>
        );
    }
}