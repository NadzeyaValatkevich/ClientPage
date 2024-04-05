import style from "./Header.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import image from "../../assets/photo1.jpg";
import { Logo } from "../Logo";
import { useAppSelector } from "../../utils/hooks";

export const Header = () => {
    const { name, booking_photo } = useAppSelector(state => state.mainObject);

    return (
        <div className={style.header}>
            <div className={style.image}>
                <img src={booking_photo ? booking_photo : image} alt="background" />
            </div>
            <div className={style.background}></div>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <div className={style["header_logo"]}>
                    <Logo />
                </div>
                <h1 className={style.title}>{name ? name : "Название усадьбы"}</h1>
            </div>
        </div>
    )
}