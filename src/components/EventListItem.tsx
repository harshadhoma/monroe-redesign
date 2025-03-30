import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface EventListItemProps {
  date: string;
  title: string;
  timeSlot?: string;
}

export const EventListItem = ({ date, title, timeSlot }: EventListItemProps) => {
  return (
    <div className="p-4 border border-purple-200 rounded-lg bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-purple-900 mb-2">{title}</h3>
      <div className="flex items-center text-sm text-gray-600 mb-1">
        <Calendar className="w-4 h-4 mr-2 text-purple-600" />
        {date}
      </div>
      {timeSlot && (
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-purple-600" />
          {timeSlot.charAt(0).toUpperCase() + timeSlot.slice(1)}
        </div>
      )}
    </div>
  );
};
