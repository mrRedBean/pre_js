import {Button,Button2, Button3} from "./compornents/button";
import "./App.css";
import { useState} from "react";
import Display from "./compornents/Display/button_display";

function App () {

    const [count,setCount] = useState(0); 
    const handleClick = () => {
        setCount (count + 1);
    };


    return (
        <div>
            <>
            <h1>This is the pre_test</h1>
            <Button type="button" disabled={true} text="新規作成" className="new" >
            </Button>
            <Button type="button" disabled={false} text="作成削除" className="delete">
            </Button>
            <Button type="button" disabled={false} text="戻る" className="back">
            </Button>
            </>
            {/* ここから2つ目のコンポーネント */}
            <>
            <h1>これは2つ目のコンポーネントです！</h1>
            <Button2 type="button" disabled={false} text="2回押して！" className="double"></Button2>
            <Button2 type="button" disabled={false} text="2回押さないで！" className="notDouble"></Button2>
            <Button2 type="button" disabled={true} text="まず押せないね！" className="not"></Button2>
            </>
            {/* ここから3つ目のコンポーネント */}
            <>
            <h1>これは3つ目のコンポーネント！<br />
                useStateを使うよ！</h1>
            <Button3 onClick={handleClick} type="button" disabled={false}>
                ボタン
            </Button3>
            <Display count={count}/>
            </>
        </div>
    )
}
export default App;