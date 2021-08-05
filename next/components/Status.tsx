import React from 'react';

type StatusProps = {
  status: 'Not Started' | 'Started' | 'Completed';
};

const Status: React.FC<StatusProps> = ({ status }) => {
  switch (status) {
    case 'Not Started':
      return (
        <span
          style={{
            borderRadius: '10%',
            backgroundColor: 'hsl(24deg, 100%, 79%)',
            color: '#000',
            fontSize: '75%',
          }}
        >
          {status}
        </span>
      );
    case 'Started':
      return (
        <span
          style={{
            borderRadius: '10%',
            backgroundColor: 'hsl(186deg, 46%, 84%)',
            color: '#000',
            fontSize: '75%',
          }}
        >
          {status}
        </span>
      );
    case 'Completed':
      return (
        <span
          style={{
            borderRadius: '10%',
            backgroundColor: 'hsl(156deg, 42%, 68%)',
            color: '#000',
            fontSize: '75%',
          }}
        >
          {status}
        </span>
      );
    default:
      throw new Error(`Didn't expect to get here with status: ${status}`);
  }
};

export default Status;
