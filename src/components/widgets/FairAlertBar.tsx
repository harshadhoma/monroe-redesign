import React from 'react';

interface FairAlertBarProps {
  message: string;
}

export const FairAlertBar: React.FC<FairAlertBarProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-yellow-100 text-yellow-900 py-2 px-4 text-center font-semibold shadow-sm text-sm">
      <span role="img" aria-label="alert">⚠️</span> {message}
    </div>
  );
};
