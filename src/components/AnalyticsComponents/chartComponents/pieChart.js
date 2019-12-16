import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector,Cell } from 'recharts';

const data = [
  { name: '6-12 Monthes', value: 300 },
  { name: '1-5 Monthes', value: 150 },
  { name: 'Last Month', value: 22 }

];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  
  render() {
    return (
      <PieChart width={730} height={250}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
            ))
          }
        </Pie>
      </PieChart>
    );
  }
}