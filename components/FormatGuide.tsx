// components/FormatGuide.tsx

import { memo } from 'react';

const FormatGuide = memo(function FormatGuide() {
  const commonFormats = [
    { format: '010-1234-5678', desc: '일반 휴대폰 번호' },
    { format: '02-1234-5678', desc: '서울 지역 유선전화' },
    { format: '031-123-4567', desc: '경기도 지역 유선전화' },
    { format: '070-1234-5678', desc: '인터넷 전화' },
    { format: '1588-1234', desc: '대표 전화' },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">알아두면 좋은 전화번호 형식</h2>
      <div className="space-y-3">
        {commonFormats.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
            <span className="font-mono text-blue-600">{item.format}</span>
            <span className="text-gray-600 text-sm">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default FormatGuide;