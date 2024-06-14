import React, { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import "./IntlTeLInput.scss";
import classNames from "classnames";
import { TelephoneType } from "../../../../redux/types/@types";
import { useAppSelector } from "../../../../utils/hooks";
import { getSortedCountriesList } from "../../../../redux/reducers/mainObjectSlice";
import { useFormContext } from "react-hook-form";

type InputProps = {
    id: string,
    value: TelephoneType,
    title?: string,
    placeholder: string,
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void,
    disabled?: boolean,
    errText?: any,
    className?: string,
    setIsValidate: (value: boolean) => void,
    setError: (value: string) => void,
    onChange: React.Dispatch<React.SetStateAction<TelephoneType>>,
    onBlur?: () => void,
    preloadedData?: TelephoneType | null,
    isBooking?: boolean,
    requiredMessage?: string,
};

export const IntlTelInput: FC<InputProps> = ({
    id,
    value,
    title,
    placeholder,
    disabled,
    errText,
    className,
    setIsValidate,
    onChange,
    onKeyDown,
    onBlur,
    setError,
    preloadedData,
    isBooking,
    requiredMessage
}) => {
    const countriesList = useAppSelector(state => getSortedCountriesList(state));
    const countryCodeList = countriesList.map((item) => item.countryCode);

    const localizedCountries = Object.fromEntries(
        countriesList.map((item) => [item.countryCode, item.countryLabel])
    );

    const [isLoaded, setIsLoaded] = useState(false);
    // const [intlTel, setIntlTel] = useState<intlTelInput.Plugin>();
    const [intlTel, setIntlTel] = useState<any>();
    const { register } = useFormContext();

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        const phoneNumber = e.target.value.replace(/\D/g, "")
        onChange({
            ...value,
            phone_number: phoneNumber,
        });

        if (intlTel) {
            // setValue("phone", phoneNumber, { shouldValidate: true })
            intlTel.setNumber(phoneNumber);
        }
    };

    useEffect(() => {
        const input: any = document.querySelector(`#${id}`);
        console.log(id)
        const inputParent = input.parentNode;
        const iti = intlTelInput(input, {
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.js",
            initialCountry: value.country_code || "by",
            onlyCountries: countryCodeList,
            localizedCountries: localizedCountries,
            nationalMode: false,
            placeholderNumberType: "MOBILE",
            separateDialCode: true,
            dropdownContainer: inputParent,
        });

        iti.promise.then(() => {
            setIsLoaded(true);
            setIntlTel(iti);
            onChange({
                ...value,
                phone_code: `+${iti.getSelectedCountryData().dialCode}`,
                country_code: iti.getSelectedCountryData().iso2 || "by",
            });
        });

        const countryChangeHandler = () => {
            onChange({
                phone_code: `+${iti.getSelectedCountryData().dialCode}`,
                country_code: iti.getSelectedCountryData().iso2 || "by",
                phone_number: "",
            });
            setError("");
        };

        input.addEventListener("countrychange", countryChangeHandler);

        return () => {
            input.removeEventListener("countrychange", countryChangeHandler);
        };
    }, []);

    useEffect(() => {
        if (intlTel && value.phone_number.length > 0) {
            intlTel.setNumber(value.phone_number);
        }
    }, [intlTel, value.phone_number]);

    useEffect(() => {
        if (intlTel) {
            setIsValidate(intlTel.isValidNumber());
        }
    }, [intlTel, value.phone_number]);

    useEffect(() => {
        if (preloadedData && intlTel) {
            intlTel.setCountry(preloadedData.country_code)
            onChange(preloadedData)
        }
    }, [intlTel, preloadedData]);


    return (
        <div className={classNames("intlTelInput", isBooking && "small")}>
            {title && (
                <div className="intlTelInput__title-wrapper">
                    <p className="intlTelInput__title">{title}</p>
                </div>
            )}
            <div
                className={classNames({
                    "intlTelInput__input-hide": !isLoaded,
                })}
            >
                <input
                    {...register("phone", { required: requiredMessage })}
                    value={value.phone_number}
                    className={classNames("intlTelInput__input", className, {
                        "intlTelInput__input-active": value.phone_number.length > 0,
                        "intlTelInput__input-error": errText,
                        "intlTelInput__input-disabled": disabled,
                    })}
                    id={id}
                    type="tel"
                    placeholder={placeholder}
                    onChange={onChangeText}
                    onBlur={onBlur}
                    disabled={disabled}
                    onKeyDown={onKeyDown}
                />
            </div>
            {errText && <p className="intlTelInput__errText">{errText}</p>}
        </div>
    );
};