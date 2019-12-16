import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { observer, inject } from 'mobx-react'






@inject("clientsData")
@observer
 class BarChartDetails extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
  constructor(props) {
    super(props)
      
  }

  

  render() {
    return (
      <div className="sales-by-country">
        <h4>Sales By Country</h4>
      <BarChart
        width={530}
        height={200}
        data={this.props.clientsData.getCountries()}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        <Bar dataKey="sales" fill="#82ca9d" />
      </BarChart>
      </div>
    );
  }
}

export default BarChartDetails