import React, {useEffect} from "react";
import CopyIdle from "../icons/CopyIdle";
import CopyFilled from "../icons/CopyFilled";


interface CopyProps {
    password: string;
}

const Copy:React.FC<CopyProps> = ({ password }) => {
    const [copyState, setCopyState] = React.useState(false);
    const [hover, setHover] = React.useState(false);

    const handleCopy = async () => {
        if (!password) return;
        try {
            await navigator.clipboard.writeText(password);
            setCopyState(true);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    useEffect(() => {
        if (copyState) {
            const timer = setTimeout(() => {
                setCopyState(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [copyState]);

    return (
        <div>
            <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleCopy} className="flex  space-x-2 items-center text-green-400 hover:text-green-500">
                {copyState && <span className="text-xs">COPIED</span>}
                {hover ?  <CopyFilled />: <CopyIdle />}
            </button>
        </div>
  );
}
export default Copy;
