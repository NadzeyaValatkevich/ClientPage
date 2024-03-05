import { FC } from "react";
import style from "../Button/Button.module.scss";

type ButtonProps = {
    value?: any,
    onClick?: () => void,
    className?: string,
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
};

export const Button: FC<ButtonProps> = ({ onClick, value, className, type = "button" }) => {
    return (
        <button
            onClick={onClick}
            className={
                className ? `${style.button} ${className}` : style.button
            }

            type={type}
        >
            {value}
        </button>
    )
}