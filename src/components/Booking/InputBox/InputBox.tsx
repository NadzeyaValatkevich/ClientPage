import { ChangeEvent, useRef, useState, KeyboardEvent } from "react";
import style from "./InputBox.module.scss";
import { Popover } from "../../Popover";
import { useFormContext } from "react-hook-form";

type InputBoxPropsType = {
    title: string,
    // name: "rental_object" | "check_in_date" | "check_out_date" | "check_out_time" | "animals_info" | "guests",
    name: any,
    value?: any,
    displayValue?: string,
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
    error?: any,
    requirementsText?: string | string[],
    requiredMessage?: string
    register?: any
}

export const InputBox = (props: InputBoxPropsType) => {

    const { title,
        name,
        value,
        displayValue,
        className,
        type,
        readOnly,
        tabindex,
        defaultValue,
        placeholder,
        onChange,
        img,
        imgActive,
        onBlur,
        requirementsText,
        error,
        requiredMessage
        // register 
    } = props;
    const [newValue, setValue] = useState(value);
    const [showPopover, setShowPopover] = useState(false);

    const imgRef = useRef<HTMLImageElement>(null);

    const handleOnChange = ((e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value.charAt(0) === ' ')
        if (e.currentTarget.value.charAt(0) === ' ') {
            return
        }
        setValue(e.currentTarget.value);
        onChange && onChange(e.currentTarget.value)
    });

    const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (type === 'email' && e.key === ' ') {
            e.preventDefault();
        }

    };

    const onHandlerImgClick = () => {
        // setShowPopover(true)
        setShowPopover(prevState => !prevState);
    };

    const closeModal = () => {
        setShowPopover(false);
    };

    const { register } = useFormContext();

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

            <input
                {...register(name, { required: requiredMessage })}
                className={error ? `${style["input__box-input"]} ${style["input__box-input--error"]}` : style["input__box-input"]} id={name}
                type={type} name={name}
                // value={value ? value : newValue}
                // value={value}

                value={displayValue ? displayValue : value ? value : newValue}
                defaultValue={defaultValue}
                readOnly={readOnly}
                tabIndex={tabindex}
                placeholder={placeholder}
                onChange={handleOnChange}
                onBlur={onBlur}
                onKeyDown={handleOnKeyDown}
            />
            {error && <p className={style.error}>{error}</p>}
        </div >
    )
}