import styles from "./Button.module.css";


export default function Button(props){

    const {type,disabled,children,onClick} = props

    const handleEvent = (eventName) => (e) => {
        console.log("Button clicked")
    }

    return (
        <>
            <div style={{padding:"50px",display:"flex",flexDirection:"column"}}>
                <button type={type} disabled={disabled} onClick={onClick}>
                    {children}
                </button>

                {/* 上記はpropsの使用(35:38)、下記はそのまま */}
                <button 
                className={styles.button}
                type="button"
                disabled={false}
                onClick={handleEvent("onClick")}
                style={{padding:"20px", fontSize:"20px", cursor:"pointer"}}

                >
                    ボタンクリック２
                </button>
            </div> 
        </>

    )
}