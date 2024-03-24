import styleContainer from "../../common/styles/Container.module.scss";
import style from "./Order.module.scss";
import { Button } from "../Button/Button";
import { Calendar } from "./Calendar";
import { GuestsSelect } from "./GuestsSelect";


export const Order = () => {
    return (
        <div className={style.orderWrapper}>
            <div className={`${styleContainer.container} ${style.orderContainer}`}>
                <div className={style.orderBlock}>
                    <Calendar />
                    <Calendar />
                    <GuestsSelect />
                    {/* <InputBox title={"Дата заезда"} name={"date"} value={""} type={"date"} /> */}
                    <div className={style.btnBlock}>
                        <Button value={"Подобрать"} className={style.btnSearch} />
                    </div>
                </div>
            </div>
        </div>
    )
}