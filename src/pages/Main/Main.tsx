import { useState } from "react";
import styleContainer from "../../common/styles/Container.module.scss";
import { CommonHouseCard } from "../../components/CommonHouseCard/CommonHouseCard";
import style from "./Main.module.scss";
import bedBig from "../../assets/icons/bedBig.svg";
import bed from "../../assets/icons/bed.svg";
import wifi from "../../assets/icons/wifi.svg";
import alcove from "../../assets/icons/alcove.svg";
import tv from "../../assets/icons/tv.svg";
import kitchen from "../../assets/icons/kitchen.svg";
import barbecue from "../../assets/icons/barbecue.svg";
import child from "../../assets/icons/child.svg";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal";
import { Booking } from "../../components/Booking";
import { FullHouseCard } from "../../components/FullHouseCard";

export const features: any = [
    { id: 1, icon: wifi, title: "Wi-Fi" },
    { id: 2, icon: alcove, title: "Беседка" },
    { id: 3, icon: tv, title: "TV" },
    { id: 4, icon: kitchen, title: "Кухня" },
    { id: 5, icon: barbecue, title: "Барбекю" },
    { id: 6, icon: child, title: "Детская площадка" },
    { id: 7, icon: kitchen, title: "Кухня" },
    { id: 8, icon: barbecue, title: "Барбекю" },
    { id: 9, icon: child, title: "Детская площадка" },
];

export const Main = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalOrderActive, setModalOrderActive] = useState(false);

    const onClickHandler = () => {
        setModalActive(true)
    };

    const onCloseHandler = () => {
        setModalActive(false)
    };

    const onClickOrderHandler = () => {
        setModalOrderActive(true)
    };

    const onCloseOrderHandler = () => {
        setModalOrderActive(false)
    };

    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <CommonHouseCard>
                    <div className={style["houseBlock-right"]}>
                        <p className={style.description}>
                            Дом бронируется целиком, можно с детьми и животными. Рядом детская площадка. Полный пансион.
                        </p>
                        <div className={style.places}>
                            <div className={style.rooms}>
                                <p>Комнаты: </p>
                                <p>2 спальни, 1 гостиная</p>
                            </div>
                            <div className={style.beds}>
                                <p>Спальные места: </p>
                                <p > 2 <img alt={"bedBig"} src={bedBig} /></p>
                                <p> 1 <img alt={"bed"} src={bed} /></p>
                            </div>
                        </div>
                        <div className={style.featuresBlock}>
                            <p className={style.featuresTitle}>Удобства:</p>
                            <div className={style.features}>
                                {features.map((el: any) => {
                                    return (
                                        <div key={el.id} className={style.featuresBlock}>
                                            <img alt={el.title} src={el.icon} />
                                            <p>{el.title}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={style.pricesBlock}>
                            <p className={style.pricesBlockTitle}>Стоимость в сутки:</p>
                            <div className={style.prices}>
                                <p>будни от <span>150 BYN</span></p>
                                <p>выходные от <span>250 BYN</span></p>
                            </div>
                        </div>
                        <div className={style.btnsBlock}>
                            <Button value={"Забронировать"} className={style.btnBook} onClick={onClickOrderHandler} />
                            <Button value={"Подробнее"} className={style.btnDetails} onClick={onClickHandler} />
                        </div>
                        {modalActive && <Modal active={modalActive} onClose={onCloseHandler} setActive={setModalActive} type={"houseModal"}><FullHouseCard /></Modal>}

                        {modalOrderActive && <Modal active={modalOrderActive} onClose={onCloseOrderHandler} setActive={setModalOrderActive} type={"bookingModal"}>
                            <Booking />
                        </Modal>}
                    </div>
                </CommonHouseCard>
            </div>
        </div>
    )
}