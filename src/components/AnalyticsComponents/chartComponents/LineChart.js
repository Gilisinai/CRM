import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { observer, inject } from 'mobx-react'



@inject("clientsData")
@observer
class LineChartDetails extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <div className="sales-since">
        <h5> Last 30 days sells</h5>
      <LineChart
        width={500}
        height={200}
        data={this.props.clientsData.sellsSince}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sells" stroke="#8884d8" activeDot={{ r: 8 }} />
        
      </LineChart>
      </div>
    );
  }
}

export default LineChartDetails