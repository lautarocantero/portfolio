

import { createContext } from "react";
import type { DialogContextType } from "../../typings/types";

export const DialogContext = createContext<DialogContextType | null>(null); 

