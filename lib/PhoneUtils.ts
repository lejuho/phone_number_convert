import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const convertToInternational = (phone: string) => {
  try {
    const phoneNumber = parsePhoneNumberFromString(phone, 'KR');
    return phoneNumber ? phoneNumber.formatInternational() : null;
  } catch (error) {
    console.error('Phone conversion error:', error);
    return null;
  }
};

export default convertToInternational;