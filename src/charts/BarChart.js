import React, { useRef, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';


const BarChart = ({ data}) => {
  return (
    <div>

        <LineChart width={720} height={480} data={data} margin={{ top: 5, right: 30, bottom: 20, left: 5 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#364EEF" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
        </LineChart>
    </div>
    
  );
};

export default BarChart;
