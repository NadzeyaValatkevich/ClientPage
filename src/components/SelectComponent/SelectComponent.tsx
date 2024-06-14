import Select, { CSSObjectWithLabel, ControlProps } from 'react-select';
import { useState } from 'react';
import { OptionItemType } from '../../redux/types/datesGuestsTypes';
// import 'react-select/dist/react-select.css';
import "./SelectComponent.scss";
import { Controller, useFormContext } from 'react-hook-form';

type SelectComponentPropsType = {
    options: OptionItemType[],
    error?: string,
    label: string,
    className?: string | undefined,
    name?: string | undefined
};


export const SelectComponent = ({ options, label, className, name }: SelectComponentPropsType) => {

    const [currentValue, setCurrentValue] = useState<string | null>(null);

    // const onChange = (newValue: SingleValue<OptionItemType | string>) => {
    //     if (newValue && typeof newValue !== 'string') {
    //         setCurrentValue(newValue.value);
    //     }
    // };

    const { control } = useFormContext();

    return (
        <>
            <div className={className}>
                <p className="select__label">{label}</p>
                <Controller
                    name={name ? name : ""}
                    control={control}
                    defaultValue={options[0].label}
                    render={({ field }) => (
                        <Select
                            {...field}
                            value={options.find(option => option.value === field.value)}
                            // defaultValue={options[0]}
                            placeholder={options[0].label}
                            options={options}
                            // onChange={onChange}
                            onChange={(option) => {
                                field.onChange((option as OptionItemType).value)
                                setCurrentValue((option as OptionItemType).value)
                            }}
                            isSearchable={false}
                            classNamePrefix={"custom-select"}

                            styles={{
                                control: (provided: CSSObjectWithLabel, state: ControlProps<OptionItemType, false>) => ({
                                    ...provided,
                                    borderColor: currentValue ? '#1855b7' : '#696f79',
                                    boxShadow: currentValue ? '$shadow - 1' : "none",
                                    '&:hover': {
                                        borderColor: 'none',
                                        boxShadow: '$shadow - 1'
                                    },
                                    ...(state.isFocused && {
                                        borderColor: '$text-primary',
                                        boxShadow: '$shadow - 1',
                                    })

                                }),
                                singleValue: (provided: CSSObjectWithLabel) => ({
                                    ...provided,
                                    color: currentValue ? '#0f2664' : '#696f79',
                                }),
                                dropdownIndicator: (provided: CSSObjectWithLabel) => ({
                                    ...provided,
                                    color: currentValue ? '#1855b7' : '#696f79',
                                })
                            }}
                        />

                    )} />
            </div>
        </>
    )
}