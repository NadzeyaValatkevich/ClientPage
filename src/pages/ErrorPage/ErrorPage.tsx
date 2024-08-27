import style from "./ErrorPage.module.scss";
import { ReactNode } from 'react';

type ErrorPagePropsType = {
    text: string,
    image?: ReactNode
}

export const ErrorPage = ({ text, image }: ErrorPagePropsType) => {
    return (
        <div className={style.page}>
            <div>{text}</div>
            {image}
        </div >
    )
}