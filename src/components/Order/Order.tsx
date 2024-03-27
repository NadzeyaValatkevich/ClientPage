import styleContainer from "../../common/styles/Container.module.scss";
import style from "./Order.module.scss";
import { Button } from "../Button/Button";
import { Calendar } from "./Calendar";
import { GuestsSelect } from "./GuestsSelect";
import { useState } from "react";


export const Order = () => {
    const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

    const handleCheckInDateChange = (date: Date) => {
        setCheckInDate(date);

        if (checkOutDate && date > checkOutDate) {
            setCheckOutDate(null);
        }

    };

    const handleCheckOutDateChange = (date: Date) => {
        setCheckOutDate(date);
    };

    const today = new Date();

    return (
        <div className={style.orderWrapper}>
            <div className={`${styleContainer.container} ${style.orderContainer}`}>
                <div className={style.orderBlock}>
                    <Calendar selectedDate={checkInDate} onDateChange={handleCheckInDateChange} firstDay={today} />
                    <Calendar selectedDate={checkOutDate} onDateChange={handleCheckOutDateChange} firstDay={checkInDate || today} />
                    <GuestsSelect />
                    {/* <InputBox title={"Дата заезда"} name={"date"} value={""} type={"date"} /> */}
                    <div className={style.btnBlock}>
                        <Button value={"Подобрать"} className={style.btnSearch} />
                    </div>
                </div>
            </div>
        </div>
    )
}