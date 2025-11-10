// NavbarContext.tsx
import { createContext, useContext, useState, useEffect,type ReactNode } from "react";

interface SidebarContextType {
  isExpanded: boolean;
  toggle: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(() => {
    const stored = localStorage.getItem("isSidebarExpanded");
    return stored !== null ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    localStorage.setItem("isSidebarExpanded", JSON.stringify(isExpanded));
  }, [isExpanded]);

  const toggle = () => setIsExpanded(!isExpanded);

  return (
    <SidebarContext.Provider value={{ isExpanded, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarExpanded() {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebarExpanded must be used inside SidebarProvider");
  return context;
}
