import { useEffect } from "react";
import style from "./Booking.module.scss";
import { Conditions } from "./Conditions";
import { Contacts } from "./Contacts";
import { InfoObject } from "./InfoObject";
import { PersonalInfo } from "./PersonalInfo";
import { RentalObject } from "../../redux/types/rentalObjectTypes";

type BookingPropsType = {
    modalBookingActive: boolean,
    house: RentalObject,
    // check_in_date: Date | string | null,
    // check_out_date: Date | string | null,
}

export const Booking = ({ modalBookingActive, house }: BookingPropsType) => {
    const { name, check_in_time, check_out_time, price } = house

    useEffect(() => {
        if (modalBookingActive) {
            document.body.classList.add('open');
        } else {
            document.body.classList.remove('open');
        }

        return () => {
            document.body.classList.remove('open');
        };
    }, [modalBookingActive]);

    return (
        <div className={style.booking}>
            <form>
                <InfoObject title={name} check_in_time={check_in_time} check_out_time={check_out_time} price={price} />
                <Conditions />
                <PersonalInfo />
                <Contacts />
                <div className={style["booking__comment"]}>
                    <h4 className={style["booking__comment-title"]}>Комментарий</h4>
                    <textarea className={style["booking__comment-text"]} placeholder="Комментарий"></textarea>
                </div>

            </form>

        </div>

    )
}