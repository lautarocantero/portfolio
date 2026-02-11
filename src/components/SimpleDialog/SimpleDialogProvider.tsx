

import { useState, type PropsWithChildren } from "react";
import { SimpleDialogContext } from "./SimpleDialogContext";

export const SimpleDialogProvider = ({ children }: PropsWithChildren): React.ReactNode => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <SimpleDialogContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </SimpleDialogContext.Provider>
  );
};
