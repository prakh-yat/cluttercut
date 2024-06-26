import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ConversationLineChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="totalConversations" stroke="#8884d8" />
      <Line type="monotone" dataKey="pendingConversations" stroke="#82ca9d" />
      <Line type="monotone" dataKey="resolvedConversations" stroke="#ffc658" />
      <Line type="monotone" dataKey="unresolvedConversations" stroke="#ff7f0e" />
    </LineChart>
    </ResponsiveContainer>
  );
};

export default ConversationLineChart;
