import React, { Component } from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
// import { Line } from 'react-chartjs-2';
import Chartkick, { LineChart, PieChart, AreaChart, BarChart, ColumnChart } from 'react-chartkick';
import  'chart.js';
import axios from 'axios';


export default class OwnerReport extends Component {
    constructor(){
        super();
        this.state = {
            order: [],
            datasets: [],
            orderTraffic: {},
            orderIncome: {},
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
        axios.get(`/api/orderList/${JSON.parse(localStorage.getItem('user')).id}`)
        .then((response) => {
            this.setState({order: response.data.report})
            console.log(this.state);
            var traffic = {};
            var incomes = {};
            var income = 0;
            var count = 0;
            var date = new Date();
            var datePrev = new Date();
            var dateNow = new Date();
            this.state.order.forEach(element => {
                dateNow = new Date(element.created_at)
                dateNow.setHours(0,0,0,0)
                // console.log(date.toISOString());
                // console.log(dateNow.toISOString());
                // console.log(datePrev.toISOString());
                if (dateNow.valueOf() === datePrev.valueOf()) {
                    income = income + element.price_total
                    incomes[dateNow] = (income) 
                    count = count + 1
                    traffic[dateNow] = (count)
                    console.log('IF---------------------------');
                    
                } else {
                    datePrev = dateNow
                    income = element.price_total
                    incomes[dateNow] = (income) 
                    count =  1
                    traffic[dateNow] = (count)
                    console.log('ELSE---------------------------');
                }
            });
            this.setState({orderTraffic : traffic})
            this.setState({orderIncome : incomes})
            console.log(traffic);
            console.log(incomes);
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
                <ColumnChart 
                    xtitle="Date" ytitle="Income"
                    // xmin={1000} xmax={5000}
                    // stacked={true}
                    // message={{ empty: "No data"}}
                    // label={this.state.data.label}
                    data={this.state.orderIncome}
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
                    xtitle="Date" ytitle="Order Amount"
                    // xmin="2019-06-17" xmax="2019-07-03" 
                    // xmin="2019-06-17 08:52:55" xmax="2019-06-19 01:31:35" 
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