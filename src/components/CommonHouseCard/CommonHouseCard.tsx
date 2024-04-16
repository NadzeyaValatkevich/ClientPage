import { Carousel } from "../Carousel";
import style from "./CommonHouseCard.module.scss";
import { ReactNode } from 'react';
import { ImageItem } from "../../redux/types/rentalObjectTypes";

type CommonHouseCardPropsType = {
    children: ReactNode,
    title: string,
    images: ImageItem[],
};

// export const photos: any = [
//     { id: 1, src: photo1, title: "photo1" },
//     { id: 2, src: photo2, title: "photo2" },
//     { id: 3, src: photo3, title: "photo3" },
//     { id: 4, src: photo4, title: "photo4" },
// ];

export const CommonHouseCard = ({ children, title, images }: CommonHouseCardPropsType) => {

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
            <h2 className={style.cardTitle}>{title}</h2>
            <div className={style.houseBlock}>
                <div className={style["houseBlock-left"]}>
                    <Carousel settings={housePhotosSettings}>
                        {images.map((el: ImageItem) => {
                            return (
                                <div key={el.id} className={style.imageBlock}>
                                    <img className={style.image} src={el.image} alt={"house image"} />
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