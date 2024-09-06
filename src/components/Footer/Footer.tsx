import style from "./Footer.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import { YMaps, Map, Placemark, GeolocationControl, FullscreenControl } from "react-yandex-maps";
import { useAppSelector } from "../../utils/hooks/hooks";
import { getCountCountry } from "../../utils/functions/getCountCountry";
import { SocialNetworkItemType } from "../../redux/types/mainObjectTypes";
import { SOCIAL_OPTIONS } from "../../utils/constants";
import { getPhone } from "../../utils/functions/getPhone";

export const Footer = () => {
    const { country, full_address, contacts } = useAppSelector(state => state.mainObject.data);
    const region = full_address?.region;
    const locality = full_address?.locality;
    const address = full_address?.address;

    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.footerInfo}>
                    <div className={style["footerInfo-left"]}>
                        {/* <div className={style.footerLogo}>
                            <Logo />
                        </div> */}
                        <div className={style.social}>
                            {contacts?.social_networks.map((social_network: SocialNetworkItemType, index: number) => {
                                const socialOption = SOCIAL_OPTIONS.find((option: any) => {
                                    return option.type === social_network.social_network_type
                                })

                                if (socialOption) {
                                    return (
                                        <a
                                            key={index}
                                            href={social_network.account}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {socialOption.icon}

                                        </a>)
                                }
                            })}
                        </div>
                        <p className={style.address}>
                            {`${country ? getCountCountry(country) : "страна"}, ${region ? region : "регион"}, ${locality ? locality : "населенный пункт"}, ${address ? address : "адрес"}`}
                        </p>
                        <div className={style.phones}>
                            <p>{contacts?.phone ? getPhone(contacts.phone) : ""}</p>
                        </div>
                        <div className={style.email}>{contacts?.email}</div>

                    </div>
                    <div className={style["footerInfo-right"]}>
                        <YMaps>
                            <Map
                                defaultState={{
                                    // center: coordinates || [53.913699, 27.612626],
                                    center: [53.913699, 27.612626],
                                    zoom: 14,
                                    controls: [],
                                }}
                                className={style.map}
                            >
                                <GeolocationControl options={{ float: "right", borderRadius: '16px' }} />
                                <FullscreenControl />
                                {/* {coordinates && <Placemark geometry={coordinates} />} */}
                                <Placemark geometry={[52.7581445, 26.4245277]} />
                            </Map>
                        </YMaps>
                    </div>
                </div>
                <div className={style.footerContent}>
                    <div className={style["footerContent-left"]}>
                        <div className={style.footerContentTitle}>
                            <span>© 2024 / ООО "Витаем"</span>

                        </div>
                        <div className={style["footerContent-politics"]}>Политика конфиденциальности</div>
                        <div className={style["footerContent-agree"]}>Пользовательское соглашение</div>
                    </div>
                    <div className={style["footerContent-right"]}>Разработано студией TravelWeb | Система бронирования Vitaem</div>
                </div>
            </div>
        </div >
    )
}