import Select, { CSSObjectWithLabel } from 'react-select';
import style from "./SelectComponent.module.scss";
// import 'react-select/dist/react-select.css';

type SelectComponentPropsType = {
    options: any,
    error?: string,
    label: string,
    className?: any
};


export const SelectComponent = ({ options, label, className, error }: SelectComponentPropsType) => {

    return (
        <>
            <div className={className}>
                <p className={style["select__label"]}>{label}</p>
                <Select
                    defaultValue={options[0]}
                    options={options}

                    styles={{
                        control: (provided: CSSObjectWithLabel) => ({
                            ...provided,
                            height: "67px",
                            cursor: "pointer",
                            borderColor: "#1855b7",
                            "&:hover": {
                                borderColor: "#0f2664",
                            },
                        }),
                        singleValue: (provided: CSSObjectWithLabel) => ({
                            ...provided,
                            color: '#0f2664',
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "17.07px"
                        }),
                        option: (provided: CSSObjectWithLabel) => ({
                            ...provided,
                            cursor: "pointer",
                        }),
                        indicatorSeparator: (provided: CSSObjectWithLabel) => ({
                            ...provided,
                            width: "0px"
                        }),
                    }}
                />
            </div>
            {/* {error && <p style={{ color: 'red', marginTop: '-20px' }}>{error}</p>} */}
        </>
    )
}