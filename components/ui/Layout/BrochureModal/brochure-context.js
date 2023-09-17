import * as React from 'react';


// context

export const BrochureContext = React.createContext({
    brochureOpen: false,
    toggleBrochure: () => {},
});

// hooks
 
export const useBrochureContext = () => React.useContext(BrochureContext);

// provider

export const BrochureProvider = BrochureContext.Provider;