import React from 'react';

// 예약 데이터 타입 정의
interface Reservation {
  id: number;
  ph_number: string;
  time: string;
}

// 예시 데이터
const reservations: Reservation[] = [
  { id: 1, ph_number: '010-xxxx-1234', time: '12:00:01' },
  { id: 2, ph_number: '010-xxxx-1235', time: '12:00:30' },
  { id: 3, ph_number: '010-xxxx-1236', time: '12:01:55' },
  // 추가 예약 데이터...
];

const ReservationList: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full">
      <h2 className="text-xl font-semibold mb-4">예약 리스트</h2>
      <div className="reservation-items w-full">
        {reservations.map((reservation) => (
          <div key={reservation.id} className="reservation-item mb-3 p-2 bg-gray-100 rounded-md flex justify-between items-center">
            <span className="name font-medium mr-10 flex-shrink-0">{reservation.time}</span>
            <span className="time text-sm text-gray-600 flex-grow text-right">{reservation.ph_number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ReservationList;
