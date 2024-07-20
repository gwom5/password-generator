import React, {useState} from "react";
import "./App.css";
import CopyIdle from "./components/icons/CopyIdle";
import ArrowLeft from "./components/icons/ArrowLeft";

const App = () => {
    const [charLength, setCharLength] = useState(4);
    const [options, setOptions] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false
    });

    const handleCharLength = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharLength(parseInt(e.target.value));
    }

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setOptions((prev) => ({ ...prev, [name]: checked }));
    };

    return (
        <div className="flex flex-col justify-center items-center bg-black min-h-screen text-white font-jetbrains">
            <h1 className="text-gray-600 font-bold my-4 text-xl">Password Generator</h1>
            <div className="lg:w-1/4 text-gray-300 text-md">
                <div className="flex mb-5 py-6 px-6 bg-zinc-900 justify-between items-center">
                    <p className="text-3xl">PTx1f5DaFX</p>
                    <div>
                        <button className="text-green-400 hover:text-green-500">
                            <CopyIdle />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col py-6 px-6 bg-zinc-900 justify-between">
                    <div className="flex justify-between items-center">
                        <h1 className="text-md">Character Length</h1>
                        <p className="text-green-400 text-3xl">{charLength}</p>
                    </div>
                    <div className="my-5">
                        <input type="range" min="0" max="20" step={2} value={charLength} onChange={handleCharLength} className="custom-slider" />
                    </div>
                    <div className="flex flex-col items-start space-y-5">
                        {
                            [
                                { name: 'uppercase', label: 'Include Uppercase Letters' },
                                { name: 'lowercase', label: 'Include Lowercase Letters' },
                                { name: 'numbers', label: 'Include Numbers' },
                                { name: 'symbols', label: 'Include Symbols' },
                            ].map((item, index) => (
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
                    <div className="flex my-5 py-6 px-6 bg-gray-950 justify-between items-center">
                        <h1 className="text-gray-500 text-sm font-semibold">STRENGTH</h1>
                        <div className="flex space-x-3 items-center">
                            <h1 className="text-xl">MEDIUM</h1>
                            <div>Indic</div>
                        </div>
                    </div>
                    <div>
                        <button className="flex justify-center items-center space-x-4 w-full py-3 bg-green-500 text-black hover:bg-transparent hover:border-2 border-green-400 hover:text-green-400">
                            <h1>GENERATE</h1>
                            <ArrowLeft />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App
