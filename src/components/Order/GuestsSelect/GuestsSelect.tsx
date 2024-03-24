import { useState } from "react";
import style from "./GuestsSelect.module.scss";
import guestsIcon from "../../../assets/icons/users.svg";
import { SelectCountPeople } from "./SelectCountPeople";
import { SelectAgeChildren } from "./SelectAgeChildren";

type OptionType = {
    value: number;
    label: string;
};

export type OptionsAgePropsType = OptionType[];

const options: OptionsAgePropsType = [];

for (let i = 1; i <= 17; i++) {
    if (i === 1) {
        options.push({ value: i, label: `${i} год` })
    } else if (i > 1 && i < 5) {
        options.push({ value: i, label: `${i} года` })
    } else {
        options.push({ value: i, label: `${i} лет` })
    }
}

export const GuestsSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [age, setAge] = useState(0);



    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    };

    const handleAdultIncrement = () => {
        setAdults((lastAdults) => lastAdults + 1);
    };

    const handleAdultDecrement = () => {
        if (adults > 0) {
            setAdults((lastAdults) => lastAdults - 1);
        }
    };

    const handleChildIncrement = () => {
        setChildren((lastChildren) => lastChildren + 1);
    };

    const handleChildDecrement = () => {
        if (children > 0) {
            setChildren((lastChildren) => lastChildren - 1);
        }
    }

    return (
        <div className={style.customDropDown}>
            <div className={style["customDropDown__item"]} onClick={toggleDropdown}>
                <input className={style["customDropDown__item-input"]} />
                <img className={style["customDropDown__item-image"]} src={guestsIcon} alt="Guests" />
            </div>
            {isOpen && (
                <div className={style.guestsSelectBlock}>
                    <SelectCountPeople title={"Количество взрослых"} value={adults} onIncrement={handleAdultIncrement}
                        onDecrement={handleAdultDecrement} />
                    <SelectCountPeople title={"Количество детей"} value={children} onIncrement={handleChildIncrement}
                        onDecrement={handleChildDecrement} />
                    <SelectAgeChildren selectedAge={age} onChangeAge={setAge} options={options} />
                </div>
            )}

        </div>
    )
}