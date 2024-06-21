import style from "./Header.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import { Logo } from "../Logo";
import { useAppSelector } from "../../utils/hooks";
import { NavLink, useLocation, useParams } from "react-router-dom";
import BackIcon from "../../assets/icons/back.svg";
import { useEffect, useState } from "react";

export const Header = () => {
    const [visibilityBtnBack, setVisibilityBtnBack] = useState(false);
    const { name, booking_photo } = useAppSelector(state => state.mainObject.data);

    const { id } = useParams();

    const location = useLocation();

    console.log(location.pathname)

    useEffect(() => {

        if (location.pathname !== `/main_object/${id}`) {
            setVisibilityBtnBack(true)
        } else {
            setVisibilityBtnBack(false)
        }
    }, [id, location.pathname]);

    return (
        <div className={style.header}>
            <div className={style.image}>
                <img src={booking_photo} alt="background" />
            </div>
            <div className={style.background}></div>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <div className={style["headerContainer_info"]}>
                    {visibilityBtnBack &&
                        <NavLink to={`/main_object/${id}`} className={style["headerContainer_info-backIcon"]}>
                            <img src={BackIcon} alt="Arrow back" />
                            <p className={style["headerContainer_info-text"]}>Назад</p>
                        </NavLink>
                    }
                    <NavLink to={`/main_object/${id}`} className={style["headerContainer_info-backIconLogo"]}>
                        <div className={style["headerContainer_info-logo"]}>
                            {/* <Logo /> */}
                        </div>
                    </NavLink>
                </div>
                <h1 className={style.title}>{name ? name : "Название усадьбы"}</h1>
            </div>
        </div>
    )
}