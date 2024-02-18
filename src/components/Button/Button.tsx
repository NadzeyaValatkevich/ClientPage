import { FC } from "react";
import style from "../Button/Button.module.scss";

type ButtonProps = {
    value?: any,
    onClickHandler?: () => void,
    className?: string,
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
};

export const Button: FC<ButtonProps> = ({ onClickHandler, value, className, type = "button" }) => {
    return (
        <button
            onClick={onClickHandler}
            className={
                className ? `${style.button} ${className}` : style.button
            }

            type={type}
        >
            {value}
        </button>
    )
}