import React, {useEffect, useState} from "react";
import SelectorInput from "./components/selectorInput/SelectorInput";
import StrengthIndicator from "./components/strengthIndicator/StrengthIndicator";
import Copy from "./components/copy/Copy";
import Button from "./components/button/Button";

const App = () => {
    const [password, setPassword] = useState('');
    const [charLength, setCharLength] = useState(0);
    const [options, setOptions] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false
    });

    const optionList = [
        { name: 'uppercase', label: 'Include Uppercase Letters' },
        { name: 'lowercase', label: 'Include Lowercase Letters' },
        { name: 'numbers', label: 'Include Numbers' },
        { name: 'symbols', label: 'Include Symbols' },
    ];

    const generatePassword = () => {
        const { uppercase, lowercase, numbers, symbols } = options;
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numChars = '0123456789';
        const symbolsChars = '!@#$%^&*()_+[]{}|;:,.<>?';
        let characters = '';
        if (uppercase) characters += uppercaseLetters;
        if (lowercase) characters += lowercaseLetters;
        if (numbers) characters += numChars;
        if (symbols) characters += symbolsChars;
        let passwordVal = '';

        for (let i = 0; i < charLength; i++) {
            passwordVal += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        setPassword(passwordVal);
    }

    const handleCharLength = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setCharLength(value);
        const percentage = (value / 20) * 100;
        document.documentElement.style.setProperty('--slider-value', `${percentage}%`);
    }

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setOptions((prev) => ({ ...prev, [name]: checked }));
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--slider-value', '0%');
    }, []);


    return (
        <div className="flex flex-col justify-center items-center bg-black min-h-screen text-white font-jetbrains">
            <h1 className="text-gray-600 font-bold my-4 text-xl">Password Generator</h1>
            <div className="lg:w-1/4 text-gray-300 text-md">
                <div className="flex mb-5 py-6 px-6 bg-zinc-900 justify-between items-center space-x-2">
                    <p className={`lg:text-2xl text-xl ${password ? '' :  'text-gray-800'} overflow-x-auto`}>{password ? password : 'PTx1f5DaFX'}</p>
                    <Copy password={password} />
                </div>
                <div className="flex flex-col py-6 px-6 bg-zinc-900 justify-between">
                    <SelectorInput
                        optionsList={optionList}
                        charLength={charLength}
                        options={options}
                        handleCharLength={handleCharLength}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                    <StrengthIndicator options={options} charLength={charLength} />
                    <Button generatePassword={generatePassword} />
                </div>
            </div>
        </div>
    );
}

export default App
