import { memo } from 'react';

interface ConvertedNumberProps {
  number: string;
  onCopy: () => void;
}

const ConvertedNumber = memo(function ConvertedNumber({ number, onCopy }: ConvertedNumberProps) {
  return (
    <div className="p-4 bg-gray-50 rounded">
      <p className="font-semibold">국제 형식:</p>
      <p className="text-2xl mt-2 font-mono text-blue-600">{number}</p>
      <button
        onClick={onCopy}
        className="mt-3 w-full bg-green-100 text-green-600 p-2 rounded hover:bg-green-200"
      >
        복사하기
      </button>
    </div>
  );
});

export default ConvertedNumber;