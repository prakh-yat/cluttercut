import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const SentimentChart = ({ data }) => {
  // Initialize selectedSentiments state with all sentiment values
  const [selectedSentiments, setSelectedSentiments] = useState(data.map(item => item.name));
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Update selectedSentiments state when data prop changes
  useEffect(() => {
    setSelectedSentiments(data.map(item => item.name));
  }, [data]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowDropdown(true);
  };

  const handleSelectSentiment = (sentiment) => {
    if (!selectedSentiments.includes(sentiment)) {
      setSelectedSentiments([...selectedSentiments, sentiment]);
    }
    setInputValue('');
    setShowDropdown(false);
  };

  const handleRemoveSentiment = (sentimentToRemove) => {
    const updatedSentiments = selectedSentiments.filter(sentiment => sentiment !== sentimentToRemove);
    setSelectedSentiments(updatedSentiments);
  };

  const filteredData = data.filter(item => selectedSentiments.includes(item.name));

  // Generate an array of colors
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f0e', '#ff5500', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div>
      {/* Input field */}
      <div className="relative">
        <div className="flex flex-wrap border border-gray-300 rounded-md px-3 py-1 w-full mt-4">
          {selectedSentiments.map((sentiment, index) => (
            <div key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1 flex items-center">
              {sentiment}
              <button onClick={() => handleRemoveSentiment(sentiment)} className="ml-1 focus:outline-none">
                &#x2715;
              </button>
            </div>
          ))}
          <input
            type="text"
            placeholder="Select sentiments..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full px-2 py-1 focus:outline-none"
            onClick={() => setShowDropdown(true)}
          />
        </div>
        {showDropdown && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md" style={{ backgroundColor: '#fff' }}>
            {data.map((item, index) => (
              <div
                key={index}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectSentiment(item.name)}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Donut chart */}
      <PieChart width={400} height={400}>
        <Pie
          data={filteredData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={60}
          fill="#8884d8" // Default fill color
          label
        >
          {filteredData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default SentimentChart;
