import { useState } from "react";
import { InputBox } from "../InputBox";
import style from "./PersonalInfo.module.scss";
import { CheckDateInput } from "../../FilteredBlock/CheckInDateInput";
import popOver from "../../../assets/icons/popOver.svg";
import popOverActive from "../../../assets/icons/popOverActive.svg";
import { LAST_NAME_ERROR, LAST_NAME_REQ, NAME_ERROR, NAME_REG, NAME_REQ, REQUIRED_FIELD_ERROR, SURNAME_ERROR, SURNAME_REG, SURNAME_REQ } from "../../../utils/constants";

export const PersonalInfo = () => {
    // const [lastName, setLastName] = useState('');
    // const [name, setName] = useState('');
    // const [surname, setSurname] = useState('');
    const [values, setValues] = useState<{ lastName: string, name: string, surname: string }>({
        lastName: '',
        name: '',
        surname: '',
    });
    const [birthdayDay, setBirthdayDay] = useState<null | Date>(null);
    const [errors, setErrors] = useState<{ lastName: string, name: string, surname: string }>({
        lastName: '',
        name: '',
        surname: ''
    });

    // const onChangeLastName = (value: string) => {
    //     setLastName(value)
    // };

    // const onChangeName = (value: string) => {
    //     setName(value)
    // };

    // const onChangeSurname = (value: string) => {
    //     setSurname(value)
    // };

    const handleChangeBirthdayDay = (value: Date) => {
        setBirthdayDay(value)
    };

    const validateField = (fieldName: string, value: string) => {
        let error = '';
        if (!value.trim()) {
            error = REQUIRED_FIELD_ERROR;
        } else {
            let regex;
            switch (fieldName) {
                case 'lastName':
                    regex = NAME_REG;
                    error = !regex.test(value) ? LAST_NAME_ERROR : '';
                    break;
                case 'name':
                    regex = NAME_REG;
                    error = !regex.test(value) ? NAME_ERROR : '';
                    break;
                case 'surname':
                    regex = SURNAME_REG;
                    error = !regex.test(value) ? SURNAME_ERROR : '';
                    break;
                default:
                    regex = null;
                    break;
            }
        }
        return error;
    };

    const handleChange = (fieldName: string, value: string) => {
        setValues(prevState => ({
            ...prevState,
            [fieldName]: value
        }));

        // if (typeof value !== Date) {
        const error = validateField(fieldName, value);
        setErrors(prevState => ({
            ...prevState,
            [fieldName]: error
        }))
        // }
    };

    const handleBlur = (fieldName: string, value: string) => {
        const error = validateField(fieldName, value);
        setErrors(prevState => ({
            ...prevState,
            [fieldName]: error
        }));
    };

    return (
        <div className={style.personalInfo}>
            <h4 className={style["personalInfo__title"]}>Личная информация</h4>
            <div className={style["personalInfo__block"]}>
                <InputBox className={style.item} title={"Фамилия*"} name={"lastName"} value={values.lastName}
                    type={'text'} placeholder={"Введите фамилию"} onChange={(value) => handleChange('lastName', value)}
                    img={popOver} imgActive={popOverActive}
                    onBlur={() => handleBlur('lastName', values.lastName)} error={errors.lastName} requirementsText={LAST_NAME_REQ} />
                <InputBox className={style.item} title={"Имя*"} name={"name"} value={values.name} type={'text'}
                    placeholder={"Введите имя"} onChange={(value) => handleChange('name', value)} img={popOver} imgActive={popOverActive}
                    onBlur={() => handleBlur('name', values.name)} error={errors.name} requirementsText={NAME_REQ}
                />
                <InputBox className={style.item} title={"Отчество"} name={"surname"} value={values.surname} type={'text'}
                    placeholder={"Введите отчество"} onChange={(value) => handleChange('surname', value)} img={popOver} imgActive={popOverActive}
                    onBlur={() => handleBlur('surname', values.surname)} error={errors.surname} requirementsText={SURNAME_REQ}
                />
                <div className={style.item}>
                    <h4 className={style.titleItem}>Дата рождения</h4>
                    <CheckDateInput selectedDate={birthdayDay} onDateChange={handleChangeBirthdayDay} type={"birthday"} />
                </div>
                <InputBox className={style.item} title={"Гражданство*"} name={"country"} value={"Республика Беларусь"} type={'text'} />


                <InputBox className={style.item} title={"Пол"} name={"sex"} value={"мужской"} type={'text'} />

            </div>
        </div>
    )
}