import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface ContextProps {
  Variant: string;
  setVariant: (type: string) => void;
  cursorOn: string;
  setCursorOn: Dispatch<SetStateAction<string>>;
}
export const GlobalContextStore = createContext<ContextProps>({
  Variant: "default",
  setVariant: (): string => "default",
  cursorOn: "on",
  setCursorOn: (): string => "on",
});
export const useGlobalContext = () => useContext(GlobalContextStore);
