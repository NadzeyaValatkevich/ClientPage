import { MouseEventHandler } from "react";
import styles from "./CustomArrows.module.scss";

type ArrowPropsType = {
    onClick: MouseEventHandler<HTMLDivElement>
};

export const PrevArrow = ({ onClick }: ArrowPropsType) => {
    return (
        <div
            className={styles.prevArrow}
            onClick={onClick}
        />
    );
};

export const NextArrow = ({ onClick }: ArrowPropsType) => {
    return (
        <div
            className={styles.nextArrow}
            onClick={onClick}
        />
    );
};