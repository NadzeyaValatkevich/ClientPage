import styleContainer from "../../common/styles/Container.module.scss";
import style from "./Order.module.scss";
import { Button } from "../Button/Button";
import { Calendar } from "./Calendar";
import { GuestsSelect } from "./GuestsSelect";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Guests } from "../../redux/types/datesGuestsTypes";
import { useDispatch } from "react-redux";
import { setDatesGuestsObject } from "../../redux/reducers/datesGuestsSlice";

export const Order = () => {
    const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
    const [guests, setGuests] = useState<Guests>({ adults: 0, children: 0, childAges: [] });
    const dispatch = useDispatch();

    console.log(guests)

    const { handleSubmit, formState: { errors }, clearErrors, setValue, register } = useForm();

    const handleCheckInDateChange = (date: Date) => {
        setCheckInDate(date);
        setValue("checkInDate", date);

        if (checkOutDate && date > checkOutDate) {
            setCheckOutDate(null);
            setValue("checkOutDate", null);
        }
        clearErrors("checkInDate")
    };

    const onSubmit = (data: any) => {
        dispatch(setDatesGuestsObject(data))
        console.log(data);
    };

    const handleCheckOutDateChange = (date: Date) => {
        setCheckOutDate(date);
        setValue("checkOutDate", date);
        clearErrors("checkOutDate");
    };

    const handleGuestsChange = (newGuests: any) => {
        console.log(newGuests);

        setGuests((prevGuests: any) => {
            const updatedGuests = { ...prevGuests, ...newGuests };
            setValue("guests", updatedGuests);
            return updatedGuests
        });

        clearErrors("guests");

    };

    const today = new Date();

    return (
        <div className={style.orderWrapper}>
            <div className={`${styleContainer.container} ${style.orderContainer}`}>
                <h3 className={style.titleBlock}>Бронирование</h3>
                <FormProvider {...useForm()} >
                    <form className={style.orderBlock} onSubmit={handleSubmit(onSubmit)}>
                        <div className={style.titleItemBlock}>
                            <h4 className={style.titleItem}>Дата заезда</h4>
                            <Calendar {...register("checkInDate", { required: true })} selectedDate={checkInDate} onDateChange={handleCheckInDateChange} firstDay={today} />
                        </div>
                        <div className={style.titleItemBlock}>
                            <h4 className={style.titleItem}>Дата выезда</h4>
                            <Calendar {...register("checkOutDate", { required: true })} selectedDate={checkOutDate} onDateChange={handleCheckOutDateChange} firstDay={checkInDate || today} />
                        </div>
                        <div className={style.titleItemBlock}>
                            <h4 className={style.titleItem}>Количество гостей</h4>
                            <GuestsSelect {...register("guests", { required: true })} onGuestsChange={handleGuestsChange} />
                        </div>
                        <div className={style.btnBlock}>
                            <Button className={style.btnSearch} type="submit" value={"Подобрать"}
                                disabled={Object.keys(errors).length > 0}
                            />
                        </div>
                    </form>
                </FormProvider>
                {Object.keys(errors).length > 0 && <p className={style.error}>Все поля должны быть заполнены</p>}
            </div>
        </div >
    )
}