import style from "./FullHouseCard.module.scss";
import { features as fullFeatures } from '../HouseCard/HouseCard';
import { Carousel } from "../Carousel";
import calendar from "../../assets/icons/bigCalendar.svg";

import { ImageItem, RentalObject } from "../../redux/types/rentalObjectTypes";
import { countSleepingPlaces } from "../../utils/functions/countSleepingPlaces";
import { countRooms } from "../../utils/functions/countRooms";
import { useState } from "react";
import { Calendar } from "../Calendar";

export type FullHouseCardPropsType = {
    rentalObject: RentalObject
};

export const FullHouseCard = ({ rentalObject }: FullHouseCardPropsType) => {
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);

    const { name, images, description, rooms, total_beds } = rentalObject

    const houseFullPhotosSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        dots: true,
        infinite: true,
        arrows: false,
    };

    const handleImgClick = () => {
        setDatePickerVisible(isDatePickerVisible => isDatePickerVisible = !isDatePickerVisible)
    }


    return (
        <div className={style.houseBlock}>
            <div className={style.houseBlockLeft}>
                <Carousel settings={houseFullPhotosSettings}>
                    {images.map((el: ImageItem) => {
                        return (
                            <div key={el.id} className={style.imageBlock}>
                                <img className={style.image} src={el.image} alt={"housePhoto"} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div className={style.houseBlockRight}>
                <div className={style.houseBlockTitle}>{name}</div>
                <div className={style.houseBlockDescription}>
                    <p className={style.title}>Описание:</p>
                    <p className={style.description}>{description}</p>
                </div>
                <div className={style.places}>
                    <div className={style.rooms}>
                        <p>Комнаты: </p>
                        <p>{countRooms(rooms)}</p>
                    </div>
                    <div className={style.beds}>
                        <p>Спальные места: </p>
                        <p>{countSleepingPlaces(total_beds)}</p>
                        {/* <p className={style.bedsBlock}> 2 <img alt={"bedBig"} src={bedBig} /></p>
                        <p className={style.bedsBlock}> 1 <img alt={"bed"} src={bed} /></p> */}
                    </div>
                </div>
                <div className={style.featuresBlock}>
                    <p className={style.title}>Удобства:</p>
                    <div className={style.features}>
                        {fullFeatures.map((el: any) => {
                            return (
                                <div key={el.id} className={style.featuresBlock}>
                                    <img alt={el.title} src={el.icon} />
                                    <p>{el.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={style.calendarBlock}>
                    <p className={style.calendarBlockTitle}>Свободные даты:</p>
                    <img className={style.calendarBlockImage} src={calendar} alt={"Calendar"} onClick={handleImgClick} />
                    {isDatePickerVisible && <Calendar />}
                </div>
                {/* <div className={style.pricesBlock}>
                    <p className={style.pricesBlockTitle}>Стоимость в сутки:</p>
                    <div className={style.prices}>
                        <p>будни от <span>150 BYN</span></p>
                        <p>выходные от <span>250 BYN</span></p>
                    </div>
                </div> */}
            </div>
        </div>

    )
}