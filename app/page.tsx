"use client";

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Head from 'next/head';
import NumberPad from './ui/main/number-pad';
import React, { useState, useEffect } from 'react';
import NumberInput from './ui/main/number-input';
import { formatPhoneNumber } from './lib/utils';
import ReserveButton from './ui/main/reserve-button';
import image from 'next/image';
import ReservationList from './ui/main/reservations-list';

export default function Page() {
  const imageNumber = Math.floor(Math.random() * 8) + 1;
  const [input, setInput] = useState('010-');
  const [customImgUrl, setCustomImgUrl] = useState(`/background/${imageNumber}.jpg`);

  useEffect(() => {
    const changeBackgroundImage = () => {
      const imageNumber = Math.floor(Math.random() * 8) + 1;
      setCustomImgUrl(`/background/${imageNumber}.jpg`);
    };
    // 1분마다 배경 이미지 변경
    const interval = setInterval(changeBackgroundImage, 5000);

    // 컴포넌트 언마운트 시 인터벌 클리어
    return () => clearInterval(interval);
  }, []);


  const handleButtonClick = (value: string) => {
    setInput((prevInput) => {
      if (value === '지우기') {
        let updatedInput = prevInput;
        // 현재 입력값이 '010-' 인 경우, 모두 삭제
        if (prevInput.length === 4) {
          updatedInput = prevInput.slice(0, -2);
          return updatedInput;
        } else {
          // 그 외의 경우, 마지막 숫자 또는 '-' 삭제
          updatedInput = prevInput.slice(0, -1);
        }
        if (updatedInput.length === 3) {
          return updatedInput + '-'; // '010' 뒤에 '-'를 다시 추가
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

  return (
    <div>
      <Head>
        <title>Responsive Grid with Next.js and Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
      <main>
        <div className="relative h-screen w-screen">
          <Image
            src={customImgUrl} // 이미지 경로
            layout="fill" // 부모 컨테이너에 맞춤
            objectFit="cover" // 이미지가 컨테이너를 꽉 채우도록 조절
            objectPosition="center" // 이미지 중앙 정렬
            alt="Background Image"
            style={{ zIndex: -1 }}
          />
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-white p-5 rounded-xl shadow-2xl">
              <NumberInput value={input} />
              {/* <NumberPad onButtonClick={handleButtonClick} /> */}
              {/* <div className='w-full flex justify-between'> */}
              <div className="flex flex-col md:flex-row">
                <div className="number-pad w-full md:w-1/2 lg:w-2/3">
                  <NumberPad onButtonClick={handleButtonClick} />
                </div>
                
                <div className="reservation-list md:w-2/3 lg:w-3/4 xl:w-3/4 mx-auto w-full">
                  <ReservationList />
                </div>
              </div>
              <ReserveButton value={input} />
            </div>
          </div>
        </div>


      </main>
    </div>
  );
}




