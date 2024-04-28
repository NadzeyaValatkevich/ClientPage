import { Carousel } from "../Carousel";
import style from "./CommonHouseCard.module.scss";
import { ReactNode } from 'react';
import { ImageItem, RentalObject } from "../../redux/types/rentalObjectTypes";
import { countRooms } from "../../utils/functions/countRooms";
import wifi from "../../assets/icons/wifi.svg";
import alcove from "../../assets/icons/alcove.svg";
import tv from "../../assets/icons/tv.svg";
import kitchen from "../../assets/icons/kitchen.svg";
import barbecue from "../../assets/icons/barbecue.svg";
import child from "../../assets/icons/child.svg";

type CommonHouseCardPropsType = {
    children?: ReactNode,
    house: RentalObject,
    // title: string,
    // images: ImageItem[],
};

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

export const CommonHouseCard = ({ children, house }: CommonHouseCardPropsType) => {

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

    return (
        <div className={style.card}>
            <h2 className={style.cardTitle}>{house.name}</h2>
            <div className={style.houseBlock}>
                <div className={style["houseBlock-left"]}>
                    <Carousel settings={housePhotosSettings}>
                        {house.images.map((el: ImageItem) => {
                            return (
                                <div key={el.id} className={style.imageBlock}>
                                    <img className={style.image} src={el.image} alt={"house image"} />
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                <div className={style["houseBlock-right"]}>
                    <p className={style.description}>
                        {house.description}
                    </p>
                    <div className={style.places}>
                        <div className={style.rooms}>
                            <p>Комнаты:</p>
                            <p>{countRooms(house.rooms)}</p>
                        </div>
                        <div className={style.beds}>
                            <p>Спальные места: </p>
                            <p>{house.max_places}</p>
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
                    {children && children}
                </div>
            </div>
        </div>
    )
}