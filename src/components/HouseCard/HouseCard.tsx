import style from "./HouseCard.module.scss";
import bedBig from "../../assets/icons/bedBig.svg";
import bed from "../../assets/icons/bed.svg";
import wifi from "../../assets/icons/wifi.svg";
import alcove from "../../assets/icons/alcove.svg";
import tv from "../../assets/icons/tv.svg";
import kitchen from "../../assets/icons/kitchen.svg";
import barbecue from "../../assets/icons/barbecue.svg";
import child from "../../assets/icons/child.svg";
import photo1 from "../../assets/img/3ecce7c7c117bf9af02ea816437e825e.jpg";
import photo2 from "../../assets/img/9daff51d151cfceeebefa04aa00d39d9.jpg";
import photo3 from "../../assets/img/a26be162e11e7f29bbab2f8cd1c31065.jpg";
import photo4 from "../../assets/img/ff6ca08ba1469ee50f1d35eec29ee705.jpg";
import { Button } from "../Button/Button";
import { Carousel } from "../Carousel";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { FullHouseCard } from "../FullHouseCard";
import { Booking } from "../Booking";

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

// export const photos: any = [
//     { id: 1, src: photo1, title: "photo1" },
//     { id: 2, src: photo2, title: "photo2" },
//     { id: 3, src: photo3, title: "photo3" },
//     { id: 4, src: photo4, title: "photo4" },
// ];

export const HouseCard = () => {

    const [modalActive, setModalActive] = useState(false);
    const [modalOrderActive, setModalOrderActive] = useState(false);

    const housePhotosSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        dots: true,
        infinite: true,
        arrows: false,
        // responsive: [
        //     {
        //         breakpoint: 1270,
        //         settings: {
        //             arrows: false,
        //         },
        //     },
        // ],
    };

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
        <div className={style.card}>
            <h2 className={style.cardTitle}>Домик 1</h2>
            <div className={style.houseBlock}>
                <div className={style["houseBlock-left"]}>
                    <Carousel settings={housePhotosSettings}>
                        {photos.map((el: any) => {
                            return (
                                <div key={el.id} className={style.imageBlock}>
                                    <img className={style.image} src={el.src} alt={el.title} />
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
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
            </div>

        </div>
    )
}