import { Carousel } from "../Carousel";
import style from "./CommonHouseCard.module.scss";
import { ReactNode } from 'react';
import { ImageItem, RentalObject, TransformFeatureItem } from "../../redux/types/rentalObjectTypes";
import { countRooms } from "../../utils/functions/countRooms";
import { NextArrow, PrevArrow } from "../CustomArrows/CustomArrows";
import { getCountFeatures } from "../../utils/functions/getCountFeatures"

type CommonHouseCardPropsType = {
    children?: ReactNode,
    house: RentalObject,
};

export const CommonHouseCard = ({ children, house }: CommonHouseCardPropsType) => {

    const features = getCountFeatures(house.features).slice(0, 6);

    const housePhotosSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        dots: house.images.length > 1,
        infinite: house.images.length > 1,
        arrows: house.images.length > 1,
        prevArrow: <PrevArrow onClick={() => { }} />,
        nextArrow: <NextArrow onClick={() => { }} />,
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
                            {features.map((el: TransformFeatureItem | null, index: number) => {
                                return (
                                    <div key={index} className={style.featuresItem}>
                                        <>{el?.logo}</>
                                        <p className={style["featuresItem_title"]}>{el?.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {children && children}
                </div>
            </div>
        </div >
    )
}