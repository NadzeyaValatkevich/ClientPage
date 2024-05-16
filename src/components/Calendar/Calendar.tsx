import DatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calendar.module.scss";
import { defineReservationsDates } from "../../utils/functions/defineReservationsDates";
import { ReservationItem } from "../../redux/types/rentalObjectTypes";

type CalendarPropsType = {
    reservations: ReservationItem[],
    setDatePickerVisible: (value: boolean) => void
};

export const Calendar = ({ reservations, setDatePickerVisible }: CalendarPropsType) => {

    const startDay = new Date();

    const renderCustomHeader = ({ date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }: ReactDatePickerCustomHeaderProps) => {
        const monthName = date.toLocaleDateString("ru", { month: "long" });
        return (
            <div className={styles.customHeader}>
                <div className={styles.legend}>
                    <div className={styles.legendItem}>
                        <div className={styles.legendSquare} />
                        <div className={styles.legendText}> - занятые даты</div>
                    </div>
                </div>
                <div className={styles.header}>
                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className={styles.arrowLeft}>
                        <span className={styles.arrowLeftIcon}></span>
                    </button>
                    <span className={styles.monthName}>{monthName} {date.getFullYear()}</span>
                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className={styles.arrowRight}>
                        <span className={styles.arrowRightIcon}></span>
                    </button>
                </div>
            </div>
        );
    };

    const disableAllDates = true;

    return (
        <DatePicker
            selected={startDay}
            locale={"ru"}
            minDate={new Date()}
            maxDate={new Date(new Date().setMonth(new Date().getMonth() + 12))}
            onChange={() => { }}
            highlightDates={defineReservationsDates(reservations)}
            className={styles.datePickerDiv}
            renderCustomHeader={renderCustomHeader}
            onClickOutside={() => setDatePickerVisible(false)}
            excludeDates={[]}
            disabled={disableAllDates}
            readOnly
            inline
        />
    )
}