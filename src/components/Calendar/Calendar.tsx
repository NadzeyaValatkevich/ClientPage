import DatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calendar.module.scss";
import { createYearAheadDates, defineReservationsDates } from "../../utils/functions/defineReservationsDates";
import { ReservationItem } from "../../redux/types/rentalObjectTypes";

type CalendarPropsType = {
    reservations: ReservationItem[],
    setDatePickerVisible: (value: boolean) => void,
    status: string
};

export const Calendar = ({ reservations, setDatePickerVisible, status }: CalendarPropsType) => {

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

    // const disableAllDates = true;

    const allDates = status === "Закрыт к бронированию" ? createYearAheadDates() : [];

    return (
        <DatePicker
            selected={startDay}
            locale={"ru"}
            minDate={new Date()}
            maxDate={new Date(new Date().setMonth(new Date().getMonth() + 12))}
            onChange={() => { }}
            // highlightDates={defineReservationsDates(reservations)}
            highlightDates={status === "Закрыт к бронированию" ? allDates : defineReservationsDates(reservations)}
            className={styles.datePickerDiv}
            renderCustomHeader={renderCustomHeader}
            onClickOutside={() => setDatePickerVisible(false)}
            // excludeDates={[]}
            // disabled={disableAllDates}
            excludeDates={status === "Закрыт к бронированию" ? allDates : []}
            readOnly
            inline
        />
    )
}