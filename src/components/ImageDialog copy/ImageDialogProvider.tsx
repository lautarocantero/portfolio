

import { useState, type PropsWithChildren } from "react";
import { ImageDialogContext } from "./ImageDialogContext";

export const ImageDialogProvider = ({ children }: PropsWithChildren): React.ReactNode => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <ImageDialogContext.Provider value={{ showModal, setShowModal, selectedImage, setSelectedImage }}>
      {children}
    </ImageDialogContext.Provider>
  );
};
