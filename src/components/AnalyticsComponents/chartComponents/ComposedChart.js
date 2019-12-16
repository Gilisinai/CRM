import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';
import { observer, inject } from 'mobx-react'



@inject("clientsData")
@observer
 class ComposedChartDetails extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

  render() {
    return (
      <div className="top-employees">
        <h4>Top Employees</h4>
      <ComposedChart
        layout="vertical"
        width={450}
        height={200}
        data={this.props.clientsData.sortOwners()}
        margin={{
          top: 15, right: 20, bottom: 10, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        
        <Bar dataKey="clients" barSize={20} fill="#413ea0" />
        
      </ComposedChart>
      </div>
    );
  }
}

export default ComposedChartDetails