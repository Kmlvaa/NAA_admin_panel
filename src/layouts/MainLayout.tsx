import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSidebarExpanded } from "../context/NavbarContext";

export default function MainLayout() {
  const { isExpanded } = useSidebarExpanded();

  return (
    <div className="flex flex-row w-full p-0 m-0 max-sm:flex-col">
      <Navbar />
      <main className={`flex-1 max-sm:mt-20 max-sm:ml-0 p-5 overflow-auto ${!isExpanded ? 'ml-24' : 'ml-60 max-md:ml-24'}`}>
        <Outlet />
      </main>
    </div>
  )
}
