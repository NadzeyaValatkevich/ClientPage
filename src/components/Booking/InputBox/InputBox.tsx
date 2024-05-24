import { ChangeEvent, useRef, useState } from "react";
import style from "./InputBox.module.scss";
import { Popover } from "../../Popover";

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
    onChange?: ((value: string) => void) | undefined,
    img?: string,
    imgActive?: string,
    onBlur?: () => void,
    error?: string,
    requirementsText?: string | string[]
}

export const InputBox = (props: InputBoxPropsType) => {

    const { title, name, value, className, type, readOnly, tabindex, defaultValue, placeholder, onChange, img, imgActive, onBlur, requirementsText, error } = props;
    const [newValue, setValue] = useState(value);
    const [showPopover, setShowPopover] = useState(false);

    const imgRef = useRef<HTMLImageElement>(null);

    console.log(showPopover)


    const handleOnChange = ((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        onChange && onChange(e.currentTarget.value)
    });

    const onHandlerImgClick = () => {
        // setShowPopover(true)
        setShowPopover(prevState => !prevState);
    };

    const closeModal = () => {
        setShowPopover(false);
    };

    return (
        <div className={`${style["input__box"]} ${className}`} >
            <div className={style["input__box-label"]}>
                <label className={style["input__box-label--text"]} htmlFor={name}>{title}</label>
                <div className={style["input__box-label--icon"]}>
                    {img &&
                        <img className={style["input__box-label--image"]}
                            src={showPopover ? imgActive : img} alt={"validation"}
                            onClick={onHandlerImgClick} ref={imgRef} />}
                    <Popover isOpen={showPopover} onClose={closeModal} requirementsText={requirementsText} refBtn={imgRef} />
                </div>
            </div>

            <input className={error ? `${style["input__box-input"]} ${style["input__box-input--error"]}` : style["input__box-input"]} id={name}
                type={type} name={name}
                value={value ? value : newValue}
                defaultValue={defaultValue}
                readOnly={readOnly}
                tabIndex={tabindex}
                placeholder={placeholder}
                onChange={handleOnChange}
                onBlur={onBlur}
            />
            {error && <p className={style.error}>{error}</p>}
        </div >
    )
}