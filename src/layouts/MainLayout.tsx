import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-row w-full p-0 m-0">
        <Navbar />
         <main className="flex-1 p-5 ml-80 max-xl:ml-64 max-lg:ml-28 overflow-auto">
            <Outlet />
        </main>
    </div>
  )
}
