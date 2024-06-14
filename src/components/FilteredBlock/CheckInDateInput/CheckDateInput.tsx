import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale/ru";
import style from "./CheckDateInput.module.scss";
import calendarIcon from "../../../assets/icons/calendar.svg";
import calendarGrayIcon from "../../../assets/icons/calendarGray.svg";
import { forwardRef, useRef, useState } from "react";
import classNames from "classnames";

type CheckDateInputPropsType = {
    selectedDate: Date | string | undefined | null,
    onDateChange: (date: Date) => void,
    firstDay?: Date,
    type?: string
};

registerLocale("ru", ru);

export const CheckDateInput = forwardRef<HTMLInputElement, CheckDateInputPropsType>(({ selectedDate, onDateChange, firstDay, type }, ref) => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleDivClick = (e) => {
        e.stopPropagation();
        if (inputRef.current) {
            inputRef.current.focus();
        }
        setIsCalendarOpen(true);
    };

    const CustomInput = forwardRef<HTMLInputElement, any>((props: any, ref: any) => {
        return (
            <div
                className={classNames(style.customDatePickDiv, {
                    [style["customDatePickDiv-selected"]]: selectedDate,
                    [style["customDatePickDiv-focused"]]: isCalendarOpen
                })}
                onMouseDown={handleDivClick}
            >
                <input
                    className={style.customInput}
                    ref={(elem) => {
                        inputRef.current = elem;
                        if (typeof ref === 'function') {
                            ref(elem);
                        } else if (ref) {
                            (ref as React.MutableRefObject<HTMLInputElement | null>).current = elem;
                        }
                    }}
                    value={props.value || props.placeholder}
                    onChange={props.onChange}
                    onFocus={(e) => {
                        props.onFocus(e);
                    }}
                />
                <img className={style.image} src={selectedDate ? calendarIcon : calendarGrayIcon} alt="Calendar" onClick={handleDivClick} />
            </div>
        );
    });

    return (
        <div className={style.datePickerDiv}>
            <DatePicker
                selected={selectedDate}
                locale={"ru"}
                dateFormat="dd.MM.yyyy"
                onChange={(date) => onDateChange(date as Date)}
                customInput={<CustomInput ref={ref} />}
                minDate={firstDay}
                maxDate={new Date(new Date().setMonth(new Date().getMonth() + 12))}
                showMonthDropdown={type === 'birthday'}
                showYearDropdown={type === 'birthday'}
                dropdownMode={(type === 'birthday') ? "select" : undefined}
                onCalendarOpen={() => setIsCalendarOpen(true)}
                onCalendarClose={() => setIsCalendarOpen(false)}
            />
        </div>
    );
});
