import CountryCodeTable from '@/components/CountryCodeTable';

export default function CountryCodesPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-md mb-6">
          <h1 className="text-3xl font-bold mb-4">국가별 전화번호 코드 목록</h1>
          <p className="text-gray-600 mb-6">
            전 세계 각국의 국가번호를 확인하고, 국제전화 시 사용하세요.
          </p>
          <CountryCodeTable />
        </div>
      </div>
    </div>
  );
}
