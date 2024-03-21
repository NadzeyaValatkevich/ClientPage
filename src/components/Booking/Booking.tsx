import style from "./Booking.module.scss";
import { Conditions } from "./Conditions";
import { Contacts } from "./Contacts";
import { InfoObject } from "./InfoObject";
import { PersonalInfo } from "./PersonalInfo";

export const Booking = () => {
    return (
        <div className={style.booking}>
            <form>
                <InfoObject />
                <Conditions />
                <PersonalInfo />
                <Contacts />
                <div className={style["booking__comment"]}>
                    <h4 className={style["booking__comment-title"]}>Комментарий</h4>
                    <textarea className={style["booking__comment-text"]} placeholder="Комментарий"></textarea>
                </div>

            </form>

        </div>

    )
}