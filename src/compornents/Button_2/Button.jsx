import styles from "./Button.module.css"

function Button(props) {

    const handleClick = () => {
        alert("クリックされました!")
    }

    const {type,disabled} = props
    
    return(
        <div style={{padding:"20px", display:"flex", flexDirection:"column", backgroundColor:"red"}}>
            <button type="button">
                クリック
            </button>
            <button type="button" onClick={handleClick}>
                クリック２
            </button>
            <button type = {type} disabled = {disabled}>
                クリック３
            </button>
        </div>
    )
}
export default Button


function Button2({type,disabled,onClick,children}) {
    return(
        <button style={{padding:"20px", display:"flex", flexDirection:"column", backgroundColor:"blue"}}
        type={type}
        disabled={disabled}
        onClick={onClick}
        >
            {children}
        </button>
    )
}
export {Button2};

function Button3({type,disabled,onClick,children}) {
    return(
        <button className={styles.button} style={{padding:"20px", display:"flex", flexDirection:"column"}}
        type={type}
        disabled={disabled}
        onClick={onClick}
        >
            {children}
        </button>
    )
}
export {Button3};