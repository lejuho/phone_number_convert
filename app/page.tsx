'use client';

import { useCallback, useEffect, useState } from 'react';

import { convertToInternational } from '@/lib/PhoneUtils';
import dynamic from 'next/dynamic';

// 동적 임포트로 컴포넌트 분리
const PhoneInput = dynamic(() => import('@/components/PhoneInput'), { ssr: false });
const ConvertedNumber = dynamic(() => import('@/components/ConvertedNumber'), { ssr: false });
const FormatGuide = dynamic(() => import('@/components/FormatGuide'), { ssr: false });
const DetailedGuide = dynamic(() => import('@/components/DetailedGuide'), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [phone, setPhone] = useState('');
  const [convertedNumber, setConvertedNumber] = useState('');
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePhoneChange = useCallback((value: string) => {
    setPhone(value);
  }, []);

  const handleConvert = useCallback(() => {
    const result = convertToInternational(phone);
    if (result) {
      setConvertedNumber(result);
    } else {
      alert('유효한 한국 전화번호 형식이 아닙니다');
    }
  }, [phone]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(convertedNumber);
    } catch (error) {
      console.error('복사 실패:', error);
    }
  }, [convertedNumber]);

  const toggleGuide = useCallback(() => {
    setShowGuide(prev => !prev);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-md mb-6">
          <h1 className="text-3xl font-bold mb-2">한국 전화번호 국제형식 변환기</h1>
          <p className="text-gray-600 mb-6">
            국내 전화번호를 국제 표준 형식으로 쉽게 변환하여 해외 비즈니스나 국제 교류에 활용하세요.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <PhoneInput value={phone} onChange={handlePhoneChange} />
              
              <button
                onClick={handleConvert}
                className="w-full bg-blue-500 text-white p-4 rounded hover:bg-blue-600 text-lg"
              >
                변환하기
              </button>

              {convertedNumber && (
                <ConvertedNumber 
                  number={convertedNumber} 
                  onCopy={handleCopy}
                />
              )}
            </div>

            <FormatGuide />
          </div>
        </div>

        <DetailedGuide 
          showGuide={showGuide} 
          onToggle={toggleGuide}
        />
      </div>
    </div>
  );
}
