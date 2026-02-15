import { createContext } from "react";
import type { StackContextInterface } from "../../../typings/types";


export const StackContext = createContext<StackContextInterface | null>(null);