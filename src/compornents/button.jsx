import styles from "./button.module.css"
import { Children, useState } from "react";
function Button (props) {

    const {type, disabled, text, className} = props

    const [count,setCount] = useState(0); 
    const handleClick = () => {
        setCount (count + 1);
    };

    return (
        <button onClick={handleClick} type={type} disabled={disabled} className={`${styles.button} ${styles[className]}`}>
            {text}
        </button>
    )
};

function Button2 (props2) {
    const {type, disabled, text, className} = props2
    
    const DoubleClick = () => {
        alert("2回クリックされました！")
    }

    return (
        <button onDoubleClick={DoubleClick} type={type} disabled={disabled} className={`${styles.button2} ${styles[className]}`}>
            {text}
        </button>
    )
}

function Button3 (props3) {

    const {type, disabled, children, onClick} = props3

    return(
        <button onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    )
}

export { Button,Button2,Button3};
