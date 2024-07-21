import { useEffect, useState } from "react";
import './StrengthIndicator.css';

enum Strength {
    TOO_WEAK = 'TOO WEAK',
    WEAK = 'WEAK',
    MEDIUM = 'MEDIUM',
    STRONG = 'STRONG'
}
const StrengthIndicator = ({ charLength, options }) => {
    const [strength, setStrength] = useState<Strength | null>(null);

    const calculateStrength = () => {
        const { uppercase, lowercase, numbers, symbols } = options;
        const optionsSelected = [uppercase, lowercase, numbers, symbols].filter(Boolean).length;

        if (!charLength && !optionsSelected) {
            setStrength(null);
        } else if (charLength <= 6 || !optionsSelected) {
            setStrength(Strength.TOO_WEAK);
        } else if (charLength >= 6 && optionsSelected === 1) {
            setStrength(Strength.WEAK);
        } else if (charLength >= 8 && optionsSelected === 2) {
            setStrength(Strength.MEDIUM);
        }
        else if (charLength >= 6 && optionsSelected >= 3) {
            setStrength(Strength.STRONG);
        }
    }

    const renderStrengthBars = () => {
        const bars = Array(4).fill('empty');
        if (strength === Strength.TOO_WEAK) bars[0] = 'too-weak';
        if (strength === Strength.WEAK) bars.fill('weak', 0, 2);
        if (strength === Strength.MEDIUM) bars.fill('medium', 0, 3);
        if (strength === Strength.STRONG) bars.fill('strong');

        return bars.map((bar, index) => (
            <div key={index} className={`strength-bar ${bar}`}></div>
        ));
    };

    useEffect(() => {
        calculateStrength();
    }, [charLength, options]);

    return (
        <>
            <div className="flex my-5 py-6 px-6 bg-gray-950 justify-between items-center">
                <h1 className="text-gray-500 text-sm font-semibold">STRENGTH</h1>
                <div className="flex space-x-3 items-center">
                    <h1 className="text-xl">{strength}</h1>
                    <div className="flex space-x-2">{renderStrengthBars()}</div>
                </div>
            </div>
        </>
    )
}

export default StrengthIndicator;
