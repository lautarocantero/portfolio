

import { useState, type PropsWithChildren } from "react";
import { StackContext } from "./StackContext";

export const StackContextProvider = ({ children }: PropsWithChildren): React.ReactNode => {
  const [filteredStacks, setFilteredStacks] = useState<string[]>([]);

  return (
    <StackContext.Provider value={{ filteredStacks, setFilteredStacks }}>
      {children}
    </StackContext.Provider>
  );
};
