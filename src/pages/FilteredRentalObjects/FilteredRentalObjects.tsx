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

export const FilteredRentalObjects = () => {
    const { results, count } = useAppSelector(state => state.filteredRentalObjects);
    const [modalActive, setModalActive] = useState(false);
    const [modalBookingActive, setModalBookingActive] = useState(false);

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

        dispatch(fetchFilteredRentalObjects(queryParamsData))
    }, [searchParams, dispatch])

    const onClickHandler = () => {
        setModalActive(true)
    };

    const onCloseHandler = () => {
        setModalActive(false)
    };

    const onClickBookingHandler = () => {
        setModalBookingActive(true)
    };

    const onCloseBookingHandler = () => {
        setModalBookingActive(false)
    };

    return (
        <div className={style.rentalObjectsBlock}>
            <div className={styleContainer.container}>
                {count === 0 ?
                    <div className={style.infoText}>К сожалению, подходящих домиков для бронирования на выбранные даты и количество гостей не найдено.
                        Попробуйте изменить даты или количество гостей.</div>
                    : results && results.length >= 1 && results.map((el: RentalObject) => {
                        return <CommonHouseCard key={el.id} house={el}>
                            <div className={style.priceBlock}>
                                <p className={style.priceBlockTitle}>Общая стоимость за весь период проживания:</p>
                                <p className={style.price}>{el.price}<span>BYN</span></p>
                            </div>
                            <div className={style.btnsBlock}>
                                <Button value={"Забронировать"} className={style.btnBook} onClick={onClickBookingHandler} />
                                <Button value={"Подробнее"} className={style.btnDetails} onClick={onClickHandler} />
                            </div>
                            {modalActive && <Modal active={modalActive} onClose={onCloseHandler} setActive={setModalActive} type={"houseModal"}>
                                <FullHouseCard rentalObject={el} />
                            </Modal>}

                            {modalBookingActive && <Modal active={modalBookingActive} onClose={onCloseBookingHandler} setActive={setModalBookingActive} type={"bookingModal"}>
                                <Booking />
                            </Modal>}

                        </CommonHouseCard>
                    })
                }
            </div>
        </div>
    )
}