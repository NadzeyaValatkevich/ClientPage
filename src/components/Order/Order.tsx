import styleContainer from "../../common/styles/Container.module.scss";
import style from "./Order.module.scss";
import { Button } from "../Button/Button";
import { Calendar } from "./Calendar";
import { GuestsSelect } from "./GuestsSelect";
import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import React from "react";


export const Order = () => {
    const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
    const [guests, setGuests] = useState({ adults: 0, children: 0, childAges: [] });

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
        console.log("hello");
        console.log(data);
    };

    console.log(errors);


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
                <FormProvider {...useForm()} >
                    <form className={style.orderBlock} onSubmit={handleSubmit(onSubmit)}>
                        <Calendar {...register("checkInDate", { required: true })} selectedDate={checkInDate} onDateChange={handleCheckInDateChange} firstDay={today} />
                        <Calendar {...register("checkOutDate", { required: true })} selectedDate={checkOutDate} onDateChange={handleCheckOutDateChange} firstDay={checkInDate || today} />
                        <GuestsSelect {...register("guests", { required: true })} onGuestsChange={handleGuestsChange} />
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