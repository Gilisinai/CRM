import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import LineChartDetails from './AnalyticsComponents/chartComponents/LineChart';
import PieChartDetails from './AnalyticsComponents/chartComponents/pieChart';
import BarChartDetails from './AnalyticsComponents/chartComponents/barChart';
import ComposedChartDetails from './AnalyticsComponents/chartComponents/ComposedChart';
import Badges from './AnalyticsComponents/badges/badges';
import '../styles/analytics.css'


@inject("clientsData")
@observer

class Analytics extends Component {


    componentDidMount = async () =>{
        await this.props.clientsData.getClientsData()
      
    }
   
    render() {
        return (
            <div className="analytics">
                <div className="">
                    <Badges />
                </div>
                <div className="details-container">
                    <div className="charts">
                        <ComposedChartDetails />
                    </div>
                    <div className="charts">
                        <BarChartDetails />
                    </div>
                </div>
                <div className="details-container">
                    <div className="charts">
                        <LineChartDetails />
                    </div>
                    <div className="charts">
                        <PieChartDetails />
                    </div>
                </div>
            </div>
        )
    }
}

export default Analytics;