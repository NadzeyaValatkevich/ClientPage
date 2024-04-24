import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Order } from "../Order";

export const Layout = () => {
    return (
        <>
            <Header />
            <Order />
            <Outlet />
            <Footer />
        </>
    )
}