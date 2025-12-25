// src/components/Dashboard/RecentActivity.jsx
import React from 'react';

const RecentActivity = ({ activities = [] }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Aktivitas Terbaru</h2>
      <div className="space-y-4">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <div key={index} className="flex items-start border-b pb-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600">⚡</span>
              </div>
              <div className="flex-1">
                <p className="font-medium">{activity.title}</p>
                <p className="text-gray-600 text-sm">{activity.description}</p>
                <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-gray-500">
            Tidak ada aktivitas terbaru
          </div>
        )}
      </div>
    </div>
  );
};

// TAMBAHKAN INI DI AKHIR FILE:
export default RecentActivity;