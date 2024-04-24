import { useState } from "react";
import styleContainer from "../../common/styles/Container.module.scss";
import { CommonHouseCard } from "../../components/CommonHouseCard/CommonHouseCard";
import style from "./Main.module.scss";
import wifi from "../../assets/icons/wifi.svg";
import alcove from "../../assets/icons/alcove.svg";
import tv from "../../assets/icons/tv.svg";
import kitchen from "../../assets/icons/kitchen.svg";
import barbecue from "../../assets/icons/barbecue.svg";
import child from "../../assets/icons/child.svg";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal";
import { FullHouseCard } from "../../components/FullHouseCard";
import { useAppSelector } from "../../utils/hooks";
import { RentalObject } from "../../redux/types/rentalObjectTypes";
import { countRooms } from "../../utils/functions/countRooms";
import { countSleepingPlaces } from "../../utils/functions/countSleepingPlaces";

export const features: any = [
    { id: 1, icon: wifi, title: "Wi-Fi" },
    { id: 2, icon: alcove, title: "Беседка" },
    { id: 3, icon: tv, title: "TV" },
    { id: 4, icon: kitchen, title: "Кухня" },
    { id: 5, icon: barbecue, title: "Барбекю" },
    { id: 6, icon: child, title: "Детская площадка" },
    // { id: 7, icon: kitchen, title: "Кухня" },
    // { id: 8, icon: barbecue, title: "Барбекю" },
    // { id: 9, icon: child, title: "Детская площадка" },
];

export const Main = () => {
    const { results } = useAppSelector(state => state.rentalObjects);

    const [modalActive, setModalActive] = useState(false);
    // const [modalOrderActive, setModalOrderActive] = useState(false);

    const onClickHandler = () => {
        setModalActive(true)
    };

    const onCloseHandler = () => {
        setModalActive(false)
    };

    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                {results && results.map((el: RentalObject) => {
                    return <CommonHouseCard key={el.id} title={el.name} images={el.images}>
                        <div className={style["houseBlock-right"]}>
                            <p className={style.description}>
                                {el.description}
                            </p>
                            <div className={style.places}>
                                <div className={style.rooms}>
                                    <p>Комнаты:</p>
                                    <p>{countRooms(el.rooms)}</p>
                                </div>
                                <div className={style.beds}>
                                    <p>Спальные места: </p>
                                    <p>{el.max_places}</p>
                                    {/* <p>{countSleepingPlaces(el.total_beds)}</p> */}
                                </div>
                            </div>
                            <div className={style.featuresBlock}>
                                <p className={style.featuresTitle}>Удобства:</p>
                                <div className={style.features}>
                                    {features.map((el: any) => {
                                        return (
                                            <div key={el.id} className={style.featuresItem}>
                                                <img alt={el.title} src={el.icon} />
                                                <p>{el.title}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* <div className={style.pricesBlock}>
                                <p className={style.pricesBlockTitle}>Стоимость в сутки:</p>
                                <div className={style.prices}>
                                    <p>будни от <span>150 BYN</span></p>
                                    <p>выходные от <span>250 BYN</span></p>
                                </div>
                            </div> */}
                            <div className={style.btnsBlock}>
                                {/* <Button value={"Забронировать"} className={style.btnBook} onClick={onClickOrderHandler} /> */}
                                <Button value={"Подробнее"} className={style.btnDetails} onClick={onClickHandler} />
                            </div>
                            {modalActive && <Modal active={modalActive} onClose={onCloseHandler} setActive={setModalActive} type={"houseModal"}>
                                <FullHouseCard rentalObject={el} />
                            </Modal>}

                            {/* {modalOrderActive && <Modal active={modalOrderActive} onClose={onCloseOrderHandler} setActive={setModalOrderActive} type={"bookingModal"}>
                                <Booking />
                            </Modal>} */}
                        </div>
                    </CommonHouseCard>
                })}
            </div>
        </div>
    )
}