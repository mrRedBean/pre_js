export default function ButtonEvents() {
    const handleEvent = (hand_eventName) => (e) => {
        console.log(`🔥 ハンドイベント発火: ${hand_eventName}`, e.type);
    };
    const mouseEvent = (mouse_eventName) => (e) => {
        console.log(`🐭 マウスイベント発動: ${mouse_eventName}`, e.type);
    };
    const keyEvent = (key_eventName) => (e) => {
        console.log(`🔑 キーボードイベント発動: ${key_eventName}`, e.type);
    }

    return (
        <>
            <div style={{padding:"50px", display: "flex", flexDirection: "column", gap: "10px"}}>
                <h2>React Button Event Tester</h2>
                <button 
                type="button"
                style={{padding:"20px", fontSize:"18px", cursor:"pointer", backgroundColor: "red"}}
                // background-color = {#red}

                onClick={handleEvent("onClick")}
                onDoubleClick={handleEvent("onDoubleClick")}
                >
                    ハンドイベント
                </button>

                <button
                type="button"
                style={{margin:"20px", fontSize:"18px", cursor:"pointer", backgroundColor: "green"}}

                onMouseDown={mouseEvent("onMouseDown")}
                onMouseUp={mouseEvent("onMouseUp")}
                onMouseEnter={mouseEvent("onMouseEvent")}
                onMouseLeave={mouseEvent("onMouseLeave")}
                // onMouseMove={mouseEvent("onmMouseMove")}
                >
                    マウスイベント
                </button>

                <button 
                type="button"
                style={{padding:"20px", fontSize:"40px"}}

                onKeyDown={keyEvent("onKeyDown")}
                onKeyUp={keyEvent("onKeyUp")}
                >
                    キーボードイベント
                </button>


            </div>
        </>
    );
}