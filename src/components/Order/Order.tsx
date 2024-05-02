import styleContainer from "../../common/styles/Container.module.scss";
import style from "./Order.module.scss";
import { Button } from "../Button/Button";
import { GuestsSelect } from "./GuestsSelect";
import { useState } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ChildAge, DatesGuestsObjectRequestType, DatesGuestsObjectType, GuestsType } from "../../redux/types/datesGuestsTypes";
import { setDatesGuestsObject } from "../../redux/reducers/datesGuestsSlice";
import { fetchFilteredRentalObjects } from "../../redux/thunks/filteredRentalObjectThunk";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { formatDate } from "../../utils/functions/formatDate";
import { CheckDateInput } from "./CheckInDateInput";
import { useNavigate } from "react-router-dom";

export const Order = () => {
    const [check_in_date, setCheckInDate] = useState<Date | null>(null);
    const [check_out_date, setCheckOutDate] = useState<Date | null>(null);
    const [guests, setGuests] = useState<GuestsType>({ adults: 0, children: 0, childAges: [] });
    const [formattedValue, setFormattedValue] = useState("");

    console.log(guests)

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { id } = useAppSelector(state => state.mainObject);

    const { handleSubmit, formState: { errors }, clearErrors, setValue, register } = useForm();

    const handleCheckInDateChange = (date: Date) => {
        setCheckInDate(date);
        setValue("check_in_date", date);

        if (check_out_date && date > check_out_date) {
            setCheckOutDate(null);
            setValue("check_out_date", null);
        }
        clearErrors("check_in_date")
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        console.log(data.check_in_date)

        const children = data.guests.childAges.reduce((accum: number, el: ChildAge) => {
            el.value >= 2 && (accum += 1);
            return accum
        }, 0);

        const filteredData: DatesGuestsObjectRequestType = {
            check_in_date: formatDate(data.check_in_date),
            check_out_date: formatDate(data.check_out_date),
            people_amount: data.guests.adults + children,
            main_object: id,
        };

        const transformedData: DatesGuestsObjectType = {
            check_in_date: data.check_in_date.toISOString(),
            check_out_date: data.check_out_date.toISOString(),
            guests: data.guests
        };

        dispatch(setDatesGuestsObject(transformedData));
        dispatch(fetchFilteredRentalObjects(filteredData));
        setCheckInDate(null);
        setCheckOutDate(null);
        setFormattedValue("");

        const queryParams = new URLSearchParams({
            check_in_date: formatDate(data.check_in_date),
            check_out_date: formatDate(data.check_out_date),
            people_amount: (data.guests.adults + children).toString(),
            main_object: (id).toString(),
        })

        navigate(`/filteredRental_objects?${queryParams.toString()}`)
    };

    const handleCheckOutDateChange = (date: Date) => {
        setCheckOutDate(date);
        setValue("check_out_date", date);
        clearErrors("check_out_date");
    };

    const handleGuestsChange = (newGuests: GuestsType) => {
        console.log(newGuests);

        setGuests((guests: GuestsType) => {
            const updatedGuests = { ...guests, ...newGuests };
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
                            <CheckDateInput {...register("check_in_date", { required: true })} selectedDate={check_in_date} onDateChange={handleCheckInDateChange} firstDay={today} />
                        </div>
                        <div className={style.titleItemBlock}>
                            <h4 className={style.titleItem}>Дата выезда</h4>
                            <CheckDateInput {...register("check_out_date", { required: true })} selectedDate={check_out_date} onDateChange={handleCheckOutDateChange} firstDay={check_in_date || today} />
                        </div>
                        <div className={style.titleItemBlock}>
                            <h4 className={style.titleItem}>Количество гостей</h4>
                            <GuestsSelect {...register("guests", { required: true })} onGuestsChange={handleGuestsChange} value={formattedValue} setFormattedValue={setFormattedValue} />
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