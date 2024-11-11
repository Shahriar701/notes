import { createContext, useContext } from "react";

export interface AppContextType {
  isAuthenticated: boolean;
  userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

// Provide a default no-op function for userHasAuthenticated
export const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  userHasAuthenticated: () => {}, // This should be a dummy function
});

export function useAppContext() {
  return useContext(AppContext);
}
