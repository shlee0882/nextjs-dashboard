import { formatPhoneNumber } from '@/app/lib/utils';
import React, { useState } from 'react';

interface ReserveButtonProps {
    value: string;
}

const ReserveButton: React.FC<ReserveButtonProps> = ({ value }) => {
    const handleSubmit = async () => {
        console.log(value);
        // 입력된 value 값을 사용하여 API에 POST 요청
        // const response = await fetch('API_ENDPOINT', { // 'API_ENDPOINT'는 실제 엔드포인트 주소로 대체
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ phoneNumber: value }),
        // });

        // if (response.ok) {
        //     const data = await response.json();
        //     console.log(data); // 응답 데이터 처리
        //     // 예약 성공 처리 로직
        // } else {
        //     // 예약 실패 처리 로직
        //     console.error('예약 실패');
        // }
        
        /*
        1. 예약이 완료되었습니다.
        2. 카톡 알림톡?? 발송
        3. 
        */
    };

    return (
        <div style={{ minWidth: 310 }} className="flex justify-center">
            <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-150 ease-in-out active:scale-95"
                onClick={handleSubmit}
            >
                예약하기
            </button>
        </div>
    )
}

export default ReserveButton;
