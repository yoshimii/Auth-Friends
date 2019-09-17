import { useState } from 'react';

const useLocalStorage = () => {
    const item = JSON.parse(localStorage.getItem(key));

    const [ storedValue, setStoredValue ] = useState(item || initialValue);

    csont setValue = value => {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    };

    return [ storedValue, setValue ];
};

export default useLocalStorage;