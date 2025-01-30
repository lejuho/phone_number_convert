import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">전화번호 변환기</Link>
        <div className="flex space-x-6">
          <Link href="/" className="hover:underline">홈</Link>
          <Link href="/country-codes" className="hover:underline">국가별 전화번호 목록</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
