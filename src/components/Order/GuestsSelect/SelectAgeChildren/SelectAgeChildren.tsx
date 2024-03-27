import Select from 'react-select';
import style from "./SelectAgeChildren.module.scss";
import { OptionType } from '../GuestsSelect';
import { forwardRef } from 'react';
// import 'react-select/dist/react-select.css';

type SelectAgeChildrenPropsType = {
    selectedAge: OptionType | undefined,
    onChangeAge: (newAge: OptionType) => void,
    options: any,
    index: number,
    error: string
};

export const SelectAgeChildren = ({ selectedAge, onChangeAge, options, index, error }: SelectAgeChildrenPropsType) => {

    return (
        <>
            <div className={style["age__select"]}>
                <p className={style["age__label"]}>Возраст {index + 1}-ого ребенка</p>
                <Select
                    value={selectedAge}
                    onChange={onChangeAge}
                    options={options}
                    defaultValue={options[0].label}
                    placeholder=""
                    className={style.select}
                    // required
                    styles={{
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: "#1855B7",
                            cursor: "pointer",
                            border: 'none',
                        }),
                        singleValue: (provided) => ({
                            ...provided,
                            color: 'white',
                        }),
                        option: (provided) => ({
                            ...provided,
                            cursor: "pointer",
                        })
                    }}
                />
            </div>
            {error && <p style={{ color: 'red', marginTop: '-20px' }}>{error}</p>}
        </>
    )
}