import { Outlet, useParams } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/hooks";
import { useEffect } from "react";
import { fetchMainObject } from "../../redux/thunks/mainObjectThunk";
import { RequestStatusType } from "../../common/enums/enums";
import { BeatLoader } from "react-spinners";
import { NETWORK_ERROR, NOTFOUND_ERROR } from "../../utils/constants";
import { ErrorPage } from "../../pages/ErrorPage";
import { SmileIcon } from "../../assets/icons/Smile";

export const Layout = () => {
    const dispatch = useAppDispatch();
    const { status } = useAppSelector(state => state.mainObject);
    const { error } = useAppSelector(state => state.mainObject);

    const { id } = useParams();

    useEffect(() => {
        id && dispatch(fetchMainObject(id))
    }, [])

    if (status === RequestStatusType.loading) {
        return <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BeatLoader color="#1855b7" />
        </div>
    }

    if (error && error === NETWORK_ERROR) {
        return (
            <ErrorPage text={NETWORK_ERROR} />
        )
        // <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        //     {NETWORK_ERROR}
        // </div>
    }

    return (
        <>
            {(error && error === NOTFOUND_ERROR) ?
                <ErrorPage text={NOTFOUND_ERROR} image={<SmileIcon />} />
                :
                <>
                    <Header />
                    {/* <FilteredBlock scrollToFilteredObjects={scrollToFilteredObjects} /> */}
                    <Outlet />
                    <Footer />
                </>
            }
        </>
    )
}