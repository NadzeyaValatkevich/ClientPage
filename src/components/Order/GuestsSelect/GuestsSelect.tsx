import { useEffect, useRef, useState } from "react";
import style from "./GuestsSelect.module.scss";
import guestsIcon from "../../../assets/icons/users.svg";
import { SelectCountPeople } from "./SelectCountPeople";
import { SelectAgeChildren } from "./SelectAgeChildren";
import { Button } from "../../Button/Button";

export type OptionType = {
    value: number;
    label: string;
};

export type OptionsAgePropsType = OptionType[];

const options: OptionsAgePropsType = [];

for (let i = 0; i <= 17; i++) {
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
    const [childAges, setChildAges] = useState<Array<OptionType | undefined>>([]);
    const [formattedValue, setFormattedValue] = useState("");
    const [childAgeErrors, setChildAgeErrors] = useState<string[]>([]);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    const formatPeople = () => {
        let valueCountPeople = "";

        if (adults % 10 === 1 && adults !== 11) {
            valueCountPeople = adults + " взрослый, ";
        } else {
            valueCountPeople = adults + " взрослых, ";
        }


        if (children === 1) {
            valueCountPeople = valueCountPeople + children + " ребенок";
        } else if (children >= 2 && children <= 4) {
            valueCountPeople = valueCountPeople + children + " ребенка";
        } else {
            const lastDigit = children % 10;
            const secondLastDigit = Math.floor(children / 10) % 10;

            if (lastDigit >= 5 || lastDigit === 0 || (secondLastDigit !== 1 && lastDigit >= 1)) {
                valueCountPeople = valueCountPeople + children + " детей";
            } else {
                valueCountPeople = valueCountPeople + children + " ребенок";
            }
        }

        return valueCountPeople;
    };


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
        setChildAges((lastAges) => [...lastAges, undefined])
    };

    const handleChildDecrement = () => {
        if (children > 0) {
            setChildren((lastChildren) => lastChildren - 1);
            setChildAges((lastAges) => lastAges.slice(0, -1))
        }
    };

    const handleAgeChange = (indexAge: number, newAge: OptionType | undefined) => {
        setChildAges((lastAges) => {
            return lastAges.map((age: OptionType | undefined, index: number) => index === indexAge ? newAge : age)
        });

        const updatedChildAgeErrors = [...childAgeErrors];
        updatedChildAgeErrors[indexAge] = "";
        setChildAgeErrors(updatedChildAgeErrors);
    };

    const handleButtonClick = () => {

        const newErrors = childAges.map((age: OptionType | undefined) => {
            return age === undefined ? "Поле обязательно к заполнению" : "";
        });
        setChildAgeErrors(newErrors);

        if (newErrors.every(error => error === "")) {
            const formattedPeople = formatPeople();
            setFormattedValue(formattedPeople);
            setIsOpen(false);
        }
    };

    return (
        <div className={formattedValue ? `${style.customDropDown} ${style["customDropDown--selected"]}` : style.customDropDown}>
            <div className={style["customDropDown__item"]} onClick={toggleDropdown}>
                <input className={style["customDropDown__item-input"]} value={formattedValue} readOnly />
                <img className={style["customDropDown__item-image"]} src={guestsIcon} alt="Guests" />
            </div>
            {isOpen && (
                <div className={style.guestsSelectBlock} ref={modalRef}>
                    <SelectCountPeople title={"Количество взрослых"} value={adults} onIncrement={handleAdultIncrement}
                        onDecrement={handleAdultDecrement} />
                    <SelectCountPeople title={"Количество детей"} value={children} onIncrement={handleChildIncrement}
                        onDecrement={handleChildDecrement} />
                    {childAges.map((age, index) => (
                        <SelectAgeChildren key={index} selectedAge={age}
                            onChangeAge={(newAge: OptionType | undefined) => handleAgeChange(index, newAge)}
                            options={options}
                            index={index}
                            error={childAgeErrors[index]}
                        />
                    ))}
                    <Button className={style["customDropDown__btn"]} value={"Готово"} onClick={handleButtonClick} />
                </div>
            )}

        </div>
    )
}