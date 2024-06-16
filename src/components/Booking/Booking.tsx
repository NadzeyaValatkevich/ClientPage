import { ChangeEvent, useEffect, useRef, useState } from "react";
import style from "./Booking.module.scss";
import { Contacts } from "./Contacts";
import { InfoObject } from "./InfoObject";
import { PersonalInfo } from "./PersonalInfo";
import { RentalObject } from "../../redux/types/rentalObjectTypes";
import { Button } from "../Button/Button";
import { DefaultValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { ChildAge, GuestsType } from "../../redux/types/datesGuestsTypes";
import { formatPeople } from "../../utils/functions/formatPeople";
import { optionsNationality } from "../../utils/constants";
import classNames from "classnames";
import { FormValues, FormValuesDefault, TransformedFormValues } from "../../redux/types/@types";
import { useAppDispatch } from "../../utils/hooks";
import { submitBooking } from "../../redux/thunks/bookingThunk";

type BookingPropsType = {
    modalBookingActive: boolean,
    house: RentalObject,
}

const getGuestsFromLocalStorage = () => {
    const storedGuestsData = localStorage.getItem('guests');
    if (storedGuestsData) {
        return JSON.parse(storedGuestsData);
    }
    return "";
}

const getFormattedGuestsFromLocalStorage = () => {
    const storedGuestsData = localStorage.getItem('guests');
    if (storedGuestsData) {
        const parsedGuestsData: GuestsType = JSON.parse(storedGuestsData);
        return formatPeople(parsedGuestsData.adults, parsedGuestsData.children);
    }
    return "";
};


export const Booking = ({ modalBookingActive, house }: BookingPropsType) => {

    const { id, name, check_in_time, check_out_time, price } = house;

    const dispatch = useAppDispatch();

    const [formattedGuests] = useState(getFormattedGuestsFromLocalStorage);
    const [guests] = useState<GuestsType>(getGuestsFromLocalStorage);

    const [searchParams] = useSearchParams();
    const queryParams = new URLSearchParams(searchParams);

    const [comment, setComment] = useState("");
    const [commentError, setCommentError] = useState("");

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (modalBookingActive) {
            document.body.classList.add('open');
        } else {
            document.body.classList.remove('open');
        }

        return () => {
            document.body.classList.remove('open');
        };
    }, [modalBookingActive]);

    useEffect(() => {
        if (textareaRef.current) {
            adjustTextareaHeight(textareaRef.current);
        }
    }, [comment]);

    const adjustTextareaHeight = (textarea: HTMLTextAreaElement) => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const handleOnChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newComment = event.target.value;
        setValue("comment", newComment, { shouldValidate: true })
        setComment(newComment)

        if (newComment.length >= 500) {
            setCommentError("Достигнуто максимальное количество символов: 500")
        } else {
            setCommentError("")
        }
        adjustTextareaHeight(event.target);
    };

    const defaultValues: DefaultValues<FormValuesDefault> = {
        rental_object: id,
        check_in_date: queryParams.get('check_in_date'),
        check_out_date: queryParams.get('check_out_date'),
        check_in_time: check_in_time,
        guests: guests,
        has_animals: false,
        animals_info: "",
        second_name: "",
        birth_day: null,
        sex: "mal",
        nationality: optionsNationality[0].value,
        telegram: "",
        comment: ""
    }

    const methods = useForm<FormValues>({
        defaultValues,
        mode: "onSubmit"
    })

    const { handleSubmit, register, setValue } = methods;

    const onSubmit: SubmitHandler<FormValues> = (data) => {

        console.log(data)

        const childAges = data.guests.childAges.map((item: ChildAge | undefined) => item?.value);

        const transformData: TransformedFormValues = {
            rental_object: data.rental_object,
            check_in_date: data.check_in_date,
            check_out_date: data.check_out_date,
            check_in_time: data.check_in_time,
            adult: data.guests.adults,
            has_animals: data.has_animals,
            ...(data.has_animals && { animals_info: data.animals_info ? data.animals_info : null }),
            // animals_info: data.animals_info,
            first_name: data.first_name,
            second_name: data.second_name,
            last_name: data.last_name,
            birth_day: data.birth_day,
            sex: data.sex,
            nationality: data.nationality,
            phone: {
                country_code: data.phone.country_code,
                phone_code: data.phone.phone_code,
                phone_number: data.phone.phone_number,
            },
            email: data.email,
            telegram: data.telegram,
            comment: data.comment,
            children: childAges,
        };
        console.log(transformData.animals_info)


        dispatch(submitBooking(transformData))

    }


    return (
        <div className={style.booking}>
            <FormProvider {...methods} >
                <form onSubmit={handleSubmit(onSubmit)}>

                    <InfoObject
                        title={name}
                        check_in_time={check_in_time}
                        check_out_time={check_out_time}
                        price={price}
                        guests={guests}
                        formattedGuests={formattedGuests}

                    />
                    <PersonalInfo />
                    <Contacts />
                    <div className={style["booking__comment"]}>
                        <h4 className={style["booking__comment-title"]}>Дополнительные комментарии</h4>
                        <label className={style["booking__comment-label"]} htmlFor="comments">Комментарии</label>
                        <textarea
                            {...register("comment")}
                            className={classNames(style["booking__comment-text"], {
                                [style["booking__comment-text--error"]]: commentError
                            })}
                            ref={textareaRef}
                            id="comments"
                            placeholder="Введите текст"
                            name="comments"
                            onChange={handleOnChangeComment}
                            value={comment}
                            maxLength={500}
                        >
                        </textarea>
                        {commentError && <p className={style.commentError}>{commentError}</p>}
                    </div>
                    <Button className={style["booking__btn"]} type="submit" value={"Сохранить"} />
                </form>
            </FormProvider>

        </div>

    )
}