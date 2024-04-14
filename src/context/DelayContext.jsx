import React, { createContext, useState } from "react";

// Create the context
export const DelayContext = createContext({
    delay: 0,
    setDelay: () => {},
});

// Provider component that encapsulates children components
export const DelayProvider = ({ children }) => {
    const [delay, setDelay] = useState(0);

    // Function to toggle delay
    const toggleDelay = (isDelayed) => {
        setDelay(isDelayed ? 50000000 : 0); // Set delay to 5000 ms or reset to 0 ms
    };

    return (
        <DelayContext.Provider value={{ delay, toggleDelay }}>
            {children}
        </DelayContext.Provider>
    );
};

export default DelayProvider;