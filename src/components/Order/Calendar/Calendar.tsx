import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./Calendar.module.scss";
import calendarIcon from "../../../assets/icons/calendar.svg";
import React from "react";

type CalendarPropsType = {
    selectedDate: Date | null,
    onDateChange: (date: Date) => void,
    firstDay: Date
};

export const Calendar = ({ selectedDate, onDateChange, firstDay }: CalendarPropsType) => {

    const CustomInput = React.forwardRef((props: any, ref: any) => {
        return (
            <div className={selectedDate ? `${style.customDatePickDiv} ${style["customDatePickDiv-selected"]}` : style.customDatePickDiv} onClick={props.onClick}>
                <input className={style.customInput} ref={ref} value={props.value || props.placeholder} onChange={props.onChange} />
                <img className={style.image} src={calendarIcon} alt="Calendar" onClick={props.onClick} />
            </div>

        )
    });

    return (
        <div className={style.datePickerDiv}>
            <DatePicker
                selected={selectedDate}
                locale={"ru"}
                dateFormat="dd.MM.yyyy"
                onChange={onDateChange}
                customInput={<CustomInput />}
                minDate={firstDay}
            />
        </div>
    )
}