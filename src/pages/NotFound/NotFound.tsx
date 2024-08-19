import style from "./NotFound.module.scss";

export const NotFound = () => {
    return (
        <div className={style.page}>
            <div>Добро пожаловать на страницу объектов.</div>
            <div>Пожалуйста, укажите правильный URL, чтобы её просмотреть.</div>
        </div >
    )
}