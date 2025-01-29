import { memo } from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput = memo(function PhoneInput({ value, onChange }: PhoneInputProps) {
  return (
    <div>
      <label className="block mb-2 font-medium">한국 전화번호 입력</label>
      <input
        type="tel"
        className="w-full p-4 border rounded text-xl"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="예: 01012345678 (국가코드 없이 입력)"
        pattern="[0-9]*"
      />
    </div>
  );
});

export default PhoneInput;