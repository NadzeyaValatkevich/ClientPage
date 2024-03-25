import Select from 'react-select';
import style from "./SelectAgeChildren.module.scss";
// import 'react-select/dist/react-select.css';

type SelectAgeChildrenPropsType = {
    selectedAge: number,
    onChangeAge: (newAge: number) => void,
    options: any,
    index: number
};

export const SelectAgeChildren = ({ selectedAge, onChangeAge, options, index }: SelectAgeChildrenPropsType) => {
    return (
        <div className={style["age__select"]}>
            <p className={style["age__label"]}>Возраст {index + 1}-ого ребенка</p>
            <Select
                value={selectedAge}
                onChange={onChangeAge}
                options={options}
                defaultValue={options[0].label}
                placeholder=""
                className={style.select}
                styles={{
                    control: (provided, state) => ({
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
    )
}