import { forwardRef } from "react";
import style from "./SelectCountPeople.module.scss";
import React from "react";

type SelectCountPeoplePropsType = {
    title: string,
    value: number,
    onIncrement: () => void;
    onDecrement: () => void;
}

export const SelectCountPeople = ({ title, value, onIncrement, onDecrement }: SelectCountPeoplePropsType) => {

    return (
        <div className={style["select__block"]}>
            <p className={style["select__block-title"]}>{title}</p>
            <div className={style["select__block-item"]}>
                <button
                    className={value > 0 ? style["select__block-item--btn"] : `${style["select__block-item--btn"]} ${style["disabled"]}`}
                    onClick={onDecrement} type="button">-</button>
                <div className={style["select__block-item--number"]}>{value}</div>
                <button className={style["select__block-item--btn"]} onClick={onIncrement} type={"button"}>+</button>
            </div>
        </div>
    )
}