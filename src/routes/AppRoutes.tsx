import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}
