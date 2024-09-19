import style from "./ErrorPage.module.scss";
import { ReactNode } from 'react';

type ErrorPagePropsType = {
    text: string,
    image?: ReactNode,
    type?: string
}

export const ErrorPage = ({ text, image, type }: ErrorPagePropsType) => {
    return (
        <div className={type === "appError" ? `${style.appErrorPage} ${style.page}` : style.page}>
            <div>{text}</div>
            {image}
        </div >
    )
}