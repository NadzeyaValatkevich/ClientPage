import { InputBox } from "../InputBox";
import style from "./PersonalInfo.module.scss";

export const PersonalInfo = () => {
    return (
        <div className={style.personalInfo}>
            <h4 className={style["personalInfo__title"]}>Личная информация</h4>
            <div className={style["personalInfo__block"]}>
                <div className={style["personalInfo__block-left"]}>
                    <InputBox title={"Фамилия"} name={"surname"} value={"Иванов"} type={'text'} />
                    <InputBox title={"Имя"} name={"name"} value={"Петр"} type={'text'} />
                    <InputBox title={"Отчество"} name={"dadName"} value={"Сергеевич"} type={'text'} />
                </div>
                <div className={style["personalInfo__block-right"]}>
                    <InputBox title={"Гражданство"} name={"country"} value={"Республика Беларусь"} type={'text'} />
                    <div className={style["personalInfo__block-right--date"]}>
                        <InputBox title={"Дата рождения"} name={"date"} value={"18.06.1988"} type={'date'} />
                    </div>
                    <div className={style["personalInfo__block-right--sex"]}>
                        <InputBox title={"Пол"} name={"sex"} value={"мужской"} type={'text'} />
                    </div>
                </div>
            </div>

        </div>
    )
}