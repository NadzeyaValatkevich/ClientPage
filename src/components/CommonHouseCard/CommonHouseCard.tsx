import { Carousel } from "../Carousel";
import style from "./CommonHouseCard.module.scss";
import { ReactNode } from 'react';
import photo1 from "../../assets/img/3ecce7c7c117bf9af02ea816437e825e.jpg";
import photo2 from "../../assets/img/9daff51d151cfceeebefa04aa00d39d9.jpg";
import photo3 from "../../assets/img/a26be162e11e7f29bbab2f8cd1c31065.jpg";
import photo4 from "../../assets/img/ff6ca08ba1469ee50f1d35eec29ee705.jpg";

type CommonHouseCardPropsType = {
    children: ReactNode
};

export const photos: any = [
    { id: 1, src: photo1, title: "photo1" },
    { id: 2, src: photo2, title: "photo2" },
    { id: 3, src: photo3, title: "photo3" },
    { id: 4, src: photo4, title: "photo4" },
];

export const CommonHouseCard = ({ children }: CommonHouseCardPropsType) => {

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
                {children}

            </div>

        </div>

    )
}