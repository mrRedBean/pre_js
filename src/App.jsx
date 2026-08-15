import "./App.css"
import Button, { Button2, Button3} from "./compornents/Button_2/Button";


function App() {

  const handleClicks = () => {
    alert("クリックされました！")
  }
  const handClick = () => {
    console.log("発動しました!")
  }

  return(
    <>
      <h1>Hello World</h1>
      <Button />
      <Button2>普通のボタン</Button2>
      <Button2 onClick={handleClicks}>
        クリック
      </Button2>
      <Button2
        type="button"
        disabled={true}
        onClick={handleClicks}>
          おおお
        </Button2>

        <Button3>普通のボタン</Button3>
        <Button3 type="button" onClick={handClick}>
          大きくクリック
        </Button3>
        <Button3
        onClick={handClick}
        >
          コンソール見てみて！
        </Button3>


    </>
  )
};

export default App;