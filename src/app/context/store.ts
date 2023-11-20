import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface ContextProps {
  Variant: string;
  setVariant: (type: string) => void;
}
export const GlobalContextStore = createContext<ContextProps>({
  Variant: "default",
  setVariant: (): string => "default",
});
export const useGlobalContext = () => useContext(GlobalContextStore);
