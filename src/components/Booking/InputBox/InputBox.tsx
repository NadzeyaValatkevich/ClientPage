import style from "./InputBox.module.scss";

type InputBoxPropsType = {
    title: string,
    name: string,
    value?: string | undefined,
    defaultValue?: string | undefined,
    type: string,
    className?: string | undefined,
    readOnly?: boolean | undefined,
    tabindex?: number | undefined,
}

export const InputBox = ({ title, name, value, className, type, readOnly, tabindex, defaultValue }: InputBoxPropsType) => {
    return (
        <div className={`${style["input__box"]} ${className}`} >
            <label className={style["input__box-label"]} htmlFor={name}>{title}</label>
            <input className={style["input__box-input"]} id={name} type={type} name={name} value={value} defaultValue={defaultValue} readOnly={readOnly} tabIndex={tabindex} />
        </div >
    )
}