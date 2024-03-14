import { InputBox } from "../InputBox";
import style from "./InfoObject.module.scss";

export const InfoObject = () => {
    return (
        <div className={style.infoObject}>
            <h4 className={style["infoObject__title"]}>Информация об объекте</h4>
            <div className={style["infoObject__block"]}>
                <InputBox className={style["infoObject__block-object"]} title={"Объект"} name={"object"} value={"Домик 1"} type={'text'} />
                <div className={style["infoObject__block-date"]}>
                    <InputBox title={"Дата заезда"} name={"date"} value={"18.06.2023"} type={'date'} />
                    <InputBox title={"Дата выезда"} name={"date"} value={"21.06.2023"} type={'date'} />
                </div>
                <div className={style["infoObject__block-time"]}>
                    <InputBox title={"Время заезда"} name={"time"} value={"c 14:00"} type={'datetime'} />
                    <InputBox title={"Время выезда"} name={"time"} value={"до 12:00"} type={'datetime'} />
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