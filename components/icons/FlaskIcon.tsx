
import React from 'react';

export const FlaskIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M9 2v10.33c0 .58-.33.88-.63.95-.23.05-.37.05-.5 0-.3-.07-.67-.37-.67-.95V2" />
      <path d="M15 2v10.33c0 .58.33.88.63.95.23.05.37.05.5 0 .3-.07.67-.37.67-.95V2" />
      <path d="M3.5 12h17" />
      <path d="M12 12V2" />
      <path d="M4.3 12c-1.1.2-1.8 1-1.8 2.2 0 1.2 1 2.2 2.2 2.2 1.5 0 2.2-1.3 2.2-2.5 0-1.5-1-2.5-2.2-2.5" />
      <path d="M19.7 12c1.1.2 1.8 1 1.8 2.2 0 1.2-1 2.2-2.2 2.2-1.5 0-2.2-1.3-2.2-2.5 0-1.5 1-2.5 2.2-2.5" />
      <path d="M12 16.5c1.1 0 2.2-1 2.2-2.2 0-1.2-.8-2.3-2-2.3-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2 2.3" />
      <path d="M12 22v-3.5" />
    </svg>
  );
};
