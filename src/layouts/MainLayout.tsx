import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-row w-full p-0 m-0">
        <Navbar />
        <main className="w-3/4 p-5 ml-80">
            <Outlet />
        </main>
    </div>
  )
}
