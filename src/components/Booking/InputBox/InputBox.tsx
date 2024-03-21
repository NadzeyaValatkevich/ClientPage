import style from "./InputBox.module.scss";

type InputBoxPropsType = {
    title: string,
    name: string,
    value: string,
    type: string,
    className?: string,
}

export const InputBox = ({ title, name, value, className, type }: InputBoxPropsType) => {
    return (
        <div className={`${style["input__box"]} ${className}`} >
            <label className={style["input__box-label"]} htmlFor={name}>{title}</label>
            <input className={style["input__box-input"]} id={name} type={type} name={name} value={value} />
        </div >
    )
}