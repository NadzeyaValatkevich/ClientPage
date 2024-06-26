import style from "./Footer.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import { Logo } from "../Logo";
import facebook from "../../assets/iconsSocial/f.svg";
import instagram from "../../assets/iconsSocial/insta.svg";
import { YMaps, Map, Placemark, GeolocationControl, FullscreenControl } from "react-yandex-maps";
import { useAppSelector } from "../../utils/hooks";
import { getCountCountry } from "../../utils/functions/getCountCountry";

export const Footer = () => {
    const { country, full_address } = useAppSelector(state => state.mainObject.data);
    const region = full_address?.region;
    const locality = full_address?.locality;
    const address = full_address?.address;

    console.log(country)

    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <div className={style["footerBlock-left"]}>
                    <Logo />
                    <div className={style.social}>
                        <img alt={"facebook"} src={facebook} />
                        <img alt={"instagram"} src={instagram} />
                    </div>
                    <p className={style.address}>
                        {`${country ? getCountCountry(country) : "страна"}, ${region ? region : "регион"}, ${locality ? locality : "населенный пункт"}, ${address ? address : "адрес"}`}
                    </p>
                    <div className={style.phone}>+375 (29) 853-25-10</div>
                    <div className={style.email}>info@gmail.com</div>
                    <div className={style.footerLeftInfo}>
                        <span className={style.infoDescription}>© 2024 Название компании</span>
                        <span className={style.infoDescription}>Политика конфиденциальности</span>
                        <span className={style.infoDescription}>Пользовательское соглашение</span>
                    </div>
                </div>
                <div className={style["footerBlock-right"]}>
                    <YMaps>
                        <Map
                            defaultState={{
                                center: [53.913699, 27.612626],
                                zoom: 14,
                                controls: [],
                            }}
                            className={style.map}
                        >
                            <GeolocationControl options={{ float: "right", borderRadius: '16px' }} />
                            <FullscreenControl />
                            <Placemark geometry={[53.913699, 27.612626]} />
                        </Map>
                    </YMaps>
                    <span className={style.footerRightInfo}>Разработано студией TravelWeb | Система бронирования Vitaem</span>
                </div>
            </div>
        </div>
    )
}