import style from "./FullHouseCard.module.scss";
import { features as fullFeatures } from '../HouseCard/HouseCard';
import { Carousel } from "../Carousel";
import calendar from "../../assets/icons/bigCalendar.svg";

import { ImageItem, RentalObject } from "../../redux/types/rentalObjectTypes";
import { countRooms } from "../../utils/functions/countRooms";
import { useRef, useState } from "react";
import { Calendar } from "../Calendar";

export type FullHouseCardPropsType = {
    rentalObject: RentalObject
};

export const FullHouseCard = ({ rentalObject }: FullHouseCardPropsType) => {
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    // const [reservationDate, setReservationDate] = useState();

    const { name, images, description, rooms, max_places, reservations } = rentalObject;

    const datePickerRef = useRef<HTMLDivElement>(null);

    const handleImgClick = () => {
        setDatePickerVisible(prevState => !prevState)
    };

    // const handleOutsideClick = (event: MouseEvent) => {
    //     if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
    //         setDatePickerVisible(false);
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener("mousedown", handleOutsideClick);
    //     return () => {
    //         document.removeEventListener("mousedown", handleOutsideClick);
    //     };
    // }, []);

    const houseFullPhotosSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        dots: true,
        infinite: true,
        arrows: false,
    };

    console.log(isDatePickerVisible)

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
                        <p>{max_places}</p>
                        {/* <p>{countSleepingPlaces(total_beds)}</p>     */}
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
                    {isDatePickerVisible && <div className={style.datePickerDiv} ref={datePickerRef}><Calendar reservations={reservations} /></div>}
                </div>
                {rentalObject && rentalObject.price ?
                    <div className={style.priceBlock}>
                        <p className={style.priceBlockTitle}>Общая стоимость за весь период проживания:</p>
                        <p className={style.price}>{rentalObject.price}<span>BYN</span></p>
                    </div>
                    : null
                }
            </div>
        </div>

    )
}