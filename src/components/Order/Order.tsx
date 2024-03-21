import styleContainer from "../../common/styles/Container.module.scss";
import style from "./Order.module.scss";
import calendar from "../../assets/icons/Calender.svg";
import users from "../../assets/icons/users.svg";
import { ReactNode } from "react";
import { Button } from "../Button/Button";
import { InputBox } from "../Booking/InputBox";
import { Calendar } from "../Calendar";


export const Order = () => {
    return (
        <div className={style.orderWrapper}>
            <div className={`${styleContainer.container} ${style.orderContainer}`}>
                <div className={style.orderBlock}>
                    <Calendar />
                    <Calendar />
                    {/* <InputBox title={"Дата заезда"} name={"date"} value={""} type={"date"} /> */}
                    <div className={style.btnBlock}>
                        <Button value={"Подобрать"} className={style.btnSearch} />
                    </div>
                </div>
            </div>
        </div>
    )
}