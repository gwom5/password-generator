import React from "react";
import './SelectorInput.css';

interface SelectorInputProps {
    charLength: number;
    optionsList: {
       name: string;
       label: string;
    }[];
    options: {
        uppercase: boolean;
        lowercase: boolean;
        numbers: boolean;
        symbols: boolean;
    };
    handleCharLength: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectorInput: React.FC<SelectorInputProps> = (props) => {
    const { charLength, optionsList, options, handleCheckboxChange, handleCharLength } = props;
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-md">Character Length</h1>
                <p className="text-green-400 text-3xl">{charLength}</p>
            </div>
            <div className="my-5">
                <input type="range" min="0" max="20" step={4} value={charLength} onChange={handleCharLength} className="custom-slider" />
            </div>
            <div className="flex flex-col items-start space-y-5">
                {
                    optionsList.map((item, index) => (
                        <label key={index} className="flex items-center space-x-5">
                            <input
                                type="checkbox"
                                name={item.name}
                                checked={options[item.name]}
                                onChange={handleCheckboxChange}
                                className="custom-checkbox"
                            />
                            <span>{item.label}</span>
                        </label>
                    ))
                }
            </div>
        </>
    );
}

export default SelectorInput;
