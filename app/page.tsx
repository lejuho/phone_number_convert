'use client';

import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useState } from 'react';

export default function Home() {
  const [phone, setPhone] = useState<string>('');
  const [convertedNumber, setConvertedNumber] = useState<string>('');

  const handleConvert = () => {
    try {
      // 한국 번호로 강제 파싱
      const phoneNumber = parsePhoneNumberFromString(phone, 'KR');
      
      if (phoneNumber) {
        setConvertedNumber(phoneNumber.formatInternational());
      } else {
        alert('유효한 한국 전화번호 형식이 아닙니다');
      }
    } catch (error) {
      console.error(error);
      alert('올바른 번호를 입력해주세요 (예: 01012345678)');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-4">한국 번호 국제형식 변환기</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block mb-2">한국 전화번호 입력</label>
            <input
              type="tel"
              className="w-full p-4 border rounded text-xl"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="예: 01012345678 (국가코드 없이 입력)"
              pattern="[0-9]*"
            />
          </div>

          <button
            onClick={handleConvert}
            className="w-full bg-blue-500 text-white p-4 rounded hover:bg-blue-600 text-lg"
          >
            변환하기
          </button>

          {convertedNumber && (
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p className="font-semibold">국제 형식:</p>
              <p className="text-2xl mt-2 font-mono text-blue-600">
                {convertedNumber}
              </p>
              <button
                onClick={() => navigator.clipboard.writeText(convertedNumber)}
                className="mt-3 w-full bg-green-100 text-green-600 p-2 rounded hover:bg-green-200"
              >
                복사하기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}