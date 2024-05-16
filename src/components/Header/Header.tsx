import style from "./Header.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import { Logo } from "../Logo";
import { useAppSelector } from "../../utils/hooks";
import { NavLink } from "react-router-dom";
// import BackIcon from "../../assets/icons/back.svg";

export const Header = () => {
    const { name, booking_photo } = useAppSelector(state => state.mainObject);

    return (
        <div className={style.header}>
            <div className={style.image}>
                <img src={booking_photo} alt="background" />
            </div>
            <div className={style.background}></div>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <div className={style["headerContainer_info"]}>
                    {/* <div className={style["headerContainer_info-backIcon"]}>
                        <NavLink to="/main_object/2" className={style.one}>
                            <img src={BackIcon} alt="Arrow back" />
                        </NavLink>
                        <p>Назад</p>
                    </div> */}
                    <NavLink to="/main_object/2" className={style["headerContainer_info-backIconLogo"]}>
                        <div className={style["headerContainer_info-logo"]}>
                            <Logo />
                        </div>
                    </NavLink>
                </div>
                <h1 className={style.title}>{name ? name : "Название усадьбы"}</h1>
            </div>
        </div>
    )
}