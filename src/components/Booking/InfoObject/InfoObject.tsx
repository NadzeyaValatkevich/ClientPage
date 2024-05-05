import { useSearchParams } from "react-router-dom";
import { InputBox } from "../InputBox";
import style from "./InfoObject.module.scss";
import { useEffect, useState } from "react";
import { DatesType } from "../../../redux/types/datesGuestsTypes";

type InfoObjectPropsType = {
    title: string
}

export const InfoObject = ({ title }: InfoObjectPropsType) => {

    const [check_in_date, setCheckInDate] = useState<string | undefined>('');
    const [check_out_date, setCheckOutDate] = useState<string | undefined>('');

    const [searchParams] = useSearchParams();

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


    return (
        <div className={style.infoObject}>
            <h4 className={style["infoObject__title"]}>Информация об объекте</h4>
            <div className={style["infoObject__block"]}>
                <InputBox className={style["infoObject__block-object"]} title={"Объект"} name={"object"} defaultValue={title} type={'text'} readOnly tabindex={-1} />
                <div className={style["infoObject__block-date"]}>
                    <InputBox title={"Дата заезда"} name={"date"} value={check_in_date} type={'text'} readOnly />
                    <InputBox title={"Дата выезда"} name={"date"} value={check_out_date} type={'text'} readOnly />
                </div>
                <div className={style["infoObject__block-time"]}>
                    <InputBox title={"Время заезда*"} name={"time"} value={"c 14:00"} type={'datetime'} />
                    <InputBox title={"Время выезда*"} name={"time"} value={"до 12:00"} type={'datetime'} />
                </div>
                <InputBox className={style["infoObject__block-guests"]} title={"Количество гостей"} name={"guests"} value={"2 взрослых и 1 ребенок"} type={'text'} />
                <InputBox className={style["infoObject__block-animals"]} title={"Есть ли животные?"} name={"animals"} value={"1 взрослый лабрадор"} type={'text'} />
                <div className={style["infoObject__block-price"]}>
                    <InputBox title={"Общая стоимость за выбранный период"} name={"price"} value={"1500"} type={'number'} />
                    <span className={style["infoObject__block-price--text"]}>BYN</span>
                </div>
            </div>
        </div>
    )
}