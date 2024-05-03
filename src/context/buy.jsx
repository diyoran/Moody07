import { Children, createContext } from "react";
export const BuyContext = createContext()

export const BuyProvider = ({children}) => {
    return <BuyContext.Provider value={contextValues}>
        {children}
    </BuyContext.Provider>
}