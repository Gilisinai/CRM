import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { observer, inject } from 'mobx-react'




const data = [
  {
    name: 'Page A', uv: 4000,  amt: 2400,
  },
  {
    name: 'Page B', uv: 3000,  amt: 2210,
  },
  {
    name: 'Page C', uv: 2000,  amt: 2290,
  },
  {
    name: 'Page D', uv: 2780,  amt: 2000,
  },
  {
    name: 'Page E', uv: 1890,  amt: 2181,
  },
  {
    name: 'Page F', uv: 2390,  amt: 2500,
  },
  {
    name: 'Page G', uv: 3490,  amt: 2100,
  },
];

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
        width={500}
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