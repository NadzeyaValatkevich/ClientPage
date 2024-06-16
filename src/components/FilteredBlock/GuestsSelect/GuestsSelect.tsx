import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import style from "./GuestsSelect.module.scss";
import guestsIcon from "../../../assets/icons/users.svg";
import guestsGrayIcon from "../../../assets/icons/usersGray.svg";
import { SelectCountPeople } from "./SelectCountPeople";
import { SelectAgeChildren } from "./SelectAgeChildren";
import { Button } from "../../Button/Button";
import { formatPeople } from "../../../utils/functions/formatPeople";
import { ChildAge, GuestsType } from "../../../redux/types/datesGuestsTypes";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../utils/hooks";

export type OptionType = {
    value: number;
    label: string;
};

export type OptionsAgePropsType = ChildAge[];

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

type GuestsSelectPropsType = {
    onGuestsChange: (newGuests: GuestsType) => void,
    value: string,
    setFormattedValue: (value: string) => void
}

export const GuestsSelect = forwardRef(({ onGuestsChange, value, setFormattedValue }: GuestsSelectPropsType, ref: any) => {
    const { id } = useAppSelector(state => state.mainObject.data);

    console.log(ref)

    const [isOpen, setIsOpen] = useState(false);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [childAges, setChildAges] = useState<Array<ChildAge | undefined>>([]);
    const [childAgeErrors, setChildAgeErrors] = useState<string[]>([]);
    const modalRef = useRef<HTMLDivElement>(null);

    const location = useLocation();

    useEffect(() => {

        if (location.pathname === `/main_object/${id}`) {
            setAdults(0);
            setChildren(0);
            setChildAges([])
        }
    }, [id, location.pathname]);

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

    const handleChildIncrement = useCallback(() => {
        setChildren((lastChildren) => lastChildren + 1);
        setChildAges((lastAges) => [...lastAges, undefined])
    }, [setChildren, setChildAges]);

    const handleChildDecrement = useCallback(() => {
        if (children > 0) {
            setChildren((lastChildren) => lastChildren - 1);
            setChildAges((lastAges) => lastAges.slice(0, -1))
        }
    }, [children, setChildren, setChildAges]);

    const handleAgeChange = (indexAge: number, newAge: ChildAge | undefined) => {
        setChildAges((lastAges) => {
            return lastAges.map((age: ChildAge | undefined, index: number) => index === indexAge ? newAge : age)
        });

        const updatedChildAgeErrors = [...childAgeErrors];
        updatedChildAgeErrors[indexAge] = "";
        setChildAgeErrors(updatedChildAgeErrors);
    };

    const handleButtonClick = () => {

        const newErrors = childAges.map((age: ChildAge | undefined) => {
            return age === undefined ? "Поле обязательно к заполнению" : "";
        });
        setChildAgeErrors(newErrors);

        if (newErrors.every(error => error === "")) {
            const formattedPeople = formatPeople(adults, children);
            setFormattedValue(formattedPeople);
            setIsOpen(false);
        }

        const guestsData: GuestsType = {
            adults: adults,
            children: children,
            childAges: childAges,
        };

        onGuestsChange(guestsData);
    };

    return (
        <div className={value ? `${style.customDropDown} ${style["customDropDown--selected"]}` : style.customDropDown}>
            <div className={style["customDropDown__item"]} onClick={toggleDropdown}>
                <input className={style["customDropDown__item-input"]} value={value} readOnly />
                <img className={style["customDropDown__item-image"]} src={value ? guestsIcon : guestsGrayIcon} alt="Guests" />
            </div>
            {isOpen && (
                <div className={style.guestsSelectBlock} ref={modalRef}>
                    <SelectCountPeople title={"Количество взрослых"} value={adults} onIncrement={handleAdultIncrement}
                        onDecrement={handleAdultDecrement} disabled={adults === 50} />
                    <SelectCountPeople title={"Количество детей"} value={children} onIncrement={handleChildIncrement}
                        onDecrement={handleChildDecrement} disabled={!adults || children === 20} />
                    {childAges.map((age, index) => (
                        <SelectAgeChildren key={index} selectedAge={age}
                            onChangeAge={(newAge: OptionType | undefined) => handleAgeChange(index, newAge)}
                            options={options}
                            index={index}
                            error={childAgeErrors[index]}
                        />
                    ))}
                    <Button className={!adults ? `${style["customDropDown__btn"]} ${style["customDropDown__btn-disabled"]}` : style["customDropDown__btn"]}
                        value={"Готово"} onClick={handleButtonClick} disabled={!adults} />
                </div>
            )}

        </div>
    )
})