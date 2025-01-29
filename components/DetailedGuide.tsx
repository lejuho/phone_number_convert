import { memo } from 'react';

interface DetailedGuideProps {
  showGuide: boolean;
  onToggle: () => void;
}

const DetailedGuide = memo(function DetailedGuide({ showGuide, onToggle }: DetailedGuideProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">전화번호 형식 안내</h2>
      <button
        onClick={onToggle}
        className="mb-4 text-blue-500 hover:text-blue-600"
      >
        {showGuide ? '가이드 접기 ▼' : '가이드 펼치기 ▶'}
      </button>
      
      {showGuide && (
        <div className="space-y-4">
          <section>
            <h3 className="text-xl font-semibold mb-2">국제 전화번호 형식이란?</h3>
            <p className="text-gray-700">
              국제 전화번호 형식은 ITU-T E.164 표준을 따르며, 국가 코드(한국의 경우 +82)를 포함한
              표준화된 형식입니다. 이는 글로벌 커뮤니케이션에서 혼란을 방지하고 명확한 식별을 가능하게 합니다.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">한국 전화번호 체계</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>휴대폰 번호: 010으로 시작하는 11자리 번호</li>
              <li>지역 번호: 02(서울), 031(경기), 032(인천) 등</li>
              <li>특수 번호: 1588, 1666 등의 대표 번호</li>
              <li>인터넷 전화: 070으로 시작하는 번호</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">자주 묻는 질문</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Q: 왜 국제 형식으로 변환이 필요한가요?</p>
                <p className="text-gray-700">
                  해외 비즈니스 파트너와의 연락, 국제 문서 작성, 해외 서비스 가입 등에서
                  표준화된 형식이 요구됩니다.
                </p>
              </div>
              <div>
                <p className="font-medium">Q: 변환된 번호는 어떻게 사용하나요?</p>
                <p className="text-gray-700">
                  변환된 형식은 그대로 복사하여 국제 문서, 해외 서비스 가입 양식, 
                  명함 등에 사용할 수 있습니다.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
});

export default DetailedGuide;