'use client';

import React, { useState } from 'react';

const buttons = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['모두\n지우기', '0', '지우기'],
];

const formatPhoneNumber = (input: string) => {
    // 숫자만 추출
    let numbers = input.replace(/[^\d]/g, '');
    let formatted = '';
  
    if(input.length >= 3) {
      formatted = input.slice(0,3)+'-';
    }
    
    // 숫자가 3자리 이하인 경우, '010-' 형식을 유지
    if (numbers.length <= 2) {
      return numbers;
    } else if(numbers.length == 3) {
      formatted = numbers+'-';
      numbers = numbers.substring(3);
    } else {
      numbers = numbers.substring(3);
    }
  
    // 숫자를 3-4-4 형식으로 분할
    if (numbers.length > 0) {
      formatted += numbers.substring(0, 4);
      if (numbers.length > 4) {
        formatted += '-' + numbers.substring(4, 8);
      }
    }
  
    return formatted;
  };
  

const NumberPad = () => {
  // 전화번호의 기본값을 '010'으로 설정
  const [input, setInput] = useState('010-');

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => {
    if (value === '지우기') {
        let updatedInput = prevInput;
        // 현재 입력값이 '010-' 인 경우, 모두 삭제
        if (prevInput.length === 4) {
          updatedInput = prevInput.slice(0, -2);
          return updatedInput;
        } else{
            // 그 외의 경우, 마지막 숫자 또는 '-' 삭제
            updatedInput = prevInput.slice(0, -1);
        }
        if (updatedInput.length === 3) {
            return updatedInput+'-'; // '010' 뒤에 '-'를 다시 추가
        }
        return formatPhoneNumber(updatedInput);
     }
          
      else if (value === '모두\n지우기') {
        return '010-'; // 전화번호 초기화
      } else {
        // 숫자 추가 로직
        const newInput = prevInput.replace(/-/g, '') + value;
        if (newInput.length > 11) return formatPhoneNumber(newInput.slice(0, 11)); // 최대 입력 길이 초과 시 자르기
        return formatPhoneNumber(newInput); // 입력에 숫자 추가 및 포맷 적용
      }
    });
  };
  
  
  

  const renderButtonLabel = (label: string) => {
    const parts = label.split('\n');
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}{index < parts.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* 입력된 전화번호를 보여주는 공간 */}
      <div className="text-2xl mb-4 p-2 bg-white rounded shadow">
        {formatPhoneNumber(input)}
      </div>

      <div className="bg-white p-5 rounded-xl shadow-2xl">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center">
            {row.map((button) => (
              <button
              key={button}
              className={`w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 text-white font-bold rounded-full m-3 hover:from-indigo-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 shadow-lg transform transition duration-150 ease-in-out active:scale-95 
              ${button == '모두\n지우기' || button == '지우기' ? 'text-sm' : 'text-3xl'}`}
                onClick={() => handleButtonClick(button)}
              >
                {renderButtonLabel(button)}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberPad;
