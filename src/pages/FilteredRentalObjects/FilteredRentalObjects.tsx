import style from "./FilteredRentalObjects.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import { useAppSelector } from "../../utils/hooks";
import { CommonHouseCard } from "../../components/CommonHouseCard/CommonHouseCard";
import { RentalObject } from "../../redux/types/rentalObjectTypes";
import { countRooms } from "../../utils/functions/countRooms";
import { features } from "../Main/Main";
import { Button } from "../../components/Button/Button";
import { FullHouseCard } from "../../components/FullHouseCard";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import { Booking } from "../../components/Booking";

export const FilteredRentalObjects = () => {
    const { results, count } = useAppSelector(state => state.filteredRentalObjects);
    const [modalActive, setModalActive] = useState(false);
    const [modalBookingActive, setModalBookingActive] = useState(false);

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