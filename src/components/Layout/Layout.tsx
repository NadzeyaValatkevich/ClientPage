import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../../pages/Main";
import { Order } from "../Order";

export const Layout = () => {
    return (
        <>
            <Header />
            <Order />
            <Main />
            <Footer />
        </>
    )
}