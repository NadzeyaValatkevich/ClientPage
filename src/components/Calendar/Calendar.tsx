import { useState } from "react";
import DatePicker from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import style from "./Calendar.module.scss";
import calendarIcon from "../../assets/icons/calendar.svg";
import React from "react";

export const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const today = new Date();

    const handleSelectedChange = (date: Date) => {
        setSelectedDate(date)
    };
    const CustomInput = React.forwardRef((props: any, ref: any) => {
        return (
            <div className={selectedDate ? `${style.customDatePickDiv} ${style["customDatePickDiv-selected"]}` : style.customDatePickDiv}>
                <label className={style.label} onClick={props.onClick} ref={ref}>
                    {props.value || props.placeholder}
                </label>
                <img className={style.image} src={calendarIcon} alt="Calendar" onClick={props.onClick} />
            </div>

        )
    })

    return (
        <div className={style.datePickerDiv}>
            <DatePicker
                selected={selectedDate}
                locale={ru}
                dateFormat="dd.MM.yyyy"
                onChange={handleSelectedChange}
                customInput={<CustomInput />}
                minDate={today}
            />
        </div>
    )
}