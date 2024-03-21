import style from "../Conditions/Conditions.module.scss";

export const Conditions = () => {
    return (
        <div className={style.conditions}>
            <h4 className={style["conditions__title"]}>Условия отмены брони и условия подтверждения брони</h4>
            <div className={style["conditions__text"]}>Бесплатная отмена за 15 дней до даты заезда</div>
            <div className={style["conditions__text"]}>Удержание 50% предоплаты за 7 дней до даты заезда</div>
            <div className={style["conditions__text"]}>Удержание всей суммы предоплаты за 2 дня до даты заезда</div>
        </div>
    )
}