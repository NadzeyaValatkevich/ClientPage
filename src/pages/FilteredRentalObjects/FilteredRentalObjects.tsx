import style from "./FilteredRentalObjects.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import { useAppSelector } from "../../utils/hooks";

export const FilteredRentalObjects = () => {
    const { results, count } = useAppSelector(state => state.filteredRentalObjects);

    console.log(results, count)

    return (
        <div className={style.rentalObjectsBlock}>
            <div className={styleContainer.container}>
                {count === 0 ?
                    <div className={style.info}>К сожалению, подходящих домиков для бронирования на выбранные даты и количество гостей не найдено.
                        Попробуйте изменить даты или количество гостей.</div>
                    : null
                }

            </div>

        </div>
    )
}