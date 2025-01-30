import { countryCodes } from '@/lib/CountryCode';

const CountryCodeTable = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Country</th>
            <th className="px-4 py-2 border-b">Country Code</th>
          </tr>
        </thead>
        <tbody>
          {countryCodes.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2 border-b">{item.country}</td>
              <td className="px-4 py-2 border-b">{item.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryCodeTable;
