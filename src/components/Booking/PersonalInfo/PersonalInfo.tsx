import { useState } from "react";
import { InputBox } from "../InputBox";
import style from "./PersonalInfo.module.scss";
import { CheckDateInput } from "../../FilteredBlock/CheckInDateInput";
import popOver from "../../../assets/icons/popOver.svg";
import popOverActive from "../../../assets/icons/popOverActive.svg";
import { FIRST_NAME_REQ, LAST_NAME_REQ, REQUIRED_FIELD_ERROR, SECOND_NAME_REQ, optionsNationality } from "../../../utils/constants";
import { SelectComponent } from "../../SelectComponent/SelectComponent";
import { validateField } from "../../../utils/functions/validateField";
import { Controller, useFormContext } from "react-hook-form";
import { formatDashDate } from "../../../utils/functions/formatDate";

export const PersonalInfo = () => {
    const [values, setValues] = useState<{ first_name: string, second_name: string, last_name: string }>({
        first_name: '',
        second_name: '',
        last_name: '',
    });
    const [valuesTouched, setValuesTouched] = useState<{ [key: string]: boolean }>({
        first_name: false,
        second_name: false,
        last_name: false,
    });
    const [errorsName, setErrors] = useState<{ first_name: string, second_name: string, last_name: string }>({
        first_name: '',
        second_name: '',
        last_name: ''
    });
    const [selectedGender, setSelectedGender] = useState<"mal" | "fem">("mal");

    const [birthdayDay, setBirthdayDay] = useState("");

    const { register, setValue, formState: { errors }, control } = useFormContext();

    const handleChangeBirthdayDay = (value: Date) => {
        setValue("birth_day", formatDashDate(value))
        setBirthdayDay(formatDashDate(value))
    };

    const handleChange = (fieldName: string, value: string) => {
        if (!valuesTouched[fieldName]) {
            setValuesTouched(prevState => ({
                ...prevState,
                [fieldName]: true,
            }))
        }

        setValues(prevState => ({
            ...prevState,
            [fieldName]: value
        }));

        if (valuesTouched[fieldName]) {
            setValue(fieldName, value, { shouldValidate: true })
            const error = validateField(fieldName, value);
            setErrors(prevState => ({
                ...prevState,
                [fieldName]: error
            }))
        }

    };

    const handleOnBlur = (fieldName: string, value: string) => {
        if (!valuesTouched[fieldName]) {
            setValuesTouched(prevState => ({
                ...prevState,
                [fieldName]: true,
            }))
        }

        setValue(fieldName, value, { shouldValidate: true })
        const error = validateField(fieldName, value);
        setErrors(prevState => ({
            ...prevState,
            [fieldName]: error
        }));
    };

    const handleGenderSelect = (gender: "mal" | "fem") => {
        setSelectedGender(gender)
    };

    return (
        <div className={style.personalInfo}>
            <h4 className={style["personalInfo__title"]}>Личная информация</h4>
            <div className={style["personalInfo__block"]}>
                <InputBox
                    className={style.item}
                    title={"Фамилия*"}
                    name={"last_name"}
                    value={values.last_name}
                    type={'text'}
                    placeholder={"Введите фамилию"}
                    onChange={(value) => handleChange('last_name', value)}
                    img={popOver}
                    imgActive={popOverActive}
                    onBlur={() => handleOnBlur('last_name', values.last_name)}
                    error={errorsName.last_name || errors["last_name"]?.message}
                    requirementsText={LAST_NAME_REQ}
                    requiredMessage={REQUIRED_FIELD_ERROR}
                />
                <InputBox
                    className={style.item}
                    title={"Имя*"}
                    name={"first_name"}
                    value={values.first_name}
                    type={'text'}
                    placeholder={"Введите имя"}
                    onChange={(value) => handleChange('first_name', value)}
                    img={popOver} imgActive={popOverActive}
                    onBlur={() => handleOnBlur('first_name', values.first_name)}
                    error={errorsName.first_name || errors["first_name"]?.message}
                    requirementsText={FIRST_NAME_REQ}
                    requiredMessage={REQUIRED_FIELD_ERROR}
                />
                <InputBox
                    className={style.item}
                    title={"Отчество"}
                    name={"second_name"}
                    value={values.second_name}
                    type={'text'}
                    placeholder={"Введите отчество"}
                    onChange={(value) => handleChange('second_name', value)}
                    img={popOver} imgActive={popOverActive}
                    onBlur={() => handleOnBlur('second_name', values.second_name)}
                    error={errorsName.second_name}
                    requirementsText={SECOND_NAME_REQ}
                />
                <div className={style.item}>
                    <h4 className={style.titleItem}>Дата рождения</h4>
                    <CheckDateInput {...register("birth_day")} selectedDate={birthdayDay} onDateChange={handleChangeBirthdayDay} type={"birthday"} />
                </div>
                <div className={style.item}>
                    <h4 className={style.titleItem}>Пол</h4>
                    <Controller
                        control={control}
                        name="sex"
                        defaultValue={selectedGender}
                        render={({ field }) => (
                            <div className={style.genderSelect}>
                                <div className={`${style.genderOption} ${field.value === "mal" ? style.genderOptionSelected : ""}`}
                                    onClick={() => {
                                        field.onChange("mal")
                                        handleGenderSelect("mal")
                                    }}
                                >Мужской</div>
                                <div className={`${style.genderOption} ${field.value === "fem" ? style.genderOptionSelected : ""}`}
                                    onClick={() => {
                                        field.onChange("fem")
                                        handleGenderSelect("fem")
                                    }}
                                >Женский</div>
                            </div>

                        )}
                    />
                </div>
                <SelectComponent
                    className={style.item}
                    options={optionsNationality}
                    label={"Гражданство*"}
                    name={"nationality"}
                />
            </div>
        </div >
    )
}