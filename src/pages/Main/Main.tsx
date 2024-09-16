import { useState } from "react";
import styleContainer from "../../common/styles/Container.module.scss";
import { CommonHouseCard } from "../../components/CommonHouseCard/CommonHouseCard";
import style from "./Main.module.scss";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal";
import { FullHouseCard } from "../../components/FullHouseCard";
import { useAppSelector } from "../../utils/hooks/hooks";
import { RentalObject } from "../../redux/types/rentalObjectTypes";
import { RequestStatusType } from "../../common/enums/enums";
import { BeatLoader } from "react-spinners";
import { Pagination } from "../../components/Pagination";
import { LIMIT_OBJECTS_DESKTOP, LIMIT_OBJECTS_MOBILE } from "../../utils/constants";
import { useWindowWidth } from "../../utils/hooks/useWindowWidth";

export const Main = () => {
    const { results } = useAppSelector(state => state.rentalObjects.data);
    const { status } = useAppSelector(state => state.rentalObjects);
    const errorRental = useAppSelector(state => state.rentalObjects.error);
    const { error } = useAppSelector(state => state.mainObject);
    const [activeHouse, setActiveHouse] = useState<RentalObject | null>(null);
    const [modalActive, setModalActive] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const windowWidth = useWindowWidth();

    const LIMIT_OBJECTS = windowWidth <= 360 ? LIMIT_OBJECTS_MOBILE : LIMIT_OBJECTS_DESKTOP;

    const onClickHandler = (house: RentalObject) => {
        setActiveHouse(house)
        setModalActive(true)
    };

    const onCloseHandler = () => {
        setModalActive(false)
        setActiveHouse(null)
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * LIMIT_OBJECTS;
    const endIndex = startIndex + LIMIT_OBJECTS;
    const currentResults = results && results.slice(startIndex, endIndex);

    if (status === RequestStatusType.loading) {
        return <div className={style.loader}>
            <BeatLoader color="#1855b7" />
        </div>
    }

    if (error || errorRental) {
        return <div className={style.error}
        >
            {error || errorRental}
        </div >
    }

    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                {currentResults && currentResults.length ?
                    currentResults.map((el: RentalObject) => {
                        return <CommonHouseCard key={el.id} house={el} type={"withoutPrice"}>
                            <div className={style.btnsBlock}>
                                <Button value={"Подробнее"} className={style.btnDetails} onClick={() => onClickHandler(el)} />
                            </div>
                        </CommonHouseCard>
                    }) :
                    <div className={style.infoText}>В ближайшее время здесь появятся сдаваемые объекты</div>}
            </div>
            {results && results.length > 1 && <Pagination currentPage={currentPage} onPageChange={handlePageChange} type={"all"} />}
            {modalActive && activeHouse && <Modal active={modalActive} onClose={onCloseHandler} setActive={setModalActive} type={"houseModal"}>
                <FullHouseCard rentalObject={activeHouse} modalActive={modalActive} />
            </Modal>}
        </div>
    )
}