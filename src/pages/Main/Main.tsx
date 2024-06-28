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
import { RequestStatusType } from "../../common/enums/enums";
import { BeatLoader } from "react-spinners";

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
    const { results } = useAppSelector(state => state.rentalObjects.data);
    const { status } = useAppSelector(state => state.rentalObjects);
    const errorRental = useAppSelector(state => state.rentalObjects.error);
    const { error } = useAppSelector(state => state.mainObject);
    const [activeHouse, setActiveHouse] = useState<RentalObject | null>(null);
    const [modalActive, setModalActive] = useState(false);
    // const [modalOrderActive, setModalOrderActive] = useState(false);

    const onClickHandler = (house: RentalObject) => {
        setActiveHouse(house)
        setModalActive(true)
    };

    const onCloseHandler = () => {
        setModalActive(false)
        setActiveHouse(null)
    };

    if (status === RequestStatusType.loading) {
        return <div style={{ width: "100vw", marginBottom: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BeatLoader color="#1855b7" />
        </div>
    }

    if (error || errorRental) {
        return <div style={{
            width: "100vw",
            marginBottom: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "600"
        }} >
            {error || errorRental}
        </div >
    }

    console.log(error)
    console.log(results)

    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                {results && results.length ?
                    results.map((el: RentalObject) => {
                        return <CommonHouseCard key={el.id} house={el}>
                            <div className={style.btnsBlock}>
                                <Button value={"Подробнее"} className={style.btnDetails} onClick={() => onClickHandler(el)} />
                            </div>
                        </CommonHouseCard>
                    }) :
                    <div className={style.infoText}>В ближайшее время здесь появятся сдаваемые объекты</div>}
            </div>
            {modalActive && activeHouse && <Modal active={modalActive} onClose={onCloseHandler} setActive={setModalActive} type={"houseModal"}>
                <FullHouseCard rentalObject={activeHouse} modalActive={modalActive} />
            </Modal>}
        </div>
    )
}