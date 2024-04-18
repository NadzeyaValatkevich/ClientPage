import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./Calendar.module.scss";



export const Calendar = () => {
    const startDay = new Date();

    return (
        <div className={style.datePickerDiv}>
            <DatePicker
                selected={startDay}
                locale={"ru"}
                minDate={new Date()}
                maxDate={new Date(new Date().setMonth(new Date().getMonth() + 6))}
                readOnly
                inline
                wrapperClassName="custom-datepickerInfo"
            />
        </div>

    )
}