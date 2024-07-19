import style from "./Footer.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import { Logo } from "../Logo";
import facebook from "../../assets/iconsSocial/f.svg";
import instagram from "../../assets/iconsSocial/insta.svg";
import telegram from "../../assets/iconsSocial/tg.svg";
import viber from "../../assets/iconsSocial/viber.svg";
import vk from "../../assets/iconsSocial/vk.svg";
import { YMaps, Map, Placemark, GeolocationControl, FullscreenControl } from "react-yandex-maps";
import { useAppSelector } from "../../utils/hooks/hooks";
import { getCountCountry } from "../../utils/functions/getCountCountry";

export const Footer = () => {
    const { country, full_address } = useAppSelector(state => state.mainObject.data);
    const region = full_address?.region;
    const locality = full_address?.locality;
    const address = full_address?.address;

    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.footerInfo}>
                    <div className={style["footerInfo-left"]}>
                        <div className={style.footerLogo}>
                            <Logo />
                        </div>
                        <div className={style.social}>
                            <img alt={"facebook"} src={facebook} />
                            <img alt={"instagram"} src={instagram} />
                            <img alt={"telegram"} src={telegram} />
                            <img alt={"viber"} src={viber} />
                            <img alt={"vk"} src={vk} />
                        </div>
                        <p className={style.address}>
                            {`${country ? getCountCountry(country) : "страна"}, ${region ? region : "регион"}, ${locality ? locality : "населенный пункт"}, ${address ? address : "адрес"}`}
                        </p>
                        <div className={style.phones}>
                            <p>+375 (29) 853-25-10</p>
                            <p>+375 (29) 853-25-10</p>
                        </div>
                        <div className={style.email}>info@gmail.com</div>

                    </div>
                    <div className={style["footerInfo-right"]}>
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
                    </div>
                </div>
                <div className={style.footerContent}>
                    <div className={style["footerContent-left"]}>
                        <div className={style.footerContentTitle}>
                            <span>© 2024 Название компании</span>

                        </div>              {/* <div className={style.infoDescription}> */}
                        <div className={style["footerContent-politics"]}>Политика конфиденциальности</div>
                        <div className={style["footerContent-agree"]}>Пользовательское соглашение</div>
                        {/* </div> */}
                    </div>
                    <div className={style["footerContent-right"]}>Разработано студией TravelWeb | Система бронирования Vitaem</div>
                </div>
            </div>
        </div>
    )
}