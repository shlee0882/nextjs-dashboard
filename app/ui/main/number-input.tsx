import { formatPhoneNumber } from '@/app/lib/utils';
import React, { useState } from 'react';

interface NumberInputProps {
    value: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ value }) => {
    return (
        <div className="w-full mx-auto flex justify-center items-center text-3xl mb-4 p-4 bg-white rounded-lg shadow-xl font-semibold text-gray-800">
            {value}
        </div>
    //     <div className="flex justify-center items-center text-4xl mb-4 p-4 bg-white rounded-lg shadow-xl font-semibold text-gray-800">
    //     {value}
    // </div>
        
    )
}

export default NumberInput;
