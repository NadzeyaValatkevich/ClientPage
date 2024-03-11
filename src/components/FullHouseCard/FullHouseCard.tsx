import style from "./FullHouseCard.module.scss";
import { photos as fullPhotos } from '../HouseCard/HouseCard';
import { features as fullFeatures } from '../HouseCard/HouseCard';
import { Carousel } from "../Carousel";
import bedBig from "../../assets/icons/bedBig.svg";
import bed from "../../assets/icons/bed.svg";

export const FullHouseCard = () => {

    const houseFullPhotosSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        dots: true,
        infinite: true,
        arrows: false,
    };


    return (
        <div className={style.houseBlock}>
            <div className={style.houseBlockLeft}>
                <Carousel settings={houseFullPhotosSettings}>
                    {fullPhotos.map((el: any) => {
                        return (
                            <div key={el.id} className={style.imageBlock}>
                                <img className={style.image} src={el.src} alt={el.title} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div className={style.houseBlockRight}>
                <div className={style.houseBlockTitle}>Домик 1</div>
                <div className={style.houseBlockDescription}>
                    <p className={style.title}>Описание:</p>
                    <p className={style.description}>Дома в аренду стоят под сводами вековых сосен, а вокруг царит чистейший воздух.
                        Для оформления интерьера домов использовались только натуральные материалы, мебель – ручная работа.
                        Дома в аренду стоят под сводами вековых сосен, а вокруг царит чистейший воздух.
                        Для оформления интерьера домов использовались только натуральные материалы, мебель – ручная работа.</p>
                </div>
                <div className={style.places}>
                    <div className={style.rooms}>
                        <p>Комнаты: </p>
                        <p>2 спальни, 1 гостиная</p>
                    </div>
                    <div className={style.beds}>
                        <p>Спальные места: </p>
                        <p className={style.bedsBlock}> 2 <img alt={"bedBig"} src={bedBig} /></p>
                        <p className={style.bedsBlock}> 1 <img alt={"bed"} src={bed} /></p>
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
                <div className={style.pricesBlock}>
                    <p className={style.pricesBlockTitle}>Стоимость в сутки:</p>
                    <div className={style.prices}>
                        <p>будни от <span>150 BYN</span></p>
                        <p>выходные от <span>250 BYN</span></p>
                    </div>
                </div>
            </div>
        </div>

    )
}