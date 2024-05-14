import Select, { CSSObjectWithLabel, SingleValue } from 'react-select';
import { useState } from 'react';
import { OptionItemType } from '../../redux/types/datesGuestsTypes';
// import 'react-select/dist/react-select.css';
import "./SelectComponent.scss";

type SelectComponentPropsType = {
    options: OptionItemType[],
    error?: string,
    label: string,
    className?: any
};


export const SelectComponent = ({ options, label, className }: SelectComponentPropsType) => {

    const [currentTimeIn, setCurrentTimeIn] = useState<string | null>(null);

    // const getValue = () => {
    //     return currentTimeIn ? options.find((t: any) => t.value === currentTimeIn) : ""
    // };

    const onChange = (newValue: SingleValue<OptionItemType | string>) => {
        if (newValue && typeof newValue !== 'string') {
            setCurrentTimeIn(newValue.value);
        }
    };

    return (
        <>
            <div className={className}>
                <p className="select__label">{label}</p>
                <Select
                    defaultValue={options[0]}
                    options={options}
                    // value={currentTimeIn}
                    // value={getValue()}
                    onChange={onChange}
                    isSearchable={false}
                    classNamePrefix={"custom-select"}


                    styles={{
                        control: (provided: CSSObjectWithLabel) => ({
                            ...provided,
                            borderColor: currentTimeIn ? '#1855b7' : '#696f79',
                            boxShadow: currentTimeIn ? "0px 4px 7px 3px rgba(24, 85, 183, 0.11)" : "none",

                        }),
                        singleValue: (provided: CSSObjectWithLabel) => ({
                            ...provided,
                            color: currentTimeIn ? '#0f2664' : '#696f79',
                        }),
                        dropdownIndicator: (provided: CSSObjectWithLabel) => ({
                            ...provided,
                            color: currentTimeIn ? '#1855b7' : '#696f79',
                        })
                    }}
                />
            </div>
            {/* {error && <p style={{ color: 'red', marginTop: '-20px' }}>{error}</p>} */}
        </>
    )
}