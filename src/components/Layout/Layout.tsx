import { Outlet, useParams } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Order } from "../Order";
import { useAppDispatch } from "../../utils/hooks";
import { useEffect } from "react";
import { fetchMainObject } from "../../redux/thunks/mainObjectThunk";
import { fetchRentalObjects } from "../../redux/thunks/rentalObjectsThunk";

export const Layout = ({ scrollToFilteredObjects }: any) => {
    const dispatch = useAppDispatch();

    const { id } = useParams();

    useEffect(() => {

        id && dispatch(fetchMainObject(Number(id)))
        dispatch(fetchRentalObjects())
    }, []);
    return (
        <>
            <Header />
            <Order scrollToFilteredObjects={scrollToFilteredObjects} />
            <Outlet />
            <Footer />
        </>
    )
}