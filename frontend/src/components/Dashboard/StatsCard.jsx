// src/components/Dashboard/StatsCard.jsx
import React from 'react';

const StatsCard = ({ title, value, icon, color = 'blue' }) => {
  return (
    <div className={`bg-${color}-100 border border-${color}-300 rounded-lg p-6`}>
      <div className="flex items-center">
        <div className={`bg-${color}-500 p-3 rounded-full mr-4`}>
          {icon}
        </div>
        <div>
          <h3 className="text-gray-600 text-sm">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard; // <-- TAMBAHKAN INI