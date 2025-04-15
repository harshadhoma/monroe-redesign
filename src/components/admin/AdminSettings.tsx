// src/components/admin/SettingsPanel.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminSettings = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    fairName: 'Monroe County Fairgrounds',
    contactEmail: 'info@monroefair.com',
    defaultBoothPrice: '75',
    enableEmailNotifications: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    alert('Settings saved successfully ✅');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-800">Admin Settings</h2>
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="text-sm text-purple-700 hover:underline"
        >
          ← Back to Dashboard
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-6 max-w-2xl">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Fairground Name</label>
          <input
            type="text"
            name="fairName"
            value={settings.fairName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={settings.contactEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Default Booth Price ($)</label>
          <input
            type="number"
            name="defaultBoothPrice"
            value={settings.defaultBoothPrice}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="enableEmailNotifications"
              checked={settings.enableEmailNotifications}
              onChange={handleChange}
              className="mr-2"
            />
            Enable Email Notifications for Vendors
          </label>
        </div>

        <button
          onClick={handleSave}
          className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};
