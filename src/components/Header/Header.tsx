import style from "./Header.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import image from "../../assets/photo1.jpg";
import { Logo } from "../Logo";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.image}>
                <img src={image} alt="background" />
            </div>
            <div className={style.background}></div>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <Logo />
                <h1 className={style.title}>Название усадьбы</h1>
            </div>
        </div>

    )
}