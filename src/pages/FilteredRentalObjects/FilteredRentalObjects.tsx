import style from "./FilteredRentalObjects.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { CommonHouseCard } from "../../components/CommonHouseCard/CommonHouseCard";
import { RentalObject } from "../../redux/types/rentalObjectTypes";
import { Button } from "../../components/Button/Button";
import { FullHouseCard } from "../../components/FullHouseCard";
import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal";
import { Booking } from "../../components/Booking";
import { useSearchParams } from "react-router-dom";
import { DatesGuestsObjectRequestType } from "../../redux/types/datesGuestsTypes";
import { fetchFilteredRentalObjects } from "../../redux/thunks/filteredRentalObjectThunk";
import React from "react";
import { RequestStatusType } from "../../common/enums/enums";
import { BeatLoader } from "react-spinners";
import { appActions } from "../../redux/commonActions/appActions";

export const FilteredRentalObjects = React.forwardRef((props: any, ref: any) => {

    const { results, count } = useAppSelector(state => state.filteredRentalObjects.data);
    const { status, error } = useAppSelector(state => state.filteredRentalObjects);

    const [activeHouse, setActiveHouse] = useState<RentalObject | null>(null);
    const [bookingHouse, setBookingHouse] = useState<RentalObject | null>(null);
    const [modalActive, setModalActive] = useState(false);
    const [modalBookingActive, setModalBookingActive] = useState(false);

    console.log(props)

    const [searchParams] = useSearchParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        const queryParams = new URLSearchParams(searchParams);

        const queryParamsData: DatesGuestsObjectRequestType = {
            check_in_date: queryParams.get('check_in_date'),
            check_out_date: queryParams.get('check_out_date'),
            people_amount: queryParams.get('people_amount'),
            main_object: queryParams.get('main_object'),
        };

        dispatch(fetchFilteredRentalObjects(queryParamsData));
    }, [searchParams, dispatch]);

    const onClickHandler = (house: RentalObject) => {
        setActiveHouse(house);
        setModalActive(true);
    };

    const onCloseHandler = () => {
        setModalActive(false);
        setActiveHouse(null);
    };

    const onClickBookingHandler = (house: RentalObject) => {
        setBookingHouse(house);
        setModalBookingActive(true);
    };

    const onCloseBookingHandler = () => {
        dispatch(appActions.setError({ error: null }))
        dispatch(appActions.setStatus({ status: RequestStatusType.idle }))
        setModalBookingActive(false);
        setBookingHouse(null);
    };

    const Loader = () => {
        return <div style={{ marginBottom: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BeatLoader color="#1855b7" />
        </div>
    }

    if (error) {
        return <div style={{
            width: "100vw",
            marginBottom: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "600"
        }} >
            {error}
        </div >
    }

    return (
        <div className={style.rentalObjectsBlock} ref={ref}>
            <div className={styleContainer.container}>
                {status === RequestStatusType.loading ?
                    < Loader /> :
                    count === 0 ?
                        <div className={style.infoText}>К сожалению, подходящих домиков для бронирования на выбранные даты и количество гостей не найдено.
                            Попробуйте изменить даты или количество гостей.</div>
                        : results && results.length >= 1 && results.map((el: RentalObject) => (
                            <CommonHouseCard key={el.id} house={el}>
                                <div className={style.priceBlock}>
                                    <p className={style.priceBlockTitle}>Общая стоимость за весь период проживания:</p>
                                    <p className={style.price}>{el.price}<span>BYN</span></p>
                                </div>
                                <div className={style.btnsBlock}>
                                    <Button value={"Забронировать"} className={style.btnBook} onClick={() => onClickBookingHandler(el)} />
                                    <Button value={"Подробнее"} className={style.btnDetails} onClick={() => onClickHandler(el)} />
                                </div>
                            </CommonHouseCard>
                        ))
                }

            </div>

            {modalActive && activeHouse && (
                <Modal active={modalActive} onClose={onCloseHandler} setActive={setModalActive} type={"houseModal"}>
                    <FullHouseCard rentalObject={activeHouse} modalActive={modalActive} />
                </Modal>
            )}

            {modalBookingActive && bookingHouse && (
                <Modal active={modalBookingActive} onClose={onCloseBookingHandler} setActive={setModalBookingActive} type={"bookingModal"}>
                    <Booking modalBookingActive={modalBookingActive} setModalBookingActive={setModalBookingActive} house={bookingHouse} />
                </Modal>
            )}
        </div>
    );
});