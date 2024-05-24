import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale/ru";
import style from "./CheckDateInput.module.scss";
import calendarIcon from "../../../assets/icons/calendar.svg";
import calendarGrayIcon from "../../../assets/icons/calendarGray.svg";
import { forwardRef } from "react";

type CheckDateInputPropsType = {
    selectedDate: Date | null | undefined,
    onDateChange: (date: Date) => void,
    firstDay?: Date
};

registerLocale("ru", ru);

export const CheckDateInput = forwardRef<HTMLInputElement, CheckDateInputPropsType>(({ selectedDate, onDateChange, firstDay }, ref) => {

    const CustomInput = forwardRef<HTMLInputElement, any>((props: any, ref: any) => {
        return (
            <div className={selectedDate ? `${style.customDatePickDiv} ${style["customDatePickDiv-selected"]}` : style.customDatePickDiv} onClick={props.onClick}>
                <input className={style.customInput} ref={ref} value={props.value || props.placeholder} onChange={props.onChange} />
                <img className={style.image} src={selectedDate ? calendarIcon : calendarGrayIcon} alt="Calendar" onClick={props.onClick} />
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
                customInput={<CustomInput ref={ref} />}
                minDate={firstDay}
                maxDate={new Date(new Date().setMonth(new Date().getMonth() + 12))}
            />
        </div>
    )
})