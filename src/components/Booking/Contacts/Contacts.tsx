import { useEffect, useState } from "react";
import { InputBox } from "../InputBox";
import style from "./Contacts.module.scss";
import { TelephoneType } from "../../../redux/types/@types";
import { IntlTelInput } from "../Contacts/IntlTelInput";
import popOver from "../../../assets/icons/popOver.svg";
import popOverActive from "../../../assets/icons/popOverActive.svg";
import { REQUIRED_FIELD_ERROR, TELEGRAM_REQ, TELEPHONE_ERROR } from "../../../utils/constants";
import { validateField } from "../../../utils/functions/validateField";
import { Controller, useFormContext } from "react-hook-form";

export const Contacts = () => {
    const [telephoneError, setTelephoneError] = useState("");
    const [telephone, setTelephone] = useState<TelephoneType>({
        country_code: "",
        phone_code: "",
        phone_number: "",
    });
    const [telephoneTouched, setTelephoneTouched] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);

    const [telegram, setTelegram] = useState("");
    const [telegramError, setTelegramError] = useState("");
    const [telegramTouched, setTelegramTouched] = useState(false);

    const [isTelephoneValid, setIsTelephoneValid] = useState(false);

    const { register, formState: { errors }, setValue, control } = useFormContext();

    const handleChangeEmail = (fieldName: string, value: string) => {
        if (!emailTouched) {
            setEmailTouched(true)
        }
        setEmail(value);

        if (emailTouched) {
            setValue(fieldName, value, { shouldValidate: true })
            const error = validateField(fieldName, value);
            setEmailError(error)
        }
    };

    const handleChangeTelegram = (fieldName: string, value: string) => {
        if (!telegramTouched) {
            setTelegramTouched(true)
        }
        setTelegram(value);

        if (telegramTouched) {
            setValue(fieldName, value)
            const error = validateField(fieldName, value);
            setTelegramError(error)
        }
    };

    const handleOnBlur = (fieldName: string, value: string) => {
        if (fieldName === "email") {
            !emailTouched && setEmailTouched(true)
        } else if (fieldName === "telegram") {
            !telegramTouched && setTelegramTouched(true)
        }

        const error = validateField(fieldName, value)
        if (fieldName === "email") {
            setEmailError(error)
        } else if (fieldName === "telegram") {
            setTelegramError(error)
        }
    };

    const handleOnBlurTelephone = (value: string) => {
        if (!telephoneTouched) {
            setTelephoneTouched(true)
        }
        let error = '';

        if (!value.trim()) {
            error = REQUIRED_FIELD_ERROR;
        } else if (!isTelephoneValid) {
            error = TELEPHONE_ERROR
        }
        setTelephoneError(error)
    };

    const handleChangeTelephone = (value: any) => {
        setValue("phone", value, { shouldValidate: true })
        setTelephone(value);
    }

    useEffect(() => {
        if (telephoneTouched) {
            let error = '';

            if (!telephone.phone_number.trim()) {
                error = REQUIRED_FIELD_ERROR;
            } else if (!isTelephoneValid) {
                error = TELEPHONE_ERROR;
            } else {
                error = "";
            }
            setTelephoneError(error);
        }
    }, [isTelephoneValid, telephone, telephoneTouched]);


    return (
        <div className={style.contacts}>
            <h4 className={style["contacts__title"]}>Контакты</h4>
            <div className={style["contacts__block"]}>
                <Controller
                    control={control}
                    name="phone"
                    rules={{ required: true }}
                    render={({ field }) => (
                        <IntlTelInput
                            id="MobilePhone"
                            title="Мобильный телефон*"
                            // value={telephone}
                            value={field.value || { country_code: '', phone_code: '', phone_number: '' }}
                            placeholder="Введите номер телефона"
                            onChange={handleChangeTelephone}
                            errText={telephoneError || errors.phone?.message}
                            setError={setTelephoneError}
                            setIsValidate={setIsTelephoneValid}
                            onBlur={() => handleOnBlurTelephone(telephone.phone_number)}
                            requiredMessage={REQUIRED_FIELD_ERROR}
                        />
                    )}
                />
                <InputBox
                    title={"Электронная почта*"}
                    name={"email"}
                    value={email}
                    type={"email"}
                    placeholder={"Введите электронную почту"}
                    onChange={(value) => { handleChangeEmail("email", value) }}
                    onBlur={() => handleOnBlur("email", email)}
                    error={emailError || errors["email"]?.message}
                    requiredMessage={REQUIRED_FIELD_ERROR}
                />
                <InputBox
                    title={"Телеграм"}
                    name={"telegram"}
                    value={telegram}
                    type={'text'}
                    placeholder={"Введите ссылку или никнейм"}
                    onChange={(value) => { handleChangeTelegram("telegram", value) }}
                    onBlur={() => handleOnBlur("telegram", telegram)}
                    error={telegramError}
                    img={popOver}
                    imgActive={popOverActive}
                    requirementsText={TELEGRAM_REQ}
                />
            </div>

        </div>
    )
}