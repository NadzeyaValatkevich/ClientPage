import { useSearchParams } from "react-router-dom";
import { InputBox } from "../InputBox";
import style from "./InfoObject.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { DatesType, GuestsType } from "../../../redux/types/datesGuestsTypes";
import users from "../../../assets/icons/usersGray.svg";
import calendar from "../../../assets/icons/calendarGray.svg";
import { formatPeople } from "../../../utils/functions/formatPeople";
import { SelectComponent } from "../../SelectComponent/SelectComponent";
import { formatTime, generateTimeOptions } from "../../../utils/functions/generateTime";

type InfoObjectPropsType = {
    title: string
    check_in_time: string
    check_out_time: string
    price: number
};

export const InfoObject = ({ title, check_in_time, check_out_time, price }: InfoObjectPropsType) => {

    const [check_in_date, setCheckInDate] = useState<string | undefined>('');
    const [check_out_date, setCheckOutDate] = useState<string | undefined>('');
    const [formattedGuests, setFormattedGuests] = useState('');
    const [checkIn, setCheckIn] = useState(false);
    const [animals, setAnimals] = useState("");

    // const [selectedValue, setSelectedValue] = useState({});
    // const [optionsCheckInTime, setOptionsCheckInTime] = useState<OptionType[]>(generateTimeOptions(check_in_time))

    const [searchParams] = useSearchParams();

    const optionsCheckInTime = generateTimeOptions(check_in_time);
    const formatCheckOutTime = formatTime(check_out_time);

    useEffect(() => {
        const queryParams = new URLSearchParams(searchParams);

        const queryParamsData: DatesType = {
            check_in_date: queryParams.get('check_in_date') ?? '',
            check_out_date: queryParams.get('check_out_date') ?? '',
        };

        const check_in_dateObject = queryParamsData.check_in_date && new Date(queryParamsData.check_in_date);
        const check_out_dateObject = queryParamsData.check_out_date && new Date(queryParamsData.check_out_date);

        const formattedInDate = check_in_dateObject && `${check_in_dateObject.getDate() < 10 ? '0' : ''}${check_in_dateObject.getDate()}.${(check_in_dateObject.getMonth() + 1 < 10 ? '0' : '')}${check_in_dateObject.getMonth() + 1}.${check_in_dateObject.getFullYear()}`;

        const formattedOutDate = check_out_dateObject && `${check_out_dateObject.getDate() < 10 ? '0' : ''}${check_out_dateObject.getDate()}.${(check_out_dateObject.getMonth() + 1 < 10 ? '0' : '')}${check_out_dateObject.getMonth() + 1}.${check_out_dateObject.getFullYear()}`;

        setCheckInDate(formattedInDate);
        setCheckOutDate(formattedOutDate);

    }, [searchParams]);

    useEffect(() => {
        const storedGuestsData = localStorage.getItem('guests');

        if (storedGuestsData) {
            const parsedGuestsData: GuestsType = JSON.parse(storedGuestsData);
            setFormattedGuests(formatPeople(parsedGuestsData.adults, parsedGuestsData.children))
        }
    }, []);

    const handleOnChange = () => {
        setCheckIn(!checkIn)
        setAnimals("")
    };

    const handleOnChangeAnimals = ((newValue: string) => {
        setAnimals(newValue)
    });

    return (
        <div className={style.infoObject}>
            <h4 className={style["infoObject__title"]}>Информация об объекте</h4>
            <div className={style["infoObject__block"]}>
                <div className={style["infoObject__block-upItem"]}>
                    <InputBox className={style["infoObject__block-object"]} title={"Объект*"} name={"object"} defaultValue={title} type={'text'} readOnly tabindex={-1} />
                    <div className={style["infoObject__block-date--checkIn"]}>
                        <InputBox title={"Дата заезда*"} name={"date"} value={check_in_date} type={'text'} readOnly />
                        <img className={style["infoObject__block-date--image"]} alt={"check_in_date"} src={calendar} />
                    </div>
                    <SelectComponent className={style["infoObject__block-time--checkIn"]} options={optionsCheckInTime} label={"Время заезда*"} />
                    <div className={style["infoObject__block-date--checkOut"]}>
                        <InputBox title={"Дата выезда*"} name={"date"} value={check_out_date} type={'text'} readOnly />
                        <img className={style["infoObject__block-date--image"]} alt={"check_out_date"} src={calendar} />
                    </div>
                    <div className={style["infoObject__block-time--checkOut"]}>
                        <InputBox title={"Время выезда*"} name={"time"} value={formatCheckOutTime} type={'datetime'} readOnly />
                    </div>
                </div>
                <div className={style["infoObject__block-mediumItem"]}>
                    <div className={style["infoObject__block-guests"]}>
                        <InputBox title={"Количество гостей*"} name={"guests"} value={formattedGuests} type={'text'} readOnly />
                        <img className={style["infoObject__block-guests--image"]} alt={"guests"} src={users} />
                    </div>
                    <div className={style["infoObject__block-animals"]}>
                        {!checkIn ?
                            <>
                                <input className={style["infoObject__block-animals--checkbox"]} type="checkbox" onChange={handleOnChange} />
                                <p className={style["infoObject__block-animals--text"]}>У меня есть животные</p>
                            </> :
                            <div className={`${style["infoObject__block-animals--checked"]} ${animals ? style['infoObject__block-animals--checkedSelect'] : ""}`}>
                                <InputBox title={"У меня есть животные"}
                                    name={"animals"} value={animals} type={'text'}
                                    placeholder={"Количество, вид, возраст"}
                                    onChange={handleOnChangeAnimals}
                                />
                                <input className={style["infoObject__block-animals--checkboxChecked"]} type="checkbox" onChange={handleOnChange} checked={checkIn} />
                            </div>
                        }

                    </div>
                </div>
                <div className={style["infoObject__block-price"]}>
                    <p className={style["infoObject__block-price--text"]}>Общая стоимость за выбранный период</p>
                    <input className={style["infoObject__block-price--input"]} type={"number"} value={price} readOnly />
                    <span className={style["infoObject__block-price--currency"]}>BYN</span>
                </div>
            </div>
        </div>
    )
}