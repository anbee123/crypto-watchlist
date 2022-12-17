import React, { useState, createContext, useContext } from "react";

const Crypto = createContext()
 const CryptoContext =({children})=>{
    const [currency, setCurrency] = useState("EUR")
    const [symbol, setSymbol]
    return (
         <Crypto.Provider>
            {children}
         </Crypto.Provider>

      
    )
 }
 export default CryptoContext
 export const CryptoState =()=>{
   return useContext(Crypto)
 }