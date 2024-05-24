import { Outlet, useParams } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { useAppDispatch } from "../../utils/hooks";
import { useEffect } from "react";
import { fetchMainObject } from "../../redux/thunks/mainObjectThunk";
import { fetchRentalObjects } from "../../redux/thunks/rentalObjectsThunk";
import { FilteredBlock } from "../FilteredBlock";

export const Layout = ({ scrollToFilteredObjects }: any) => {
    const dispatch = useAppDispatch();

    const { id } = useParams();

    useEffect(() => {

        id && dispatch(fetchMainObject(Number(id)))
        dispatch(fetchRentalObjects(Number(id)))
    }, []);
    return (
        <>
            <Header />
            <FilteredBlock scrollToFilteredObjects={scrollToFilteredObjects} />
            <Outlet />
            <Footer />
        </>
    )
}