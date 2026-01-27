import { createContext } from "react";
import type { SnackBarContextInterface } from "../../../typings/reactComponents";

export const SnackBarContext = createContext<SnackBarContextInterface | null>(null);