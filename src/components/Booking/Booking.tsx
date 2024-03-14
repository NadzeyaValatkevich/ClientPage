import style from "./Booking.module.scss";

import { InfoObject } from "./InfoObject";

export const Booking = () => {
    return (
        <div className={style.booking}>
            <form>
                <InfoObject />

            </form>

        </div>

    )
}