import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

export default function OperatorsStatus({ data }) {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        margin={{ top: 20, bottom: 90 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="user_nickname"
          angle={-90}
          textAnchor="end"
          interval={0}
        />
        <YAxis />
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
        />
        <Bar dataKey="num_conversations" fill="#8884d8" name="Total Conversations" />
        <Bar dataKey="num_resolved_conversations" fill="#82ca9d" name="Resolved Conversations" />
      </BarChart>
    </ResponsiveContainer>
  );
}
