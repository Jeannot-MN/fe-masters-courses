import { createContext, useState } from "react";

export const AdoptedPetContext = createContext();

export function AdoptedPetContextProvider({ children }) {
  const adoptedPets = useState([]);
  return (
    <AdoptedPetContext.Provider value={adoptedPets}>
      {children}
    </AdoptedPetContext.Provider>
  );
}
