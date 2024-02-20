'use client';

import { formatPhoneNumber } from '@/app/lib/utils';
import React, { useState } from 'react';

const buttons = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['모두\n지우기', '0', '지우기'],
];

interface NumberPadProps {
  onButtonClick: (buttonValue: string) => void;
}

const NumberPad: React.FC<NumberPadProps> = ({ onButtonClick }) => {

  const renderButtonLabel = (label: string) => {
    const parts = label.split('\n');
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}{index < parts.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {row.map((button) => (
            <button
              key={button}
              // className={`w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 text-white font-bold rounded-full m-3 hover:from-indigo-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 shadow-lg transform transition duration-150 ease-in-out active:scale-95 
              className={`w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold rounded-full m-3 
              hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 
              focus:ring-opacity-50 shadow-lg transform transition duration-150 ease-in-out active:scale-95 
              ${button == '모두\n지우기' || button == '지우기' ? 'text-sm' : 'text-3xl'}`}
              onClick={() => onButtonClick(button)}
            >
              {renderButtonLabel(button)}
            </button>
          ))}
        </div>
      ))}
    </>
  );
};

export default NumberPad;
