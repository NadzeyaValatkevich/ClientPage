import styleContainer from "../../common/styles/Container.module.scss";
import style from "./Order.module.scss";
import { Button } from "../Button/Button";
import { Calendar } from "./Calendar";
import { GuestsSelect } from "./GuestsSelect";
import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import React from "react";


export const Order = React.memo(() => {
    const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
    const [guests, setGuests] = useState({ adults: 0, children: 0, childAges: [] });
    const [allFieldsFilled, setAllFieldsFilled] = useState(false);

    const { handleSubmit, formState: { errors }, setValue } = useForm();

    const checkAllFields = useCallback(() => {
        if (checkInDate && checkOutDate && guests.adults + guests.children > 0) {
            setAllFieldsFilled(true);
        } else {
            setAllFieldsFilled(false);
        }
    }, [checkInDate, checkOutDate, guests]);

    const handleCheckInDateChange = (date: Date) => {
        setCheckInDate(date);
        setValue("checkInDate", date);

        if (checkOutDate && date > checkOutDate) {
            setCheckOutDate(null);
            setValue("checkOutDate", null);
        }

        checkAllFields();

    };

    const onSubmit = useCallback((data: any) => {
        console.log(data);
    }, []);

    const handleCheckOutDateChange = (date: Date) => {
        setCheckOutDate(date);
        setValue("checkOutDate", date);
        checkAllFields();
    };

    const handleGuestsChange = useCallback((newGuests: any) => {
        console.log(newGuests);

        setGuests((prevGuests: any) => {
            const updatedGuests = { ...prevGuests, ...newGuests };
            setValue("guests", updatedGuests);
            return updatedGuests
        });

        checkAllFields();
    }, [setValue, checkAllFields]);

    const today = new Date();

    return (
        <div className={style.orderWrapper}>
            <div className={`${styleContainer.container} ${style.orderContainer}`}>
                <FormProvider {...useForm()} >
                    <form className={style.orderBlock} onSubmit={handleSubmit(onSubmit)}>
                        <Calendar selectedDate={checkInDate} onDateChange={handleCheckInDateChange} firstDay={today} />
                        <Calendar selectedDate={checkOutDate} onDateChange={handleCheckOutDateChange} firstDay={checkInDate || today} />
                        <GuestsSelect onGuestsChange={handleGuestsChange} />
                        <div className={style.btnBlock}>
                            <Button className={style.btnSearch} type="submit" value={"Подобрать"} disabled={!allFieldsFilled} />
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div >
    )
})