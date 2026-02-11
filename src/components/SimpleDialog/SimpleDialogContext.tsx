

import { createContext } from "react";
import type { SimpleDialogContextType } from "../../typings/types";

export const SimpleDialogContext = createContext<SimpleDialogContextType | null>(null); 

