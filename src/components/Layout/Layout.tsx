import { Outlet, useParams } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { useEffect } from "react";
import { fetchMainObject } from "../../redux/thunks/mainObjectThunk";
import { fetchRentalObjects } from "../../redux/thunks/rentalObjectsThunk";
import { FilteredBlock } from "../FilteredBlock";
import { RequestStatusType } from "../../common/enums/enums";
import { BeatLoader } from "react-spinners";

export const Layout = ({ scrollToFilteredObjects }: any) => {
    const dispatch = useAppDispatch();
    const { status } = useAppSelector(state => state.mainObject);

    const { id } = useParams();

    useEffect(() => {

        id && dispatch(fetchMainObject(Number(id)))
        dispatch(fetchRentalObjects(Number(id)))
    }, [])

    if (status === RequestStatusType.loading) {
        return <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BeatLoader color="#1855b7" />
        </div>
    }

    return (
        <>
            <Header />
            <FilteredBlock scrollToFilteredObjects={scrollToFilteredObjects} />
            <Outlet />
            <Footer />
        </>
    )
}