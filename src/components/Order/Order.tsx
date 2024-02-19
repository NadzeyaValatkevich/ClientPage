import styleContainer from "../../common/styles/Container.module.scss";
import style from "./Order.module.scss";
import calendar from "../../assets/icons/Calender.svg";
import users from "../../assets/icons/users.svg";
import { ReactNode } from "react";
import { Button } from "../Button/Button";


type OrderItemType = {
    label: string,
    alt: string,
    src: any
};

const orderItems: OrderItemType[] = [
    { label: "Дата заезда", alt: "Календарь", src: calendar },
    { label: "Дата выезда", alt: "Календарь", src: calendar },
    { label: "Количество гостей", alt: "Гости", src: users }
];


export const Order = () => {
    return (
        <div className={style.orderWrapper}>
            <div className={`${styleContainer.container} ${style.orderContainer}`}>
                <div className={style.orderBlock}>
                    {orderItems.map(el => {
                        return (
                            <div key={el.label} className={style.btnBlock}>
                                <p className={style.descriptionBtn}>{el.label}</p>
                                <Button className={style.btnInfo} value={<img alt={el.alt} src={el.src} />} />
                                {/* <MainButton value={<Image alt={el.alt} src={el.src} />} /> */}
                            </div>
                        )
                    })}
                    <div className={style.btnBlock}>
                        <Button value={"Подобрать"} className={style.btnSearch} />
                    </div>
                </div>
            </div>
        </div>
    )
}