import React from "react";

const LandingContext = React.createContext();

function LandingProvider({ children }) {
    const [modal, setModal] = React.useState(false);

    return (
        <LandingContext.Provider value={{
            modal,
            setModal,
        }}>
            {children}
        </LandingContext.Provider>
    )
}

export { LandingContext, LandingProvider }
