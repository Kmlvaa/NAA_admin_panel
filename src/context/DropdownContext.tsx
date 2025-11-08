import { createContext, useContext, useState, type ReactNode } from "react";

interface DropdownContextType {
  openDropdown: string | null;
  setOpenDropdown: (label: string | null) => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("useDropdownContext must be used within a Provider");
  return context;
};

export const DropdownProvider = ({ children }: { children: ReactNode }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <DropdownContext.Provider value={{ openDropdown, setOpenDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};
