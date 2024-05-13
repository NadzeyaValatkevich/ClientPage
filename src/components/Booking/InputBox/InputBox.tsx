import { ChangeEvent, useState } from "react";
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
    placeholder?: string | undefined,
    onChange?: ((value: string) => void) | undefined
}

export const InputBox = ({ title, name, value, className, type, readOnly, tabindex, defaultValue, placeholder, onChange }: InputBoxPropsType) => {
    const [newValue, setValue] = useState(value);

    const handleOnChange = ((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        onChange && onChange(e.currentTarget.value)
    });

    return (
        <div className={`${style["input__box"]} ${className}`} >
            <label className={style["input__box-label"]} htmlFor={name}>{title}</label>
            <input className={style["input__box-input"]} id={name}
                type={type} name={name}
                value={newValue}
                defaultValue={defaultValue}
                readOnly={readOnly}
                tabIndex={tabindex}
                placeholder={placeholder}
                onChange={handleOnChange}
            />
        </div >
    )
}