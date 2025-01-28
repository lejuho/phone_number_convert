//ConfigureStore.js

import { createWrapper } from 'next-redux-wrapper';

// configureStore 여기에서는 일반 redux와 비슷
const configureStore = () => {
	
   
};

// { debug: process.env.NODE_ENV === "development" }
const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
}); // 두번째는 옵션 객체

export default wrapper