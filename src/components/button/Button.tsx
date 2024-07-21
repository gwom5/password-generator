import React from "react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowLeftBlack from "../icons/ArrowLeftBlack";

interface ButtonProps {
    generatePassword: () => void;
}
const Button: React.FC<ButtonProps> = ({ generatePassword }) => {
    const [hover, setHover] = React.useState(false);

    return (
        <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={generatePassword}
            className="h-full flex justify-center items-center space-x-4 w-full py-3 bg-green-500 text-black hover:bg-transparent hover:border-2 border-green-400 hover:text-green-400">
            <h1>GENERATE</h1>
            {hover ? <ArrowLeft /> : <ArrowLeftBlack />}
        </button>
    );
}

export default Button;
