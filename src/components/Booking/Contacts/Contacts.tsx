import { InputBox } from "../InputBox";
import style from "./Contacts.module.scss";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <h4 className={style["contacts__title"]}>Контакты</h4>
            <div className={style["contacts__block"]}>
                <InputBox title={"Электронная почта"} name={"surname"} value={"nickname@gmail.com"} type={'email'} />
                <InputBox className={style["contacts__block-telegram"]} title={"Телеграмм"} name={"telegram"} value={"@nickname"} type={'text'} />
                <InputBox title={"Мобильный телефон"} name={"phone"} value={"+375333675433"} type={'tel'} />
            </div>

        </div>
    )
}