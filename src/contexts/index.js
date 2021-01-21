import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export default function Context({children}){
    const [theme,SetTheme] = useState('light');
    return(
        <MyContext.Provider value={{theme,SetTheme}}>
            {children}
        </MyContext.Provider>
    );
}

